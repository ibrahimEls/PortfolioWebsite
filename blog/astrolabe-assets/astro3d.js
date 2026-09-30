/* Interactive version of the Astrolabe cinematic movies.

   One box, drawn twice through a vertical split: the N-body truth to the
   left of the bar, the chosen model to the right, both from the same
   camera so the bar can sit anywhere and the two halves line up. Drag to
   orbit, scroll to zoom, shift-drag (or two fingers) to pan, drag the bar
   to compare. Play runs the movie's own timeline: structure forms over the
   evolution keyframes while the camera orbits, then it zooms into the most
   massive halo and holds there.

   Rendering follows scripts/cinematic_movie.py: column density through the
   box, drawn as additive Gaussian sprites whose size is each particle's
   smoothing length (distance to its 8th neighbour), accumulated in a float
   target and mapped through log10(Sigma / mean column) onto the magma table
   with the lo/hi the movie derived from its z = 0 truth frame. Particles
   are drawn about the camera target with the periodic minimum image and
   clipped to the movie's cylinder around the orbit axis.

   Data: blog/astrolabe-assets/sim/<case>/figure.json, from
   tools/build_astro3d.py. Needs THREE (three.min.js) on the page.
*/
(function () {
    'use strict';

    var root = document.getElementById('astro3d');
    if (!root || typeof THREE === 'undefined') return;

    // the data repository (github.com/ibrahimEls/AstrolabeData), served by
    // its own Pages site, with one folder per case and an index of them
    var ROOT = root.getAttribute('data-root');
    var CASE = root.getAttribute('data-case');
    var DIR = ROOT + '/' + CASE;

    var canvas = root.querySelector('.astro3d__canvas');
    var stage = root.querySelector('.astro3d__stage');
    var hud = {
        z: root.querySelector('.astro3d__z'),
        t: root.querySelector('.astro3d__t'),
        left: root.querySelector('.astro3d__label--left'),
        right: root.querySelector('.astro3d__label--right'),
        bar: root.querySelector('.astro3d__scale-bar'),
        barText: root.querySelector('.astro3d__scale-text'),
        loading: root.querySelector('.astro3d__loading')
    };
    var splitEl = root.querySelector('.astro3d__split');
    var slider = root.querySelector('.astro3d__time');
    var clock = root.querySelector('.astro3d__clock');
    var playBtn = root.querySelector('.ps3d__play');
    var modelSel = root.querySelector('.astro3d__model');
    var caseSel = root.querySelector('.astro3d__case');
    var resetBtn = root.querySelector('.astro3d__reset');
    var status = root.querySelector('.ps3d__status');

    // --- state --------------------------------------------------------------

    var FIG = null;                 // figure.json
    var L = 1, N_FULL = 1, SPACING = 1;
    var T_EV = 30, T_ZOOM = 12, T_HOLD = 10, T_TOTAL = 52;
    var time = 0;                   // seconds along the movie timeline
    var playing = false, lastTick = 0;
    var auto = true;                // camera follows the movie's path
    var cam = { theta: 0, elev: 15, hw: 1, target: new THREE.Vector3() };
    var split = 0.5;
    var model = 'small';
    var dirty = true;
    var loads = 0;                  // loads in flight, for the status line
    var DEBUG_ONLY = null;          // draw one level of detail alone (debug hook)

    // --- data ---------------------------------------------------------------

    var cache = {};
    var bytesDone = 0, bytesTotal = 0;

    function fetchBin(file, ctor) {
        var url = DIR + '/' + file;
        if (cache[url]) return cache[url];
        var p = fetch(url).then(function (r) {
            if (!r.ok) throw new Error(file + ': ' + r.status);
            return r.arrayBuffer();
        }).then(function (buf) {
            bytesDone += buf.byteLength;
            progress();
            // kept on the promise so a frame can bind it synchronously
            p._v = new ctor(buf);
            return p._v;
        });
        cache[url] = p;
        return p;
    }
    var u16 = function (f) { return fetchBin(f, Uint16Array); };
    var u8 = function (f) { return fetchBin(f, Uint8Array); };
    function have(f) { var p = cache[DIR + '/' + f]; return !!(p && p._v); }
    function got(f) { return cache[DIR + '/' + f]._v; }

    function progress() {
        if (!status) return;
        if (loads > 0) {
            status.textContent = 'Loading ' + (bytesDone / 1e6).toFixed(1)
                + ' of ' + (bytesTotal / 1e6).toFixed(1) + ' MB…';
        } else {
            status.textContent = '';
        }
    }

    function seriesBytes(field) {
        return field.series.reduce(function (s, k) { return s + k.n * 7; }, 0);
    }
    function z0Bytes(field) {
        return field.z0.n * 7 + field.halo.n * 7;
    }

    // --- renderer ------------------------------------------------------------

    var renderer = new THREE.WebGLRenderer({
        canvas: canvas, antialias: false, alpha: false,
        powerPreference: 'high-performance', preserveDrawingBuffer: false
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.autoClear = false;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    var gl = renderer.getContext();
    var pointRange = gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE);
    var SIZE_MAX = Math.min(64, pointRange ? pointRange[1] : 64);

    /* The accumulation target. Sprites are blended into it additively, and
       blending into a 32-bit float target needs EXT_float_blend, which
       mobile browsers often lack: without it every draw is a GL error and
       the pane stays black. A half-float target blends wherever it can be
       rendered to, so float is used only when both extensions are there,
       and the choice is verified after the first frame. */
    var ext = renderer.extensions;
    var floatOK = renderer.capabilities.isWebGL2
        && ext.has('EXT_color_buffer_float') && ext.has('EXT_float_blend');
    var accumType = floatOK ? THREE.FloatType : THREE.HalfFloatType;
    function accumTarget(type) {
        return new THREE.WebGLRenderTarget(2, 2, {
            type: type, format: THREE.RGBAFormat,
            depthBuffer: false, stencilBuffer: false,
            minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter
        });
    }
    var accum = accumTarget(accumType);
    var verified = false;
    // sprites are accumulated at 1/64 of their weight so a dense core does
    // not overflow a half-float pixel; the composite scales it back
    var WSCALE = 1 / 64;

    var scene = new THREE.Scene();
    var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 10);
    camera.up.set(0, 0, 1);

    var VERT = [
        'attribute vec3 position2;',
        'attribute float hq;',
        'attribute float hq2;',
        'uniform float uMode, uL, uRho, uPx, uMix;',
        'uniform float uHmin, uHmax, uHmin2, uHmax2, uHfloor;',
        'uniform float uWeight, uSizeMax, uSigma, uRcut;',
        'uniform vec3 uTarget, uCentre;',
        'varying float vAmp, vSig, vSize;',
        'vec3 mic(vec3 d) { return d - uL * floor(d / uL + 0.5); }',
        'void main() {',
        '  vec3 p; float h;',
        '  if (uMode < 0.5) {',
        // evolution keyframes: interpolate between the pair, minimum image
        '    vec3 d = position2 - position; d -= floor(d + 0.5);',
        '    p = (position + uMix * d) * uL;',
        '    float h1 = uHmin * pow(uHmax / uHmin, hq);',
        '    float h2 = uHmin2 * pow(uHmax2 / uHmin2, hq2);',
        '    h = exp(mix(log(h1), log(h2), uMix));',
        '  } else if (uMode < 1.5) {',
        '    p = position * uL;',
        '    h = uHmin * pow(uHmax / uHmin, hq);',
        '  } else {',
        // the halo cut-out is stored relative to its own centre
        '    p = uCentre + (position * 2.0 - 1.0) * uRcut;',
        '    h = uHmin * pow(uHmax / uHmin, hq);',
        '  }',
        '  h = max(h, uHfloor);',
        '  vec3 d = mic(p - uTarget);',
        '  bool drop = dot(d.xy, d.xy) > uRho * uRho;',
        // at z = 0 the full-box set yields to the cut-out inside its sphere
        '  if (uMode > 0.5 && uMode < 1.5) {',
        '    vec3 e = mic(p - uCentre);',
        '    if (dot(e, e) < uRcut * uRcut) drop = true;',
        '  }',
        '  if (drop) {',
        '    gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0;',
        '    vAmp = 0.0; vSig = 1.0; vSize = 1.0; return;',
        '  }',
        '  vec4 mv = modelViewMatrix * vec4(uTarget + d, 1.0);',
        '  gl_Position = projectionMatrix * mv;',
        '  float sig = uSigma * h * uPx;',
        '  float size = clamp(6.0 * sig, 1.0, uSizeMax);',
        '  sig = clamp(sig, 0.5, size * 0.25);',
        '  float amp = uWeight / (6.2831853 * sig * sig);',
        '  if (size <= 1.5) amp = uWeight;',
        '  vAmp = amp; vSig = sig; vSize = size;',
        '  gl_PointSize = size;',
        '}'
    ].join('\n');

    var FRAG = [
        'varying float vAmp, vSig, vSize;',
        'void main() {',
        '  if (vSize <= 1.5) { gl_FragColor = vec4(vAmp, 0.0, 0.0, 1.0); return; }',
        '  vec2 c = (gl_PointCoord - 0.5) * vSize;',
        '  float r2 = dot(c, c);',
        '  if (r2 > vSize * vSize * 0.25) discard;',
        '  gl_FragColor = vec4(vAmp * exp(-0.5 * r2 / (vSig * vSig)), 0.0, 0.0, 1.0);',
        '}'
    ].join('\n');

    function makeMaterial(mode) {
        return new THREE.ShaderMaterial({
            vertexShader: VERT, fragmentShader: FRAG,
            transparent: true, depthTest: false, depthWrite: false,
            blending: THREE.AdditiveBlending,
            uniforms: {
                uMode: { value: mode }, uL: { value: 1 }, uRho: { value: 1 },
                uPx: { value: 1 }, uMix: { value: 0 },
                uHmin: { value: 1 }, uHmax: { value: 1 },
                uHmin2: { value: 1 }, uHmax2: { value: 1 }, uHfloor: { value: 0 },
                uWeight: { value: 1 }, uSizeMax: { value: SIZE_MAX },
                uSigma: { value: 0.5 }, uRcut: { value: 1 },
                uTarget: { value: new THREE.Vector3() },
                uCentre: { value: new THREE.Vector3() }
            }
        });
    }

    /* The movie smooths in image space: a pixel holding fewer than n_min
       particles shows the 16 px Gaussian of the whole field instead, so the
       filaments' light leaks into the voids and they glow faintly. Per
       particle sprites cannot do that on their own; a blur of the
       accumulated field, taken per pixel as max(sharp, blurred), gives the
       same two regimes. Separable, at half size: sigma is 16 px at a
       1080 px frame, scaled to the canvas. */
    var HAZE_SIGMA_1080 = 16, HAZE_GAIN = 1;
    function blurTarget() {
        return new THREE.WebGLRenderTarget(2, 2, {
            type: accumType, format: THREE.RGBAFormat,
            depthBuffer: false, stencilBuffer: false,
            minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter
        });
    }
    var hazeH = blurTarget(), hazeV = blurTarget();
    function blurMaterial() {
        return new THREE.ShaderMaterial({
            depthTest: false, depthWrite: false,
            uniforms: { tSrc: { value: null }, uStep: { value: new THREE.Vector2() },
                        uSigma: { value: 8 } },
            vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
            fragmentShader: [
                'uniform sampler2D tSrc; uniform vec2 uStep; uniform float uSigma;',
                'varying vec2 vUv;',
                'void main() {',
                '  float s = 0.0, wsum = 0.0;',
                '  int n = int(ceil(uSigma * 3.0));',
                '  for (int i = -64; i <= 64; i++) {',
                '    if (i < -n || i > n) continue;',
                '    float w = exp(-0.5 * float(i * i) / (uSigma * uSigma));',
                '    s += w * texture2D(tSrc, vUv + float(i) * uStep).r;',
                '    wsum += w;',
                '  }',
                '  gl_FragColor = vec4(s / wsum, 0.0, 0.0, 1.0);',
                '}'
            ].join('\n')
        });
    }
    var blurHMat = blurMaterial(), blurVMat = blurMaterial();
    var blurQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), blurHMat);
    var blurScene = new THREE.Scene();
    blurScene.add(blurQuad);

    // the log + colour-table pass
    var lutTex = null;
    var compMat = new THREE.ShaderMaterial({
        depthTest: false, depthWrite: false,
        uniforms: {
            tAcc: { value: accum.texture }, tHaze: { value: hazeV.texture },
            tLut: { value: null },
            uNorm: { value: 1 }, uLo: { value: 0 }, uHi: { value: 1 },
            uHazeGain: { value: 1 }
        },
        vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
        fragmentShader: [
            'uniform sampler2D tAcc, tHaze, tLut; uniform float uNorm, uLo, uHi, uHazeGain;',
            'varying vec2 vUv;',
            'void main() {',
            '  float s = max(texture2D(tAcc, vUv).r, uHazeGain * texture2D(tHaze, vUv).r) * uNorm;',
            '  float v = (log(s + 1e-3) / 2.302585 - uLo) / (uHi - uLo);',
            '  gl_FragColor = texture2D(tLut, vec2(clamp(v, 0.0, 1.0), 0.5));',
            '}'
        ].join('\n')
    });
    var quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), compMat);
    var quadScene = new THREE.Scene();
    quadScene.add(quad);
    var quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // --- layers ---------------------------------------------------------------

    /* One drawable per field and level of detail. `series` is rebuilt when
       the keyframe pair changes; `z0` and `halo` are built once. */
    function newLayer(mode) {
        var mat = makeMaterial(mode);
        var pts = new THREE.Points(new THREE.BufferGeometry(), mat);
        pts.frustumCulled = false;
        pts.visible = false;
        scene.add(pts);
        return { pts: pts, mat: mat, pair: -1, ready: false };
    }
    var sides = {
        truth: { name: 'truth', series: newLayer(0), z0: newLayer(1), halo: newLayer(2) },
        model: { name: null, series: newLayer(0), z0: newLayer(1), halo: newLayer(2) }
    };

    function setGeometry(layer, pos, pos2, hq, hq2) {
        var g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(pos, 3, true));
        g.setAttribute('position2', new THREE.BufferAttribute(pos2 || pos, 3, true));
        g.setAttribute('hq', new THREE.BufferAttribute(hq, 1, true));
        g.setAttribute('hq2', new THREE.BufferAttribute(hq2 || hq, 1, true));
        g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e9);
        var old = layer.pts.geometry;
        layer.pts.geometry = g;
        if (old) old.dispose();
    }

    // load every evolution keyframe of a field, then its z = 0 sets
    function loadField(fieldName) {
        var f = FIG.fields[fieldName];
        loads++;
        bytesTotal += seriesBytes(f);
        progress();
        var ps = [];
        f.series.forEach(function (k) { ps.push(u16(k.file), u8(k.h_file)); });
        return Promise.all(ps).then(function () {
            loads--;
            progress();
            return f;
        });
    }
    function loadZ0(fieldName) {
        var f = FIG.fields[fieldName];
        if (f._z0) return f._z0;
        loads++;
        bytesTotal += z0Bytes(f);
        progress();
        f._z0 = Promise.all([u16(f.z0.file), u8(f.z0.h_file),
                             u16(f.halo.file), u8(f.halo.h_file)])
            .then(function () { loads--; progress(); return f; });
        return f._z0;
    }

    function evolves() { return FIG.fields.truth.series.length > 1; }

    function keyframePair(a) {
        var ser = FIG.fields.truth.series, n = ser.length;
        if (n < 2) return { k: 0, w: 1 };
        if (a >= ser[n - 1].a) return { k: n - 2, w: 1 };
        var k = 0;
        while (k < n - 2 && ser[k + 1].a <= a) k++;
        var w = (a - ser[k].a) / (ser[k + 1].a - ser[k].a);
        return { k: k, w: Math.min(1, Math.max(0, w)) };
    }

    /* Point the side's layers at the data for scale factor a. Returns false
       while a fetch is outstanding (the frame is then drawn with what is
       there). */
    function bindSide(side, a, atZ0) {
        var f = FIG.fields[side.name];
        if (!f) return false;
        var ok = true;
        var pr = keyframePair(a);
        var s1 = evolves() ? f.series[pr.k] : null, s2 = evolves() ? f.series[pr.k + 1] : null;
        var ready = !!s1 && [s1.file, s1.h_file, s2.file, s2.h_file].every(have);
        if (ready && side.series.pair !== pr.k) {
            setGeometry(side.series, got(s1.file), got(s2.file),
                        got(s1.h_file), got(s2.h_file));
            var u = side.series.mat.uniforms;
            u.uHmin.value = s1.h_min_kpc_h; u.uHmax.value = s1.h_max_kpc_h;
            u.uHmin2.value = s2.h_min_kpc_h; u.uHmax2.value = s2.h_max_kpc_h;
            side.series.pair = pr.k;
            side.series.ready = true;
        }
        if (!ready && evolves()) ok = false;
        side.series.mat.uniforms.uMix.value = pr.w;

        if (atZ0) {
            var z0ok = [f.z0.file, f.z0.h_file, f.halo.file, f.halo.h_file].every(have);
            if (z0ok && !side.z0.ready) {
                setGeometry(side.z0, got(f.z0.file), null, got(f.z0.h_file));
                var uz = side.z0.mat.uniforms;
                uz.uHmin.value = f.z0.h_min_kpc_h; uz.uHmax.value = f.z0.h_max_kpc_h;
                uz.uCentre.value.fromArray(f.halo_centre_kpc_h);
                uz.uRcut.value = FIG.halo.cutout_radius_kpc_h;
                side.z0.ready = true;
                setGeometry(side.halo, got(f.halo.file), null, got(f.halo.h_file));
                var uh = side.halo.mat.uniforms;
                uh.uHmin.value = f.halo.h_min_kpc_h; uh.uHmax.value = f.halo.h_max_kpc_h;
                uh.uCentre.value.fromArray(f.halo_centre_kpc_h);
                uh.uRcut.value = FIG.halo.cutout_radius_kpc_h;
                side.halo.ready = true;
            }
            if (!z0ok) loadZ0(side.name).then(function () { dirty = true; });
        }
        return ok;
    }

    // --- the movie's timeline --------------------------------------------------

    function smoothstep(u) { u = Math.min(1, Math.max(0, u)); return u * u * (3 - 2 * u); }

    var curAspect = 16 / 9;
    function timeline(t) {
        var ser = FIG.fields.truth.series, a0 = evolves() ? ser[0].a : 1;
        var el = FIG.camera.elev * Math.PI / 180;
        var hw0 = 0.5 * L * (Math.cos(el) + Math.sin(el)) * 1.02;
        var hwF = FIG.camera.final_hw_r200 * FIG.halo.R200m_kpc_h;
        var a, hw, zoomed;
        if (t < T_EV) {
            a = a0 + (1 - a0) * smoothstep(t / T_EV); hw = hw0; zoomed = 0;
        } else if (t < T_EV + T_ZOOM) {
            a = 1; zoomed = smoothstep((t - T_EV) / T_ZOOM); hw = hw0 + (hwF - hw0) * zoomed;
        } else {
            a = 1; hw = hwF; zoomed = 1;
        }
        // the full-box z = 0 set takes over from the evolution set across the
        // last second of the evolution phase, where a is already ~1; a case
        // with no evolution shows it throughout
        var fade = evolves() ? Math.min(1, Math.max(0, (t - (T_EV - 1)) / 1)) : 1;
        if (!evolves()) a = 1;
        var theta = FIG.camera.theta0 * Math.PI / 180
                  + 2 * Math.PI * FIG.camera.turns * t / T_TOTAL;
        return { a: a, hw: hw, theta: theta, fade: fade, zoomed: zoomed };
    }

    // the halo's centre of mass at scale factor a, on an unwrapped track
    var track = null;
    function haloCentre(a) {
        var ser = FIG.fields.truth.series;
        if (!evolves()) return new THREE.Vector3().fromArray(FIG.fields.truth.halo_centre_kpc_h);
        if (!track) {
            track = [new THREE.Vector3().fromArray(ser[0].halo_centre_kpc_h)];
            for (var i = 1; i < ser.length; i++) {
                var p = new THREE.Vector3().fromArray(ser[i].halo_centre_kpc_h);
                var d = p.clone().sub(track[i - 1]);
                d.x -= L * Math.round(d.x / L); d.y -= L * Math.round(d.y / L); d.z -= L * Math.round(d.z / L);
                track.push(track[i - 1].clone().add(d));
            }
        }
        var pr = keyframePair(a);
        return track[pr.k].clone().lerp(track[pr.k + 1], pr.w);
    }

    // --- camera --------------------------------------------------------------------

    function cosmicTime(a) {
        var om = FIG.omega_m, ol = 1 - om;
        return (9.7779 / FIG.h) * (2 / (3 * Math.sqrt(ol)))
             * Math.asinh(Math.sqrt(ol / om) * Math.pow(a, 1.5));
    }

    function applyCamera(w, h) {
        var th = cam.theta, el = cam.elev * Math.PI / 180;
        var aspect = w / h, hw = cam.hw;
        var D = 2.5 * L;
        camera.left = -aspect * hw; camera.right = aspect * hw;
        camera.top = hw; camera.bottom = -hw;
        camera.near = 0.01; camera.far = 5 * L;
        camera.position.set(
            cam.target.x + D * Math.sin(th) * Math.cos(el),
            cam.target.y + D * Math.cos(th) * Math.cos(el),
            cam.target.z + D * Math.sin(el));
        camera.up.set(-Math.sin(th) * Math.sin(el), -Math.cos(th) * Math.sin(el), Math.cos(el));
        camera.lookAt(cam.target);
        camera.updateProjectionMatrix();
        // the movie script projects with screen-x = +x at theta = 0, which
        // is the mirror image of a camera standing where it looks from;
        // flip x so the picture matches the movies frame for frame
        camera.projectionMatrix.elements[0] *= -1;
        camera.projectionMatrixInverse.copy(camera.projectionMatrix).invert();
    }

    // screen axes in world units, for panning
    function screenAxes() {
        var th = cam.theta, el = cam.elev * Math.PI / 180;
        return {
            right: new THREE.Vector3(Math.cos(th), -Math.sin(th), 0),
            up: new THREE.Vector3(-Math.sin(th) * Math.sin(el), -Math.cos(th) * Math.sin(el), Math.cos(el))
        };
    }

    // --- draw ---------------------------------------------------------------------

    function nice(widthKpc) {
        var opts = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10];
        for (var i = 0; i < opts.length; i++) if (opts[i] <= 0.22 * widthKpc) return opts[i];
        return 10;
    }

    function draw() {
        if (!FIG) return;
        var w = stage.clientWidth, h = stage.clientHeight;
        if (!w || !h) return;
        var pr = renderer.getPixelRatio();
        var W = Math.round(w * pr), H = Math.round(h * pr);
        if (accum.width !== W || accum.height !== H) {
            renderer.setSize(w, h, false);
            accum.setSize(W, H);
            hazeH.setSize(Math.ceil(W / 2), Math.ceil(H / 2));
            hazeV.setSize(Math.ceil(W / 2), Math.ceil(H / 2));
        }
        renderer.setViewport(0, 0, w, h);

        curAspect = w / h;
        var tl = timeline(time);
        if (auto) {
            cam.theta = tl.theta; cam.hw = tl.hw; cam.elev = FIG.camera.elev;
            cam.target.copy(haloCentre(tl.a));
        }
        applyCamera(w, h);

        var aspect = w / h;
        var rho = Math.min(1.15 * aspect * cam.hw, L / 2);
        var px = H / (2 * cam.hw);                     // device px per kpc
        var hfloor = 0;
        if (evolves()) {
            var a0 = FIG.fields.truth.series[0].a;
            hfloor = FIG.camera.lattice_blur * SPACING
                   * Math.exp(-Math.pow((tl.a - a0) / FIG.camera.lattice_da, 2));
        }
        var lod = FIG.lod;

        var atZ0 = tl.fade > 0;
        [sides.truth, sides.model].forEach(function (side) {
            bindSide(side, tl.a, atZ0);
            var f = FIG.fields[side.name];
            var wSeries = (1 - tl.fade) / lod.fraction_series;
            var layers = [
                [side.series, 0, wSeries],
                [side.z0, 1, tl.fade / lod.fraction_z0],
                [side.halo, 2, f ? tl.fade / f.halo.fraction : 0]
            ];
            if (DEBUG_ONLY) {
                layers.forEach(function (row, i) {
                    if (['series', 'z0', 'halo'][i] !== DEBUG_ONLY) row[2] = 0;
                });
            }
            side.want = layers.map(function (row) { return row[0].ready && row[2] > 0; });
            layers.forEach(function (row) {
                var layer = row[0], u = layer.mat.uniforms;
                u.uL.value = L; u.uRho.value = rho; u.uPx.value = px;
                u.uHfloor.value = hfloor; u.uWeight.value = row[2] * WSCALE;
                u.uTarget.value.copy(cam.target);
                u.uSigma.value = FIG.render.sigma_over_h;
            });
        });

        // composite normalisation: accumulated count per pixel -> Sigma/Sigma0
        var depth = 2 * rho / L;
        compMat.uniforms.uNorm.value = (L * px) * (L * px) / N_FULL / WSCALE
                                     / Math.pow(depth, FIG.colour.depth_gamma);

        renderer.setRenderTarget(accum);
        renderer.setClearColor(0x000000, 1);
        renderer.clear(true, false, false);
        // setScissor and setViewport take CSS pixels and apply the pixel
        // ratio themselves; in device pixels they come out doubled on a
        // Retina screen, with the bar's cut landing twice as far right
        var splitCss = Math.round(split * w);
        renderer.setScissorTest(true);
        // left of the bar: truth
        setSideVisible(sides.truth, true); setSideVisible(sides.model, false);
        renderer.setScissor(0, 0, splitCss, h);
        renderer.render(scene, camera);
        // right of the bar: the model
        setSideVisible(sides.truth, false); setSideVisible(sides.model, true);
        renderer.setScissor(splitCss, 0, w - splitCss, h);
        renderer.render(scene, camera);
        renderer.setScissorTest(false);

        // the haze: horizontal pass reads the full-size field into half
        // size, the vertical pass finishes it there
        var sig = HAZE_SIGMA_1080 * H / 1080;
        blurQuad.material = blurHMat;
        blurHMat.uniforms.tSrc.value = accum.texture;
        blurHMat.uniforms.uStep.value.set(1 / W, 0);
        blurHMat.uniforms.uSigma.value = Math.min(21, sig);
        renderer.setRenderTarget(hazeH);
        renderer.setViewport(0, 0, hazeH.width / pr, hazeH.height / pr);
        renderer.render(blurScene, quadCam);
        blurQuad.material = blurVMat;
        blurVMat.uniforms.tSrc.value = hazeH.texture;
        blurVMat.uniforms.uStep.value.set(0, 1 / hazeH.height);
        blurVMat.uniforms.uSigma.value = Math.min(21, sig / 2);
        renderer.setRenderTarget(hazeV);
        renderer.setViewport(0, 0, hazeV.width / pr, hazeV.height / pr);
        renderer.render(blurScene, quadCam);

        renderer.setRenderTarget(null);
        renderer.setViewport(0, 0, w, h);
        renderer.render(quadScene, quadCam);

        if (!verified) verify();

        // overlays
        var z = 1 / tl.a - 1;
        hud.z.textContent = 'z = ' + z.toFixed(2);
        hud.t.textContent = 't = ' + cosmicTime(tl.a).toFixed(2) + ' Gyr';
        clock.textContent = 'z = ' + z.toFixed(2);
        var Lbar = nice(2 * aspect * cam.hw);
        hud.bar.style.width = (Lbar * (h / (2 * cam.hw))) + 'px';
        hud.barText.textContent = Lbar >= 1000 ? (Lbar / 1000) + ' Mpc/h' : Lbar + ' kpc/h';
        hud.left.style.opacity = split > 0.16 ? 1 : 0;
        hud.right.style.opacity = split < 0.84 ? 1 : 0;
        splitEl.style.left = (split * 100) + '%';
    }

    /* After the first frame: is the accumulation target complete and did
       the draws go through? If not, drop to half float once; if that fails
       too, say so where the picture would be rather than leave it black. */
    function verify() {
        verified = true;
        renderer.setRenderTarget(accum);
        var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        var err = gl.getError();
        renderer.setRenderTarget(null);
        var ok = status === gl.FRAMEBUFFER_COMPLETE && err === gl.NO_ERROR;
        if (ok) return;
        if (accumType === THREE.FloatType) {
            accumType = THREE.HalfFloatType;
            accum.dispose(); hazeH.dispose(); hazeV.dispose();
            accum = accumTarget(accumType); hazeH = blurTarget(); hazeV = blurTarget();
            compMat.uniforms.tAcc.value = accum.texture;
            compMat.uniforms.tHaze.value = hazeV.texture;
            verified = false;
            dirty = true;
            return;
        }
        hud.loading.hidden = false;
        hud.loading.textContent = 'This browser cannot draw the figure '
            + '(framebuffer ' + status + ', error ' + err + ').';
        if (window.console) console.error('astro3d: accumulation target unusable', status, err);
    }

    function setSideVisible(side, on) {
        var want = side.want || [false, false, false];
        side.series.pts.visible = on && want[0];
        side.z0.pts.visible = on && want[1];
        side.halo.pts.visible = on && want[2];
    }

    function frame(now) {
        requestAnimationFrame(frame);
        if (playing) {
            var dt = lastTick ? Math.min(0.1, (now - lastTick) / 1000) : 0;
            lastTick = now;
            time += dt;
            if (time >= T_TOTAL) { time = T_TOTAL; setPlaying(false); }
            slider.value = time / T_TOTAL;
            dirty = true;
        }
        if (dirty) { dirty = false; draw(); }
    }

    // --- interaction ------------------------------------------------------------

    function setPlaying(on) {
        playing = on;
        lastTick = 0;
        playBtn.textContent = on ? 'Pause' : 'Play';
    }
    playBtn.addEventListener('click', function () {
        if (!playing && time >= T_TOTAL - 1e-6) time = 0;
        setPlaying(!playing);
    });
    slider.addEventListener('input', function () {
        time = parseFloat(slider.value) * T_TOTAL;
        dirty = true;
    });
    resetBtn.addEventListener('click', function () { auto = true; dirty = true; });

    function detach() {
        if (auto) {
            // keep the movie's current framing as the starting point
            var tl = timeline(time);
            cam.theta = tl.theta; cam.hw = tl.hw; cam.elev = FIG.camera.elev;
            cam.target.copy(haloCentre(tl.a));
            auto = false;
        }
    }

    var pointers = {};
    var lastPinch = null;
    stage.addEventListener('pointerdown', function (e) {
        if (e.target === splitEl || splitEl.contains(e.target)) return;
        stage.setPointerCapture(e.pointerId);
        pointers[e.pointerId] = { x: e.clientX, y: e.clientY, button: e.button, shift: e.shiftKey };
        lastPinch = null;
        detach();
        e.preventDefault();
    });
    stage.addEventListener('pointermove', function (e) {
        var p = pointers[e.pointerId];
        if (!p) return;
        var ids = Object.keys(pointers);
        var h = stage.clientHeight;
        if (ids.length >= 2) {
            // two fingers: pinch zoom and pan
            var q = pointers[ids[0] === String(e.pointerId) ? ids[1] : ids[0]];
            p.x = e.clientX; p.y = e.clientY;
            var dist = Math.hypot(p.x - q.x, p.y - q.y);
            var cx = (p.x + q.x) / 2, cy = (p.y + q.y) / 2;
            if (lastPinch) {
                cam.hw = clampHw(cam.hw * lastPinch.dist / Math.max(1, dist));
                pan(cx - lastPinch.cx, cy - lastPinch.cy, h);
            }
            lastPinch = { dist: dist, cx: cx, cy: cy };
        } else {
            var dx = e.clientX - p.x, dy = e.clientY - p.y;
            p.x = e.clientX; p.y = e.clientY;
            if (p.button === 2 || p.button === 1 || p.shift) {
                pan(dx, dy, h);
            } else {
                cam.theta -= dx * 0.006;
                cam.elev = Math.min(85, Math.max(-85, cam.elev + dy * 0.35));
            }
        }
        dirty = true;
    });
    function endPointer(e) {
        delete pointers[e.pointerId];
        lastPinch = null;
    }
    stage.addEventListener('pointerup', endPointer);
    stage.addEventListener('pointercancel', endPointer);
    stage.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    stage.addEventListener('wheel', function (e) {
        detach();
        cam.hw = clampHw(cam.hw * Math.exp(e.deltaY * 0.0015));
        dirty = true;
        e.preventDefault();
    }, { passive: false });

    function clampHw(hw) {
        return Math.min(0.75 * L, Math.max(0.15 * FIG.halo.R200m_kpc_h, hw));
    }
    function pan(dx, dy, h) {
        var k = 2 * cam.hw / h, ax = screenAxes();
        cam.target.addScaledVector(ax.right, -dx * k).addScaledVector(ax.up, dy * k);
    }

    // the comparison bar
    var splitDrag = false;
    splitEl.addEventListener('pointerdown', function (e) {
        splitDrag = true;
        splitEl.setPointerCapture(e.pointerId);
        e.preventDefault();
        e.stopPropagation();
    });
    splitEl.addEventListener('pointermove', function (e) {
        if (!splitDrag) return;
        var r = stage.getBoundingClientRect();
        split = Math.min(0.98, Math.max(0.02, (e.clientX - r.left) / r.width));
        dirty = true;
    });
    function endSplit() { splitDrag = false; }
    splitEl.addEventListener('pointerup', endSplit);
    splitEl.addEventListener('pointercancel', endSplit);

    modelSel.addEventListener('change', function () { setModel(modelSel.value); });

    function resetLayers() {
        [sides.truth, sides.model].forEach(function (side) {
            [side.series, side.z0, side.halo].forEach(function (layer) {
                layer.ready = false; layer.pair = -1; layer.pts.visible = false;
                var g = layer.pts.geometry;
                layer.pts.geometry = new THREE.BufferGeometry();
                if (g) g.dispose();
            });
        });
        track = null;
    }

    function setModel(name) {
        model = name;
        sides.model.name = name;
        sides.model.series.pair = -1; sides.model.series.ready = false;
        sides.model.z0.ready = false; sides.model.halo.ready = false;
        hud.right.textContent = FIG.fields[name].label;
        loadField(name).then(function () { dirty = true; });
        dirty = true;
    }

    if (window.ResizeObserver) {
        new ResizeObserver(function () { dirty = true; }).observe(stage);
    } else {
        window.addEventListener('resize', function () { dirty = true; });
    }

    // --- boot ---------------------------------------------------------------------

    function loadCase(name) {
        CASE = name; DIR = ROOT + '/' + CASE;
        FIG = null; resetLayers();
        time = 0; auto = true; setPlaying(false); slider.value = 0;
        hud.loading.hidden = false; hud.loading.textContent = 'Loading the simulation…';
        bytesDone = 0; bytesTotal = 0;
        return fetch(DIR + '/figure.json').then(function (r) { return r.json(); }).then(function (fig) {
            FIG = fig;
            FIG.render = FIG.render || { sigma_over_h: 0.5 };
            HAZE_SIGMA_1080 = FIG.render.haze_sigma_1080 != null ? FIG.render.haze_sigma_1080 : 16;
            HAZE_GAIN = FIG.render.haze_gain != null ? FIG.render.haze_gain : 1;
            compMat.uniforms.uHazeGain.value = HAZE_GAIN;
            L = fig.box_kpc_h; N_FULL = fig.n_particles; SPACING = L / fig.n_side;
            T_EV = fig.camera.t_evolve; T_ZOOM = fig.camera.t_zoom; T_HOLD = fig.camera.t_hold;
            T_TOTAL = T_EV + T_ZOOM + T_HOLD;

            var lut = new Uint8Array(256 * 4);
            fig.colour.lut_256_rgb.forEach(function (c, i) { lut.set([c[0], c[1], c[2], 255], 4 * i); });
            if (lutTex) lutTex.dispose();
            lutTex = new THREE.DataTexture(lut, 256, 1, THREE.RGBAFormat);
            lutTex.magFilter = lutTex.minFilter = THREE.LinearFilter;
            // the table's bytes are the colours to show: left untagged so they
            // pass through unchanged (tagged sRGB, three decodes them on sampling
            // and a custom shader never re-encodes, which darkens every mid-tone)
            lutTex.colorSpace = THREE.NoColorSpace;
            lutTex.needsUpdate = true;
            compMat.uniforms.tLut.value = lutTex;
            compMat.uniforms.uLo.value = fig.colour.lo;
            compMat.uniforms.uHi.value = fig.colour.hi;

            modelSel.innerHTML = '';
            fig.models.forEach(function (m) {
                modelSel.add(new Option(fig.fields[m].label, m));
            });
            if (fig.models.indexOf(model) < 0) model = fig.models[0];
            modelSel.value = model;
            sides.model.name = model;
            hud.left.textContent = fig.fields.truth.label;
            hud.right.textContent = fig.fields[model].label;

            var first = evolves()
                ? Promise.all([loadField('truth'), loadField(model)])
                : Promise.all([loadZ0('truth'), loadZ0(model)]);
            return first.then(function () {
                hud.loading.hidden = true;
                dirty = true;
                // the z = 0 sets follow, so the end of the evolution is ready
                loadZ0('truth'); loadZ0(model);
            });
        });
    }

    function boot() {
        root.astro3dDebug = {
            cam: cam,
            set: function (o) {
                if (o.time != null) { time = o.time; slider.value = time / T_TOTAL; }
                if (o.auto != null) auto = o.auto;
                if (o.split != null) split = o.split;
                if (o.theta != null) cam.theta = o.theta;
                if (o.elev != null) cam.elev = o.elev;
                if (o.hw != null) cam.hw = o.hw;
                if (o.target) cam.target.fromArray(o.target);
                dirty = true;
            },
            only: function (name) { DEBUG_ONLY = name || null; dirty = true; },
            haze: function (sigma, gain) {
                HAZE_SIGMA_1080 = sigma; HAZE_GAIN = gain;
                compMat.uniforms.uHazeGain.value = gain; dirty = true;
            },
            // percentiles of the colour-scale position v over the stage,
            // read back through a grey ramp in place of the colour table
            stats: function () {
                var ramp = new Uint8Array(256 * 4);
                for (var i = 0; i < 256; i++) ramp.set([i, i, i, 255], 4 * i);
                var rampTex = new THREE.DataTexture(ramp, 256, 1, THREE.RGBAFormat);
                rampTex.colorSpace = THREE.NoColorSpace; rampTex.needsUpdate = true;
                var keep = compMat.uniforms.tLut.value;
                compMat.uniforms.tLut.value = rampTex;
                draw();
                var W = accum.width, H = accum.height, px = new Uint8Array(W * H * 4);
                gl.readPixels(0, 0, W, H, gl.RGBA, gl.UNSIGNED_BYTE, px);
                compMat.uniforms.tLut.value = keep; dirty = true;
                var hist = new Float64Array(256), n = W * H, lin = 0, lo = FIG.colour.lo, hi = FIG.colour.hi;
                for (var k = 0; k < n; k++) { var v = px[4 * k]; hist[v]++; lin += Math.pow(10, lo + v / 255 * (hi - lo)); }
                function pct(q) { var c = 0; for (var j = 0; j < 256; j++) { c += hist[j]; if (c >= q * n) return j / 255; } return 1; }
                var mean = 0; for (var j = 0; j < 256; j++) mean += hist[j] * j / 255; mean /= n;
                return { mean: mean, median: pct(0.5), p20: pct(0.2), p90: pct(0.9), p99: pct(0.99),
                         nearBlack: (hist[0] + hist[1] + hist[2] + hist[3] + hist[4] + hist[5]) / n, linear: lin / n };
            },
            // total weight that reached the accumulation target, in particles
            sumAccum: function () {
                draw();
                var W = accum.width, H = accum.height;
                var buf = new Float32Array(W * H * 4);
                renderer.readRenderTargetPixels(accum, 0, 0, W, H, buf);
                var s = 0;
                for (var i = 0; i < buf.length; i += 4) s += buf[i];
                return s / WSCALE;
            },
            timeline: timeline, haloCentre: haloCentre, fig: function () { return FIG; },
            loadCase: loadCase,
            caps: function () {
                return { sizeMax: SIZE_MAX, target: accumType === THREE.FloatType ? 'float' : 'half',
                         webgl2: renderer.capabilities.isWebGL2,
                         colorBufferFloat: ext.has('EXT_color_buffer_float'),
                         floatBlend: ext.has('EXT_float_blend'),
                         pixelRatio: renderer.getPixelRatio() };
            }
        };
        caseSel.addEventListener('change', function () {
            loadCase(caseSel.value).catch(fail);
        });
        requestAnimationFrame(frame);
    }

    function fail(err) {
        if (status) status.textContent = 'Could not load the simulation data.';
        hud.loading.hidden = false;
        hud.loading.textContent = 'Could not load the simulation data.';
        if (window.console) console.error(err);
    }

    // the menu of cases comes from the data repository's index
    fetch(ROOT + '/index.json').then(function (r) { return r.json(); }).then(function (index) {
        caseSel.innerHTML = '';
        index.cases.forEach(function (c) { caseSel.add(new Option(c.title, c.name)); });
        if (!index.cases.some(function (c) { return c.name === CASE; })) CASE = index.cases[0].name;
        caseSel.value = CASE;
        boot();
        return loadCase(CASE);
        }).catch(fail);
})();
