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
    var sel     = root.querySelector('.ctree__select');
    var status  = root.querySelector('.ctree__status');
    var overview = root.querySelector('.ctree__overview');
    var walkWrap = root.querySelector('.ctree__walk');
    var walkSvgEl = root.querySelector('.ctree__walk-svg');
    var ask     = root.querySelector('.ctree__ask');
    var modeBtns = root.querySelectorAll('.ctree__mode');
    var btnFit = root.querySelector('.ctree__fit');

    var svg = d3.select(svgEl);
    var gRoot = svg.append('g');
    var gLinks = gRoot.append('g').attr('fill', 'none');
    var gNodes = gRoot.append('g');
    var walkSvg = d3.select(walkSvgEl);

    var data = null, rootNode = null, zoom = null, mode = 'walk';
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
                + (n.regions === 1 ? ' region, ' : ' regions, ')
                + n.lagrangians
                + (n.lagrangians === 1 ? ' Lagrangian' : ' Lagrangians');
        }
        return n.label || n.kind || '';
    }

    /* Box geometry for a node: text wrapped, box sized to fit it. When the
       node carries agent output (arXiv references, a status or feasibility
       verdict) those get their own rows and the box grows to hold them. */
    function box(n, opt) {
        var font = opt.weight + ' ' + opt.size + 'px ' + opt.family;
        var lines = wrap(nodeText(n), opt.maxW, opt.maxLines, font);
        var w = 0;
        lines.forEach(function (l) { w = Math.max(w, measure(l, font)); });

        var meta = null, refRows = [];
        if (opt.showRefs) {
            var verdict = n.status ? 'Status: ' + n.status
                        : (n.feasibility ? 'Feasibility: ' + n.feasibility : null);
            if (verdict) {
                meta = verdict;
                w = Math.max(w, measure(meta, opt.metaSize + 'px ' + opt.family));
            }
            // pack "arXiv:xxxx" chips into rows that fit the box
            var rf = opt.refSize + 'px ' + opt.family;
            (n.refs || []).forEach(function (r) {
                var label = 'arXiv:' + r;
                var lw = measure(label, rf);
                var row = refRows[refRows.length - 1];
                if (row && row.w + opt.refGap + lw <= opt.maxW) {
                    row.items.push({ id: r, label: label, w: lw });
                    row.w += opt.refGap + lw;
                } else {
                    refRows.push({ items: [{ id: r, label: label, w: lw }], w: lw });
                }
            });
            refRows.forEach(function (row) { w = Math.max(w, row.w); });
        }

        // a leaf that knows its composition carries a button to show it
        var btn = null;
        if (opt.showModels && n.models && n.models.length) {
            var mc = n.modelsInherited ? null
                : (n.lagrangians != null ? n.lagrangians : n.models.length);
            btn = mc == null ? 'Lagrangians'
                : mc + (mc === 1 ? ' Lagrangian' : ' Lagrangians');
            w = Math.max(w, measure(btn, opt.btnSize + 'px ' + opt.family)
                             + opt.btnPadX * 2);
        }

        // the ref/meta metrics only exist on configs that show them, so
        // fall back to 0 rather than multiplying by undefined
        var h = lines.length * opt.lineH + opt.padY * 2
              + (meta ? (opt.metaLineH || 0) : 0)
              + refRows.length * (opt.refLineH || 0)
              + (btn ? (opt.btnLineH || 0) : 0);
        return {
            lines: lines, font: font, meta: meta, refRows: refRows, btn: btn,
            w: Math.min(Math.max(w + opt.padX * 2, opt.minW),
                        opt.maxW + opt.padX * 2),
            h: h
        };
    }

    var OV = { size: 14, weight: '500', family: 'Roboto Flex, sans-serif',
               maxW: 215, maxLines: 2, padX: 12, padY: 9, lineH: 17, minW: 90,
               showModels: true, btnSize: 11.5, btnLineH: 22, btnPadX: 9,
               btnH: 17 };
    var WK = { size: 16, weight: '500', family: 'Roboto Flex, sans-serif',
               maxW: 275, maxLines: 3, padX: 14, padY: 11, lineH: 21, minW: 120,
               showRefs: true, metaSize: 12.5, metaLineH: 19,
               refSize: 12.5, refLineH: 18, refGap: 12 };

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
            g2.selectAll('text, a').remove();
            // main label sits above any agent output, so lay out from the top
            var y = -b.h / 2 + opt.padY + opt.lineH * 0.72;
            b.lines.forEach(function (line) {
                g2.append('text')
                    .attr('text-anchor', 'middle')
                    .attr('y', y)
                    .attr('font-size', opt.size)
                    .attr('font-weight', opt.weight)
                    .attr('fill', '#22262a')
                    .text(line);
                y += opt.lineH;
            });
            if (b.meta) {
                g2.append('text')
                    .attr('text-anchor', 'middle')
                    .attr('y', y + opt.metaLineH * 0.1)
                    .attr('font-size', opt.metaSize)
                    .attr('font-weight', 700)
                    .attr('fill', t.stroke)
                    .text(b.meta);
                y += opt.metaLineH;
            }
            if (b.btn) {
                var bw = measure(b.btn, opt.btnSize + 'px ' + opt.family)
                       + opt.btnPadX * 2;
                var g3 = g2.append('g')
                    .attr('class', 'ctree__nodebtn')
                    .attr('transform', 'translate(' + (-bw / 2) + ','
                        + (y - opt.btnH * 0.72) + ')')
                    .on('click', function (ev) {
                        ev.stopPropagation();
                        openModels(d.data);
                    });
                g3.append('rect')
                    .attr('width', bw).attr('height', opt.btnH)
                    .attr('rx', opt.btnH / 2).attr('ry', opt.btnH / 2);
                g3.append('text')
                    .attr('x', bw / 2).attr('y', opt.btnH * 0.72)
                    .attr('text-anchor', 'middle')
                    .attr('font-size', opt.btnSize)
                    .text(b.btn);
                y += opt.btnLineH;
            }
            b.refRows.forEach(function (row) {
                var x = -row.w / 2;
                row.items.forEach(function (it) {
                    var a = g2.append('a')
                        .attr('href', 'https://arxiv.org/abs/' + it.id)
                        .attr('xlink:href', 'https://arxiv.org/abs/' + it.id)
                        .attr('target', '_blank')
                        .attr('rel', 'noopener');
                    a.append('text')
                        .attr('class', 'ctree__ref')
                        .attr('x', x + it.w / 2)
                        .attr('y', y + opt.refLineH * 0.15)
                        .attr('text-anchor', 'middle')
                        .attr('font-size', opt.refSize)
                        .text(it.label);
                    x += it.w + opt.refGap;
                });
                y += opt.refLineH;
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
        d3.tree().nodeSize([56, 300])(rootNode);
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
            openDetail(d.data);
        });

        var xs = d3.extent(nodes, function (d) { return d.x; });
        var ys = d3.extent(nodes, function (d) { return d.y; });
        svg.attr('viewBox', [ys[0] - 140, xs[0] - 40,
                             ys[1] - ys[0] + 320, xs[1] - xs[0] + 80].join(' '))
           .style('height', Math.min(Math.max(xs[1] - xs[0] + 80, 340), 720) + 'px');
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

    // --- reasoning modal ---------------------------------------------------

    var modal = root.querySelector('.ctree__modal');

    function esc(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;');
    }

    /* The reasoning arrives as one long block. Prefer breaking it where a
       sentence opens with an all-caps marker (SEEN, NOT-SEEN, CAVEATS…),
       which is how many of these are structured. Where there are no such
       markers, fall back to grouping sentences so it is not one wall of
       text. The lookbehind for a sentence end never fires inside a decimal,
       since those have no space after the point. */
    function paragraphs(text) {
        var s = String(text);
        var parts = s.split(/(?<=\.)\s+(?=[A-Z][A-Z-]{3,}\b)/);
        if (parts.length === 1 && s.length > 700) {
            var sentences = s.split(/(?<=[.!?])\s+(?=[A-Z(])/);
            parts = [];
            for (var i = 0; i < sentences.length; i += 3) {
                parts.push(sentences.slice(i, i + 3).join(' '));
            }
        }
        return parts.map(function (p) {
            return '<p>' + esc(p).replace(
                /^([A-Z][A-Z -]{3,}[A-Z])(?=[,:\s])/,
                '<strong>$1</strong>') + '</p>';
        }).join('');
    }

    function openModal(kind, title, sub, bodyHtml) {
        if (!modal) return;
        modal.querySelector('.ctree__modal-kind').textContent = kind;
        modal.querySelector('#ctree-modal-title').textContent = title;
        var crit = modal.querySelector('.ctree__modal-crit');
        crit.textContent = sub || '';
        crit.hidden = !sub;
        modal.querySelector('.ctree__modal-body').innerHTML = bodyHtml;
        modal.hidden = false;
        modal.querySelector('.ctree__modal-close').focus();
    }

    function openReasoning(n) {
        if (!n.reasoning) return;
        openModal(n.kind || 'LLM agent', n.label || '', n.criterion || '',
                  paragraphs(n.reasoning));
    }

    /* Which Lagrangians survive at a region, by name rather than by count. */
    function openModels(n) {
        var rows = (n.models || []).map(function (m) {
            return '<li><span class="ctree__model-name">' + esc(m.name)
                + '</span>' + (m.pts != null
                    ? '<span class="ctree__model-pts">'
                      + m.pts.toLocaleString() + ' pts</span>' : '')
                + '</li>';
        }).join('');
        var body = '<ul class="ctree__models">' + rows + '</ul>';
        var count = modelCount(n);
        var named = (n.models || []).length;
        if (count != null && named < count) {
            var listed = (n.models || []).reduce(function (a, m) {
                return a + (m.pts || 0);
            }, 0);
            var rest = (n.pts != null ? n.pts - listed : 0);
            body += '<p class="ctree__note">The source names the leading '
                + named + ' of ' + count + ' classes here'
                + (rest > 0 ? ', leaving ' + rest.toLocaleString()
                    + ' points in the remainder' : '')
                + '.</p>';
        }
        if (n.signature) {
            // split before escaping: an escaped '>' is '&gt;', whose
            // semicolon would otherwise be treated as a separator
            body += '<p class="ctree__sig"><strong>Signature</strong>'
                + n.signature.split(';').map(function (t) {
                    return '<span>' + esc(t.trim()) + '</span>';
                }).join('') + '</p>';
        }
        if (n.modelsInherited) {
            body += '<p class="ctree__note">This region was split further by'
                + ' an agent. The composition above is that of the region it'
                + ' was split from, since the split is defined by an'
                + ' observable rather than by Lagrangian.</p>';
        }
        openModal('Surviving region',
                  count == null
                      ? 'Lagrangians in this region'
                      : count + (count === 1 ? ' Lagrangian here'
                                             : ' Lagrangians here'),
                  '', body);
    }

    /* The node's own count is authoritative. The source names only the
       leading contributors for a few regions, and a region an agent split
       further carries its parent's list, so the button must not invent a
       count from the number of names it happens to have. */
    function modelCount(n) {
        if (n.modelsInherited) return null;
        return n.lagrangians != null ? n.lagrangians
             : (n.models ? n.models.length : null);
    }

    function modelsButton(n) {
        if (!n.models || !n.models.length) return '';
        var c = modelCount(n);
        var label = c == null ? 'Lagrangians'
            : c + (c === 1 ? ' Lagrangian' : ' Lagrangians');
        return '<button type="button" class="ctree__models-btn">'
             + label + '</button>';
    }

    function wireModels(scope, n) {
        var b = scope.querySelector('.ctree__models-btn');
        if (b) b.addEventListener('click', function () { openModels(n); });
    }

    function closeReasoning() {
        if (modal) modal.hidden = true;
    }

    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal
                || e.target.classList.contains('ctree__modal-close')) {
                closeReasoning();
            }
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeReasoning();
        });
    }

    function reasoningButton(n) {
        return n.reasoning
            ? '<button type="button" class="ctree__why">View reasoning</button>'
            : '';
    }

    function wireReasoning(scope, n) {
        var b = scope.querySelector('.ctree__why');
        if (b) b.addEventListener('click', function () { openReasoning(n); });
    }

    // --- node details ------------------------------------------------------

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

    function detailRows(n) {
        var rows = [statLine(n)];
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
        return rows.join('');
    }

    function openDetail(n) {
        var t = TYPE[n.type] || TYPE.probe;
        openModal(n.kind || t.label, n.label || '', n.criterion || '',
                  detailRows(n));
        var body = modal.querySelector('.ctree__modal-body');
        wireReasoning(body, n);
        wireModels(body, n);
    }

    // --- walk --------------------------------------------------------------

    function branchLabel(child, i) {
        var b = (child.branch || '').toLowerCase();
        if (b === 'yes') return 'Yes';
        if (b === 'no') return 'No';
        if (b === 'observed') return 'Observed';
        if (b === 'not observed') return 'Not observed';
        if (b === 'llm split') {
            // Following the agent is a single decision, taken at the
            // literature search. Where a region carries several competing
            // proposals there is a real choice, so name them.
            if (child.type === 'novel') {
                var t = child.label || 'Proposal ' + (i + 1);
                return t.length > 42 ? t.slice(0, 41).trim() + '…' : t;
            }
            return 'Follow LLM-agent';
        }
        return 'Option ' + (i + 1);
    }

    /* A region whose only continuation is one agent proposal needs no
       decision: the reader already chose to follow the agent at the
       literature search, so step through it. */
    function autoSkip(n) {
        var k = n.children || [];
        return k.length === 1 && k[0].type === 'novel'
            && (k[0].branch || '').toLowerCase() === 'llm split';
    }

    /* The node a branch actually leads to once the automatic steps are
       taken, so the diagram connects a literature search straight to the
       proposals rather than through the region summary in between. */
    function landingNode(n) {
        var cur = n;
        while (autoSkip(cur)) cur = cur.children[0];
        return cur;
    }

    function advanceTo(node) {
        cursor = node;
        while (autoSkip(cursor)) {
            path.push(cursor);
            cursor = cursor.children[0];
        }
    }

    function stepBack() {
        if (!path.length) return;
        cursor = path.pop();
        // do not land on a node the walk steps through automatically
        while (path.length && autoSkip(cursor)) cursor = path.pop();
    }

    function drawWalkTree() {
        var kids = cursor.children || [];
        var stub = { data: cursor, x: 0, y: 0 };
        var nodes = [stub];
        var spacing = 132;
        kids.forEach(function (c, i) {
            nodes.push({
                data: landingNode(c), branchOf: c,
                x: (i - (kids.length - 1) / 2) * spacing, y: 430
            });
        });
        nodes.forEach(function (d) { d.box = box(d.data, WK); });

        walkSvg.selectAll('*').remove();
        var g = walkSvg.append('g');
        g.append('g').attr('fill', 'none').selectAll('path')
            .data(nodes.slice(1)).enter().append('path')
            .attr('stroke', function (d) {
                return (d.branchOf || d.data).dashed ? '#c9a227' : '#c3c8cd';
            })
            .attr('stroke-width', 1.6)
            .attr('stroke-dasharray', function (d) {
                return (d.branchOf || d.data).dashed ? '5 3' : null;
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
            .text(function (d, i) {
                return branchLabel(d.branchOf || d.data, i);
            });
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

        /* The path so far, as the question each step asked paired with the
           answer given, so the combination of cuts is readable rather than
           a bare run of yes/no. The node visited at step i produced the
           node at i+1, so the answer belongs to the following node. */
        function stepQuestion(n) {
            if (n.type === 'leaf') {
                return 'Region left whole, split by an agent';
            }
            var q = n.label || n.kind || '';
            return q.length > 74 ? q.slice(0, 73).trim() + '…' : q;
        }

        // nodes the walk steps through on its own were never a decision
        var taken = path.filter(function (p) { return !autoSkip(p); });
        var steps = path.map(function (p, i) {
            if (autoSkip(p)) return '';
            var next = path[i + 1] || cursor;
            var t = TYPE[p.type] || TYPE.probe;   // same palette as the graph
            return '<li><span class="ctree__step-node" style="background:'
                + t.fill + ';border-color:' + t.stroke + '">'
                + esc(stepQuestion(p)) + '</span><span class="ctree__crumb">'
                + esc(next.branch || '—') + '</span></li>';
        }).join('');
        var crumbs = steps
            ? '<h4>Cuts applied</h4><ol class="ctree__path">' + steps + '</ol>'
            : '';

        /* Lagrangians left: exact at a terminal node, which states its own
           count. Above one, the data gives per-region counts but not which
           Lagrangian each region belongs to, so the union cannot be
           recovered and the largest region count is a lower bound. */
        var lagr = isEnd && cursor.lagrangians != null
            ? String(cursor.lagrangians)
            : '≥ ' + (a.lagr || 0);

        var head = '<div class="ctree__stats">'
            + '<div><span>' + (a.pts || 0).toLocaleString() + '</span>points still viable</div>'
            + '<div><span>' + lagr + '</span>'
            + ((isEnd && cursor.lagrangians === 1) ? 'Lagrangian left' : 'Lagrangians left')
            + '</div>'
            + '<div><span>' + taken.length + '</span>decisions made</div>'
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
                + '</ul>' + modelsButton(cursor) + '</div>';
        } else {
            var q = cursor.criterion
                ? (cursor.label ? cursor.label + '<br><em>' + cursor.criterion + '</em>' : cursor.criterion)
                : (cursor.label || '');
            var extra = '';
            if (cursor.status) {
                extra += '<p class="ctree__crit"><strong>Status</strong> '
                      + cursor.status + '</p>';
            }
            if (cursor.feasibility) {
                extra += '<p class="ctree__crit"><strong>Feasibility</strong> '
                      + cursor.feasibility + '</p>';
            }
            if (cursor.refs && cursor.refs.length) {
                extra += '<p class="ctree__crit"><strong>References</strong><br>'
                    + cursor.refs.map(function (r) {
                        return '<a href="https://arxiv.org/abs/' + r
                            + '" target="_blank" rel="noopener">arXiv:' + r
                            + '</a>';
                    }).join('<br>') + '</p>';
            }
            extra += reasoningButton(cursor);
            // a region the standard probes stopped at, which an agent then
            // split further: frame it as that rather than as a question
            var isSplitRegion = cursor.type === 'leaf';
            var head4 = isSplitRegion ? 'Region reached' : cursor.kind;
            if (isSplitRegion) {
                q = (cursor.pts != null ? cursor.pts.toLocaleString() : '?')
                  + ' points survive here'
                  + '<em>The standard probes stop at this region. An agent '
                  + 'proposed a further split:</em>';
            }
            body = '<div class="ctree__question">'
                + (head4 ? '<h4>' + head4 + '</h4>' : '')
                + '<p class="ctree__q">' + q + '</p>'
                + extra
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
            + (crumbs ? '<div class="ctree__crumbs">' + crumbs + '</div>' : '');

        wireReasoning(ask, cursor);
        wireModels(ask, cursor);
        ask.querySelectorAll('.ctree__answers button').forEach(function (b) {
            b.addEventListener('click', function () {
                var next = cursor.children[+b.getAttribute('data-i')];
                path.push(cursor);
                advanceTo(next);
                renderWalk();
            });
        });
        var back = ask.querySelector('.ctree__back');
        if (back) back.addEventListener('click', function () {
            stepBack();
            renderWalk();
        });
        ask.querySelector('.ctree__restart').addEventListener('click', function () {
            path = [];
            advanceTo(data.tree);
            renderWalk();
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
        if (m === 'walk') {
            renderWalk();
        } else {
            updateOverview();
            setTimeout(fit, 30);   // after layout, so the bbox is real
        }
    }

    function render(payload) {
        data = payload;
        // the whole-tree view opens on the whole tree, fitted to the frame
        rootNode = d3.hierarchy(payload.tree);
        cursor = payload.tree;
        path = [];
        advanceTo(payload.tree);
        var s = payload.stats || {};
        var a = payload.tree.agg || {};
        status.textContent = a.pts.toLocaleString() + ' points, ' + s.nodes
            + ' nodes, depth ' + s.depth + ', '
            + ((s.lit || 0) + (s.novel || 0)) + ' LLM-proposed nodes';
        svg.call(zoom.transform, d3.zoomIdentity);
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
    btnFit.addEventListener('click', fit);
    sel.addEventListener('change', function () { load(sel.value); });

    fetch(DATA_DIR + '/index.json')
        .then(function (r) { return r.json(); })
        .then(function (idx) {
            [['many', 'Trees over many Lagrangians'],
             ['per', 'Trees per Lagrangian']].forEach(function (g) {
                var rows = idx.trees.filter(function (t) {
                    return t.group === g[0];
                });
                if (!rows.length) return;
                var grp = document.createElement('optgroup');
                grp.label = g[1];
                rows.forEach(function (t) {
                    var o = document.createElement('option');
                    o.value = t.file;
                    o.textContent = t.display + ' (' + t.nodes + ' nodes)';
                    if (t.name === DEFAULT) o.selected = true;
                    grp.appendChild(o);
                });
                sel.appendChild(grp);
            });
            load(sel.value || idx.trees[0].file);
        })
        .catch(function () { status.textContent = 'Could not load tree index.'; });
})();
