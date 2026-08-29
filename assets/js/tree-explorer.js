/* Interactive constraint-tree explorer.

   Two modes over the same data:
     overview  the whole tree, boxed nodes, pan and zoom, click for detail
     walk      one decision at a time: the current node and its branches on
               the left, the question and its answer buttons on the right

   Node type comes from the DOT fillcolor: standard probe, LLM literature
   search, LLM novel-observable proposal, or a leaf carrying counts.

   Subtree totals come from the build script. A node carrying its own point
   count is authoritative for its region, because an LLM split subdivides
   that region without conserving the total.
*/
(function () {
    'use strict';

    var root = document.getElementById('ctree');
    if (!root || typeof d3 === 'undefined') return;

    var DATA_DIR = root.getAttribute('data-dir');
    var DEFAULT = root.getAttribute('data-default') || 'global_tree';

    var TYPE = {
        probe: { fill: '#e3eefb', stroke: '#5b8db8', label: 'Experimental probe' },
        lit:   { fill: '#fdf3d4', stroke: '#c9a227', label: 'LLM literature search' },
        novel: { fill: '#fde6d2', stroke: '#d1762c', label: 'LLM novel observable' },
        leaf:  { fill: '#eceef0', stroke: '#9aa1a8', label: 'Surviving region' }
    };

    var svgEl   = root.querySelector('.ctree__svg');
    var panel   = root.querySelector('.ctree__panel');
    var sel     = root.querySelector('.ctree__select');
    var status  = root.querySelector('.ctree__status');
    var overview = root.querySelector('.ctree__overview');
    var walkWrap = root.querySelector('.ctree__walk');
    var walkSvgEl = root.querySelector('.ctree__walk-svg');
    var ask     = root.querySelector('.ctree__ask');
    var modeBtns = root.querySelectorAll('.ctree__mode');
    var btnExpand = root.querySelector('.ctree__expand');
    var btnFit = root.querySelector('.ctree__fit');

    var svg = d3.select(svgEl);
    var gRoot = svg.append('g');
    var gLinks = gRoot.append('g').attr('fill', 'none');
    var gNodes = gRoot.append('g');
    var walkSvg = d3.select(walkSvgEl);

    var data = null, rootNode = null, zoom = null, mode = 'overview';
    var cursor = null, path = [];

    // --- text metrics ------------------------------------------------------

    var ctx = document.createElement('canvas').getContext('2d');
    function measure(text, font) {
        ctx.font = font;
        return ctx.measureText(text).width;
    }

    /* Wrap into at most maxLines lines that fit maxW, ellipsing the tail. */
    function wrap(text, maxW, maxLines, font) {
        var words = String(text || '').split(/\s+/), lines = [], cur = '';
        for (var i = 0; i < words.length; i++) {
            var test = cur ? cur + ' ' + words[i] : words[i];
            if (measure(test, font) <= maxW || !cur) {
                cur = test;
            } else {
                lines.push(cur);
                cur = words[i];
                if (lines.length === maxLines) break;
            }
        }
        if (lines.length < maxLines && cur) lines.push(cur);
        if (lines.length === maxLines) {
            var last = lines[maxLines - 1];
            var joined = lines.join(' ');
            if (joined.length < String(text).length) {
                while (last.length > 1
                       && measure(last + '…', maxW, font) > maxW) {
                    last = last.slice(0, -1);
                }
                lines[maxLines - 1] = last.replace(/\s+$/, '') + '…';
            }
        }
        return lines;
    }

    function nodeText(n) {
        if (n.type === 'leaf' && n.pts != null) {
            return n.pts.toLocaleString() + ' pts, ' + n.regions
                + (n.regions === 1 ? ' region' : ' regions');
        }
        return n.label || n.kind || '';
    }

    /* Box geometry for a node: text wrapped, box sized to fit it. */
    function box(n, opt) {
        var font = opt.weight + ' ' + opt.size + 'px ' + opt.family;
        var lines = wrap(nodeText(n), opt.maxW, opt.maxLines, font);
        var w = 0;
        lines.forEach(function (l) { w = Math.max(w, measure(l, font)); });
        return {
            lines: lines, font: font,
            w: Math.min(Math.max(w + opt.padX * 2, opt.minW), opt.maxW + opt.padX * 2),
            h: lines.length * opt.lineH + opt.padY * 2
        };
    }

    var OV = { size: 12.5, weight: '500', family: 'Roboto Flex, sans-serif',
               maxW: 190, maxLines: 2, padX: 10, padY: 7, lineH: 15, minW: 70 };
    var WK = { size: 16, weight: '500', family: 'Roboto Flex, sans-serif',
               maxW: 260, maxLines: 3, padX: 14, padY: 11, lineH: 21, minW: 120 };

    // --- shared node drawing ----------------------------------------------

    function drawBoxes(g, nodes, opt, onClick) {
        var join = g.selectAll('g.ctree__node').data(nodes, function (d) {
            return d.data.id;
        });
        join.exit().remove();
        var enter = join.enter().append('g').attr('class', 'ctree__node');
        enter.append('rect').attr('rx', 7).attr('ry', 7);
        var all = enter.merge(join)
            .attr('transform', function (d) {
                return 'translate(' + d.y + ',' + d.x + ')';
            })
            .style('cursor', onClick ? 'pointer' : 'default')
            .on('click', onClick || null);

        all.each(function (d) {
            var g2 = d3.select(this);
            var b = d.box || (d.box = box(d.data, opt));
            var t = TYPE[d.data.type] || TYPE.probe;
            var collapsed = !!d._children;
            g2.select('rect')
                .attr('x', -b.w / 2).attr('y', -b.h / 2)
                .attr('width', b.w).attr('height', b.h)
                .attr('fill', t.fill)
                .attr('stroke', t.stroke)
                .attr('stroke-width', collapsed ? 2.5 : 1.2)
                .attr('stroke-dasharray', collapsed ? '5 3' : null);
            g2.selectAll('text').remove();
            b.lines.forEach(function (line, i) {
                g2.append('text')
                    .attr('text-anchor', 'middle')
                    .attr('y', (i - (b.lines.length - 1) / 2) * opt.lineH + 4)
                    .attr('font-size', opt.size)
                    .attr('font-weight', opt.weight)
                    .attr('fill', '#22262a')
                    .text(line);
            });
        });
        return all;
    }

    function linkPath(d) {
        var sx = d.source.y + (d.source.box ? d.source.box.w / 2 : 0);
        var tx = d.target.y - (d.target.box ? d.target.box.w / 2 : 0);
        var mid = (sx + tx) / 2;
        return 'M' + sx + ',' + d.source.x
             + 'C' + mid + ',' + d.source.x
             + ' ' + mid + ',' + d.target.x
             + ' ' + tx + ',' + d.target.x;
    }

    // --- overview ----------------------------------------------------------

    function layoutOverview() {
        d3.tree().nodeSize([46, 260])(rootNode);
        rootNode.each(function (d) { d.box = box(d.data, OV); });
    }

    function updateOverview() {
        layoutOverview();
        var nodes = rootNode.descendants(), links = rootNode.links();

        var link = gLinks.selectAll('path').data(links, function (d) {
            return d.target.data.id;
        });
        link.exit().remove();
        link.enter().append('path').merge(link)
            .attr('stroke', function (d) {
                return d.target.data.dashed ? '#c9a227' : '#c3c8cd';
            })
            .attr('stroke-width', 1.3)
            .attr('stroke-dasharray', function (d) {
                return d.target.data.dashed ? '5 3' : null;
            })
            .attr('d', linkPath);

        drawBoxes(gNodes, nodes, OV, function (e, d) {
            detail(d.data);
            if (d.children) { d._children = d.children; d.children = null; }
            else if (d._children) { d.children = d._children; d._children = null; }
            updateOverview();
        });

        var xs = d3.extent(nodes, function (d) { return d.x; });
        var ys = d3.extent(nodes, function (d) { return d.y; });
        svg.attr('viewBox', [ys[0] - 140, xs[0] - 40,
                             ys[1] - ys[0] + 320, xs[1] - xs[0] + 80].join(' '))
           .style('height', Math.min(Math.max(xs[1] - xs[0] + 80, 340), 620) + 'px');
    }

    function fit() {
        var b = gRoot.node().getBBox();
        var vb = svgEl.viewBox.baseVal;
        var k = Math.min(vb.width / b.width, vb.height / b.height) * 0.95;
        svg.transition().duration(400).call(
            zoom.transform,
            d3.zoomIdentity
                .translate(vb.x + vb.width / 2, vb.y + vb.height / 2)
                .scale(k)
                .translate(-(b.x + b.width / 2), -(b.y + b.height / 2))
        );
    }

    function expandAll() {
        rootNode.each(function (d) {
            if (d._children) { d.children = d._children; d._children = null; }
        });
        updateOverview();
        setTimeout(fit, 30);
    }

    // --- detail panel ------------------------------------------------------

    function statLine(n) {
        var a = n.agg || {};
        var out = ['<li><strong>' + (a.pts || 0).toLocaleString()
                   + '</strong> points</li>'];
        out.push('<li><strong>' + (a.regions || 0).toLocaleString()
                 + '</strong> ' + (a.regions === 1 ? 'region' : 'regions')
                 + '</li>');
        if (n.pts != null) {
            out.push('<li><strong>' + n.lagrangians + '</strong> '
                     + (n.lagrangians === 1 ? 'Lagrangian' : 'Lagrangians')
                     + '</li>');
        }
        return '<ul class="ctree__facts">' + out.join('') + '</ul>';
    }

    function detail(n) {
        var t = TYPE[n.type] || TYPE.probe;
        var rows = ['<span class="ctree__badge" style="background:' + t.fill
                    + ';border:1px solid ' + t.stroke + '">' + t.label
                    + '</span>'];
        if (n.kind) rows.push('<h4>' + n.kind + '</h4>');
        rows.push('<p class="ctree__panel-title">' + (n.label || '') + '</p>');
        if (n.criterion) {
            rows.push('<p class="ctree__crit"><strong>Criterion</strong><br>'
                      + n.criterion + '</p>');
        }
        rows.push(statLine(n));
        if (n.status) {
            rows.push('<p class="ctree__crit"><strong>Status</strong> '
                      + n.status + '</p>');
        }
        if (n.feasibility) {
            rows.push('<p class="ctree__crit"><strong>Feasibility</strong> '
                      + n.feasibility + '</p>');
        }
        if (n.refs && n.refs.length) {
            rows.push('<p class="ctree__crit"><strong>References</strong><br>'
                + n.refs.map(function (r) {
                    return '<a href="https://arxiv.org/abs/' + r
                        + '" target="_blank" rel="noopener">arXiv:' + r + '</a>';
                }).join('<br>') + '</p>');
        }
        panel.innerHTML = rows.join('');
    }

    // --- walk --------------------------------------------------------------

    function branchLabel(child, i) {
        var b = (child.branch || '').toLowerCase();
        if (b === 'yes') return 'Yes';
        if (b === 'no') return 'No';
        if (b === 'llm split') return 'Follow the agent’s split';
        return 'Option ' + (i + 1);
    }

    function drawWalkTree() {
        var kids = cursor.children || [];
        var stub = { data: cursor, x: 0, y: 0 };
        var nodes = [stub];
        var spacing = 132;
        kids.forEach(function (c, i) {
            nodes.push({
                data: c, x: (i - (kids.length - 1) / 2) * spacing, y: 430
            });
        });
        nodes.forEach(function (d) { d.box = box(d.data, WK); });

        walkSvg.selectAll('*').remove();
        var g = walkSvg.append('g');
        g.append('g').attr('fill', 'none').selectAll('path')
            .data(nodes.slice(1)).enter().append('path')
            .attr('stroke', function (d) {
                return d.data.dashed ? '#c9a227' : '#c3c8cd';
            })
            .attr('stroke-width', 1.6)
            .attr('stroke-dasharray', function (d) {
                return d.data.dashed ? '5 3' : null;
            })
            .attr('d', function (d) {
                return linkPath({ source: stub, target: d });
            });
        // branch labels sit on the connector
        g.append('g').selectAll('text').data(nodes.slice(1)).enter()
            .append('text')
            .attr('x', function (d) { return (stub.y + d.y) / 2; })
            .attr('y', function (d) { return (stub.x + d.x) / 2 - 8; })
            .attr('text-anchor', 'middle')
            .attr('font-size', 13).attr('font-weight', 700)
            .attr('fill', '#8a9199')
            .text(function (d, i) { return branchLabel(d.data, i); });
        drawBoxes(g.append('g'), nodes, WK, null);

        var xs = d3.extent(nodes, function (d) { return d.x; });
        var pad = 90;
        if (kids.length === 0) {
            // a lone terminal node: centre it rather than leaving it adrift
            var b = stub.box;
            walkSvg.attr('viewBox', [-b.w / 2 - 60, -b.h / 2 - 60,
                                     b.w + 120, b.h + 120].join(' '))
                   .style('height', '220px');
            return;
        }
        walkSvg.attr('viewBox',
            [-170, xs[0] - pad, 800, (xs[1] - xs[0]) + pad * 2].join(' '))
            .style('height',
                Math.min(Math.max((xs[1] - xs[0]) + pad * 2, 260), 460) + 'px');
    }

    function renderWalk() {
        drawWalkTree();
        var a = cursor.agg || {};
        var kids = cursor.children || [];
        var isEnd = kids.length === 0;

        // one chip per decision taken: the branch of every node below the
        // root, including the one we are standing on
        var crumbs = path.slice(1).concat([cursor]).map(function (p) {
            return '<span class="ctree__crumb">' + (p.branch || '—')
                + '</span>';
        }).join('');

        var head = '<div class="ctree__stats">'
            + '<div><span>' + (a.pts || 0).toLocaleString() + '</span>points still viable</div>'
            + '<div><span>' + path.length + '</span>decisions made</div>'
            + '<div><span>' + (a.leaves || 0) + '</span>'
            + (a.leaves === 1 ? 'region ahead' : 'regions ahead') + '</div>'
            + '</div>';

        var body;
        if (isEnd) {
            var fp = cursor.pts != null ? cursor.pts : (a.pts || 0);
            var fr = cursor.regions != null ? cursor.regions : (a.regions || 0);
            var fl = cursor.lagrangians != null ? cursor.lagrangians : a.lagr;
            body = '<div class="ctree__end">'
                + '<h4>End of the branch</h4>'
                + '<p>Answering those questions that way leaves:</p>'
                + '<ul class="ctree__final">'
                + '<li><strong>' + fp.toLocaleString() + '</strong> viable point'
                + (fp === 1 ? '' : 's') + '</li>'
                + '<li><strong>' + fr.toLocaleString() + '</strong> disconnected region'
                + (fr === 1 ? '' : 's') + '</li>'
                + '<li><strong>' + fl + '</strong> Lagrangian'
                + (fl === 1 ? '' : 's') + '</li>'
                + '</ul></div>';
        } else {
            var q = cursor.criterion
                ? (cursor.label ? cursor.label + '<br><em>' + cursor.criterion + '</em>' : cursor.criterion)
                : (cursor.label || '');
            body = '<div class="ctree__question">'
                + (cursor.kind ? '<h4>' + cursor.kind + '</h4>' : '')
                + '<p class="ctree__q">' + q + '</p>'
                + '<div class="ctree__answers">'
                + kids.map(function (c, i) {
                    return '<button type="button" data-i="' + i + '">'
                        + branchLabel(c, i) + '</button>';
                }).join('')
                + '</div></div>';
        }

        ask.innerHTML = head + body
            + '<div class="ctree__walknav">'
            + '<button type="button" class="ctree__back"'
            + (path.length ? '' : ' disabled') + '>Back</button>'
            + '<button type="button" class="ctree__restart">Start over</button>'
            + '</div>'
            + (crumbs ? '<p class="ctree__crumbs">' + crumbs + '</p>' : '');

        ask.querySelectorAll('.ctree__answers button').forEach(function (b) {
            b.addEventListener('click', function () {
                path.push(cursor);
                cursor = cursor.children[+b.getAttribute('data-i')];
                renderWalk();
            });
        });
        var back = ask.querySelector('.ctree__back');
        if (back) back.addEventListener('click', function () {
            if (path.length) { cursor = path.pop(); renderWalk(); }
        });
        ask.querySelector('.ctree__restart').addEventListener('click', function () {
            cursor = data.tree; path = []; renderWalk();
        });
    }

    // --- mode + loading ----------------------------------------------------

    function setMode(m) {
        mode = m;
        modeBtns.forEach(function (b) {
            b.classList.toggle('is-active', b.getAttribute('data-mode') === m);
        });
        overview.hidden = m !== 'overview';
        walkWrap.hidden = m !== 'walk';
        if (m === 'walk') renderWalk();
        else updateOverview();
    }

    function render(payload) {
        data = payload;
        rootNode = d3.hierarchy(payload.tree);
        rootNode.each(function (d) {
            if (d.depth >= 2 && d.children) {
                d._children = d.children; d.children = null;
            }
        });
        cursor = payload.tree;
        path = [];
        var s = payload.stats || {};
        var a = payload.tree.agg || {};
        status.textContent = a.pts.toLocaleString() + ' points, ' + s.nodes
            + ' nodes, depth ' + s.depth + ', '
            + ((s.lit || 0) + (s.novel || 0)) + ' LLM-proposed nodes';
        svg.call(zoom.transform, d3.zoomIdentity);
        detail(payload.tree);
        setMode(mode);
    }

    function load(file) {
        status.textContent = 'Loading…';
        fetch(DATA_DIR + '/' + file)
            .then(function (r) { return r.json(); })
            .then(render)
            .catch(function () { status.textContent = 'Could not load tree.'; });
    }

    zoom = d3.zoom().scaleExtent([0.15, 4]).on('zoom', function (e) {
        gRoot.attr('transform', e.transform);
    });
    svg.call(zoom);

    modeBtns.forEach(function (b) {
        b.addEventListener('click', function () {
            setMode(b.getAttribute('data-mode'));
        });
    });
    btnExpand.addEventListener('click', expandAll);
    btnFit.addEventListener('click', fit);
    sel.addEventListener('change', function () { load(sel.value); });

    fetch(DATA_DIR + '/index.json')
        .then(function (r) { return r.json(); })
        .then(function (idx) {
            idx.trees.forEach(function (t) {
                var o = document.createElement('option');
                o.value = t.file;
                o.textContent = t.display + ' (' + t.nodes + ' nodes)';
                if (t.name === DEFAULT) o.selected = true;
                sel.appendChild(o);
            });
            load(sel.value || idx.trees[0].file);
        })
        .catch(function () { status.textContent = 'Could not load tree index.'; });
})();
