/* Interactive 3D parameter-space explorer.

   Draws the RL search over a benchmark Lagrangian: probes coloured by
   outcome, plus the policy heads as nested iso-probability shells.

   Everything is drawn in log10 coordinates with decade ticks. The heads
   live on the normalized [0,1] cube and the sampler map is affine in
   log10, so a head is an axis-aligned ellipsoid in these coordinates:
   log10(x) = log10(lo) + u * (log10(hi) - log10(lo)).

   The shell radii are precomputed (tools/build_3d_data.py). They are
   central probability masses of the per-dimension Beta marginals, not
   sigma contours.
*/
(function () {
    'use strict';

    var root = document.getElementById('ps3d');
    if (!root || typeof Plotly === 'undefined') return;

    var DATA_DIR = root.getAttribute('data-dir');
    var DEFAULT_N = root.getAttribute('data-default') || '6';

    var COL = { excluded: '#8d9196', current: '#ff3b3b', viable: '#f5b301' };
    var HEAD_COLORS = ['#3b6ea5', '#12a4a4', '#7d55c7', '#c2571a'];
    var SPHERE_U = 26, SPHERE_V = 15;

    var plot = root.querySelector('.ps3d__plot');
    var status = root.querySelector('.ps3d__status');
    var slider = root.querySelector('.ps3d__slider');
    var playBtn = root.querySelector('.ps3d__play');
    var turnLabel = root.querySelector('.ps3d__turn');
    var selLagr = root.querySelector('.ps3d__lagrangian');
    var selX = root.querySelector('.ps3d__x');
    var selY = root.querySelector('.ps3d__y');
    var selZ = root.querySelector('.ps3d__z');

    var D = null;          // current dataset
    var timer = null;
    var drawn = false;
    var cache = {};

    // --- geometry helpers -------------------------------------------------

    function log10(v) { return Math.log(v) / Math.LN10; }

    /* Parameter names as symbols. Plotly titles take a small HTML subset
       (<i>, <b>, <sub>), so the rich form is built from that rather than
       pulling in MathJax for four symbols. The <option> form has to be
       plain text, so it uses Unicode subscripts where they exist. */
    function symbol(name, rich) {
        var sub = rich
            ? function (b, s) { return '<i>' + b + '</i><sub>' + s + '</sub>'; }
            : function (b, s) { return b + s; };
        var m;
        if ((m = /^alpha(\d+)$/.exec(name))) {
            return sub('α', rich ? m[1] : digitsToSub(m[1]));
        }
        if ((m = /^MDM(\d*)$/.exec(name))) {
            return sub('M', (rich ? 'χ' : 'ᵪ')
                + (m[1] ? (rich ? m[1] : digitsToSub(m[1])) : ''));
        }
        if (name === 'MZp') return sub('M', rich ? "Z'" : "_Z'");
        if (name === 'gU1p') return sub('g', rich ? "U(1)'" : "_U(1)'");
        if (name === 'epsilon') return rich ? '<i>ε</i>' : 'ε';
        return name;
    }

    function digitsToSub(s) {
        return s.replace(/\d/g, function (d) {
            return '₀₁₂₃₄₅₆₇₈₉'[+d];
        });
    }

    function axisTitle(name) {
        var unit = D.kind[name] === 'mass' ? ' [GeV]' : '';
        return '<b>' + symbol(name, true) + unit + '</b>';
    }

    function optionLabel(name) {
        var unit = D.kind[name] === 'mass' ? ' [GeV]' : '';
        return symbol(name, false) + unit + '  (' + D.kind[name] + ')';
    }

    function axisSpan(name) {
        var b = D.bounds[name];
        return [log10(b[0]), log10(b[1])];
    }

    function decadeTicks(lo, hi) {
        var vals = [], text = [];
        var k0 = Math.ceil(lo - 1e-9), k1 = Math.floor(hi + 1e-9);
        var step = Math.max(1, Math.ceil((k1 - k0 + 1) / 6));
        for (var k = k0; k <= k1; k += step) {
            vals.push(k);
            text.push('10<sup>' + k + '</sup>');
        }
        return { vals: vals, text: text };
    }

    // Unit-cube coordinate -> log10 coordinate on a given axis.
    function unitToLog(u, span) { return span[0] + u * (span[1] - span[0]); }

    function ellipsoid(cx, cy, cz, rx, ry, rz) {
        var xs = [], ys = [], zs = [];
        for (var i = 0; i < SPHERE_V; i++) {
            var v = Math.PI * i / (SPHERE_V - 1);
            var xr = [], yr = [], zr = [];
            for (var j = 0; j < SPHERE_U; j++) {
                var u = 2 * Math.PI * j / (SPHERE_U - 1);
                xr.push(cx + rx * Math.cos(u) * Math.sin(v));
                yr.push(cy + ry * Math.sin(u) * Math.sin(v));
                zr.push(cz + rz * Math.cos(v));
            }
            xs.push(xr); ys.push(yr); zs.push(zr);
        }
        return { x: xs, y: ys, z: zs };
    }

    // --- trace building ---------------------------------------------------

    function currentAxes() {
        return [selX.value, selY.value, selZ.value];
    }

    function buildTraces(turn) {
        var names = currentAxes();
        var spans = names.map(axisSpan);
        var ci = names.map(function (n) { return D.cols.indexOf(n); });
        var traces = [];

        var ex = [[], [], []], cu = [[], [], []], vi = [[], [], []];
        var rows = D.rows;
        for (var r = 0; r < rows.length; r++) {
            var row = rows[r];
            if (row[0] > turn) continue;
            var p = [0, 0, 0], bad = false;
            for (var a = 0; a < 3; a++) {
                var val = row[ci[a]];
                if (!(val > 0)) { bad = true; break; }
                p[a] = log10(val);
            }
            if (bad) continue;
            var bucket = row[0] === turn ? cu : (row[1] === 1 ? vi : ex);
            bucket[0].push(p[0]); bucket[1].push(p[1]); bucket[2].push(p[2]);
            if (row[0] === turn && row[1] === 1) {
                vi[0].push(p[0]); vi[1].push(p[1]); vi[2].push(p[2]);
            }
        }

        traces.push({
            type: 'scatter3d', mode: 'markers', showlegend: false,
            x: ex[0], y: ex[1], z: ex[2], hoverinfo: 'skip',
            marker: { size: 1.8, color: COL.excluded, opacity: 0.35 }
        });
        traces.push({
            type: 'scatter3d', mode: 'markers', showlegend: false,
            x: vi[0], y: vi[1], z: vi[2], hoverinfo: 'skip',
            marker: {
                size: 3.4, color: COL.viable, symbol: 'diamond', opacity: 0.95,
                line: { color: '#ffffff', width: 0.5 }
            }
        });
        traces.push({
            type: 'scatter3d', mode: 'markers', showlegend: false,
            x: cu[0], y: cu[1], z: cu[2], hoverinfo: 'skip',
            marker: {
                size: 4.2, symbol: 'circle-open', opacity: 0.9,
                color: COL.current, line: { color: COL.current, width: 1.4 }
            }
        });

        // policy heads: nested iso-probability shells
        var heads = D.shells[String(turn)] || [];
        var hIdx = names.map(function (n) {
            return D.headIndex[D.params.indexOf(n)];
        });
        for (var h = 0; h < heads.length; h++) {
            var col = HEAD_COLORS[h % HEAD_COLORS.length];
            for (var L = 0; L < heads[h].length; L++) {
                var ctr = heads[h][L][0], rad = heads[h][L][1];
                var c = [], rr = [];
                for (var a2 = 0; a2 < 3; a2++) {
                    var k = hIdx[a2];
                    if (k == null || k >= ctr.length) { c = null; break; }
                    var width = spans[a2][1] - spans[a2][0];
                    c.push(unitToLog(ctr[k], spans[a2]));
                    rr.push(Math.max(rad[k], 1e-3) * width);
                }
                if (!c) continue;
                var e = ellipsoid(c[0], c[1], c[2], rr[0], rr[1], rr[2]);
                traces.push({
                    type: 'surface', x: e.x, y: e.y, z: e.z,
                    showscale: false, hoverinfo: 'skip',
                    opacity: D.alphas[L],
                    colorscale: [[0, col], [1, col]],
                    contours: { x: { highlight: false }, y: { highlight: false },
                                z: { highlight: false } },
                    lighting: { ambient: 1, diffuse: 0, specular: 0 },
                    showlegend: false
                });
            }
        }

        // Legend entries are drawn by empty proxy traces: Plotly sizes a
        // legend icon from its trace's marker, and the real markers have to
        // stay small to keep thousands of points readable.
        [['Excluded probes', COL.excluded, 'circle', 1],
         ['Viable points', COL.viable, 'diamond', 1],
         ['Current-turn probes', COL.current, 'circle-open', 1],
         ['Policy heads', HEAD_COLORS[0], 'circle', 0.5]
        ].forEach(function (e) {
            traces.push({
                type: 'scatter3d', mode: 'markers', name: e[0],
                x: [null], y: [null], z: [null], hoverinfo: 'skip',
                showlegend: true,
                marker: {
                    size: 13, color: e[1], symbol: e[2], opacity: e[3],
                    line: { color: e[2] === 'circle-open' ? e[1] : '#ffffff',
                            width: 2 }
                }
            });
        });
        return traces;
    }

    function layout() {
        var names = currentAxes();
        var scene = { uirevision: 'keep', aspectmode: 'cube' };
        ['xaxis', 'yaxis', 'zaxis'].forEach(function (key, i) {
            var span = axisSpan(names[i]);
            var t = decadeTicks(span[0], span[1]);
            scene[key] = {
                title: { text: axisTitle(names[i]),
                         font: { size: 17, color: '#2f3437' } },
                range: span, tickvals: t.vals, ticktext: t.text,
                tickfont: { size: 11 },
                gridcolor: 'rgba(0,0,0,0.12)', zeroline: false,
                backgroundcolor: 'rgba(244,244,246,1)', showbackground: true
            };
        });
        return {
            scene: scene, uirevision: 'keep',
            margin: { l: 0, r: 0, t: 8, b: 0 },
            showlegend: true,
            legend: {
                orientation: 'h', y: -0.02, x: 0.5, xanchor: 'center',
                font: { size: 13 },
                itemwidth: 46
            },
            paper_bgcolor: 'rgba(0,0,0,0)'
        };
    }

    function render(turn) {
        var traces = buildTraces(turn);
        if (!drawn) {
            Plotly.newPlot(plot, traces, layout(), {
                displayModeBar: true, responsive: true,
                modeBarButtonsToRemove: ['toImage'], displaylogo: false
            });
            drawn = true;
        } else {
            Plotly.react(plot, traces, layout());
        }
        var t = D.turns[turn] || {};
        turnLabel.textContent = 'Turn ' + turn + ' / ' + (D.turns.length - 1);
        status.textContent = 'Viable found: ' + (t.cum != null ? t.cum : '?')
            + ' of ' + D.nProbes + ' probes';
    }

    // --- playback ---------------------------------------------------------

    function stop() {
        if (timer) { clearInterval(timer); timer = null; }
        playBtn.textContent = 'Play';
        playBtn.setAttribute('aria-label', 'Play animation');
    }

    function play() {
        if (timer) return stop();
        if (+slider.value >= +slider.max) slider.value = 0;
        playBtn.textContent = 'Pause';
        timer = setInterval(function () {
            var next = +slider.value + 1;
            if (next > +slider.max) return stop();
            slider.value = next;
            render(next);
        }, 420);
    }

    // --- dataset loading --------------------------------------------------

    function fillAxisSelects() {
        [selX, selY, selZ].forEach(function (sel, i) {
            sel.innerHTML = '';
            D.params.forEach(function (n) {
                var o = document.createElement('option');
                o.value = n;
                o.textContent = optionLabel(n);
                sel.appendChild(o);
            });
            sel.value = [D.axes.x, D.axes.y, D.axes.z][i];
        });
    }

    function load(file, num) {
        stop();
        status.textContent = 'Loading Lagrangian ' + num + '…';
        var done = function (data) {
            D = data;
            drawn = false;
            plot.innerHTML = '';
            fillAxisSelects();
            slider.max = D.turns.length - 1;
            slider.value = D.turns.length - 1;
            render(+slider.value);
        };
        if (cache[file]) return done(cache[file]);
        fetch(DATA_DIR + '/' + file)
            .then(function (r) {
                if (!r.ok) throw new Error(r.status);
                return r.json();
            })
            .then(function (data) { cache[file] = data; done(data); })
            .catch(function (err) {
                status.textContent = 'Could not load the data for Lagrangian '
                    + num + ' (' + err.message + ').';
            });
    }

    /* A native <select> cannot wrap an option over two lines, and the
       field content of the larger Lagrangians is long enough to stretch
       the control across the figure. This is a small listbox instead:
       the field content on one line, the size on another. */
    var combo = {
        btn: selLagr.querySelector('.combo__btn'),
        name: selLagr.querySelector('.combo__name'),
        meta: selLagr.querySelector('.combo__meta'),
        list: selLagr.querySelector('.combo__list'),
        items: []
    };

    function comboOpen(open) {
        combo.list.hidden = !open;
        combo.btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        selLagr.classList.toggle('is-open', open);
    }

    function comboSelect(e) {
        combo.name.textContent = e.number + '. '
            + (e.field || e.cls.replace(/_/g, ' '));
        combo.meta.textContent = 'd = ' + e.d + ', ' + e.nViable + ' viable';
        combo.items.forEach(function (li) {
            li.setAttribute('aria-selected',
                li.getAttribute('data-file') === e.file ? 'true' : 'false');
        });
        comboOpen(false);
        load(e.file, e.number);
    }

    combo.btn.addEventListener('click', function () {
        comboOpen(combo.list.hidden);
    });
    document.addEventListener('click', function (ev) {
        if (!selLagr.contains(ev.target)) comboOpen(false);
    });
    document.addEventListener('keydown', function (ev) {
        if (ev.key === 'Escape') comboOpen(false);
    });

    // Options come from the data index so the menu tracks whatever was built.
    function buildMenu() {
        return fetch(DATA_DIR + '/index.json')
            .then(function (r) { return r.json(); })
            .then(function (idx) {
                var rows = idx.lagrangians.slice().sort(function (a, b) {
                    return a.number - b.number;
                });
                var initial = rows[0];
                rows.forEach(function (e) {
                    var li = document.createElement('li');
                    li.setAttribute('role', 'option');
                    li.setAttribute('data-file', e.file);
                    li.innerHTML = '<span class="combo__name">' + e.number
                        + '. ' + (e.field || e.cls.replace(/_/g, ' '))
                        + '</span><span class="combo__meta">d = ' + e.d
                        + ', ' + e.nViable + ' viable</span>';
                    li.addEventListener('click', function () {
                        comboSelect(e);
                    });
                    combo.list.appendChild(li);
                    combo.items.push(li);
                    if (String(e.number) === String(DEFAULT_N)) initial = e;
                });
                comboSelect(initial);
            })
            .catch(function () {
                status.textContent = 'Could not load the data index.';
            });
    }

    // --- wiring -----------------------------------------------------------

    slider.addEventListener('input', function () {
        stop();
        render(+slider.value);
    });
    playBtn.addEventListener('click', play);
    [selX, selY, selZ].forEach(function (sel) {
        sel.addEventListener('change', function () {
            drawn = false;
            plot.innerHTML = '';
            render(+slider.value);
        });
    });
    buildMenu();
})();
