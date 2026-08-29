/* Interactive constraint-tree explorer.

   A collapsible d3 tree over the experimental questions that partition the
   surviving parameter space. Node type comes from the DOT fillcolor:
   standard probe, LLM literature search, LLM novel-observable proposal, or
   a leaf carrying point/region/Lagrangian counts.
*/
(function () {
    'use strict';

    var root = document.getElementById('ctree');
    if (!root || typeof d3 === 'undefined') return;

    var DATA_DIR = root.getAttribute('data-dir');
    var DEFAULT = root.getAttribute('data-default') || 'global_tree';
    var OPEN_DEPTH = 3;

    var TYPE = {
        probe: { fill: '#9dc3e6', label: 'Experimental probe' },
        lit:   { fill: '#f2c231', label: 'LLM literature search' },
        novel: { fill: '#ef8b3a', label: 'LLM novel observable' },
        leaf:  { fill: '#c9cdd2', label: 'Surviving region' }
    };

    var svgEl = root.querySelector('.ctree__svg');
    var panel = root.querySelector('.ctree__panel');
    var sel = root.querySelector('.ctree__select');
    var status = root.querySelector('.ctree__status');
    var btnExpand = root.querySelector('.ctree__expand');
    var btnCollapse = root.querySelector('.ctree__collapse');

    var svg = d3.select(svgEl);
    var gRoot = svg.append('g');
    var gLinks = gRoot.append('g').attr('fill', 'none');
    var gNodes = gRoot.append('g');

    var treeLayout = d3.tree().nodeSize([26, 260]);
    var data = null, rootNode = null, counter = 0, zoom = null;

    function short(n, max) {
        var t = n.label || '';
        if (n.type === 'leaf' && n.pts != null) {
            t = n.pts.toLocaleString() + ' pts, ' + n.regions
                + (n.regions === 1 ? ' region' : ' regions');
        }
        return t.length > max ? t.slice(0, max - 1).trim() + '…' : t;
    }

    function collapse(d, depth) {
        if (d.children) {
            if (d.depth >= depth) {
                d._children = d.children;
                d.children = null;
                d._children.forEach(function (c) { collapse(c, depth); });
            } else {
                d.children.forEach(function (c) { collapse(c, depth); });
            }
        }
    }

    function eachAll(d, fn) {
        fn(d);
        (d.children || d._children || []).forEach(function (c) {
            eachAll(c, fn);
        });
    }

    function setAll(open) {
        eachAll(rootNode, function (d) {
            if (open) {
                if (d._children) { d.children = d._children; d._children = null; }
            } else if (d.depth > 0 && d.children) {
                d._children = d.children; d.children = null;
            }
        });
        update(rootNode);
    }

    function detail(n) {
        var rows = [];
        var t = TYPE[n.type] || TYPE.probe;
        rows.push('<span class="ctree__badge" style="background:' + t.fill
                  + '">' + t.label + '</span>');
        if (n.kind) rows.push('<h4>' + n.kind + '</h4>');
        rows.push('<p class="ctree__panel-title">' + (n.label || '') + '</p>');
        if (n.criterion) {
            rows.push('<p class="ctree__crit"><strong>Criterion</strong><br>'
                      + n.criterion + '</p>');
        }
        if (n.pts != null) {
            rows.push('<ul class="ctree__facts">'
                + '<li><strong>' + n.pts.toLocaleString() + '</strong> points</li>'
                + '<li><strong>' + n.regions.toLocaleString() + '</strong> '
                + (n.regions === 1 ? 'region' : 'regions') + '</li>'
                + '<li><strong>' + n.lagrangians + '</strong> '
                + (n.lagrangians === 1 ? 'Lagrangian' : 'Lagrangians')
                + '</li></ul>');
        }
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
        if (n.branch) {
            rows.push('<p class="ctree__crit"><strong>Reached by</strong> '
                      + n.branch + '</p>');
        }
        panel.innerHTML = rows.join('');
    }

    function update(source) {
        treeLayout(rootNode);
        var nodes = rootNode.descendants();
        var links = rootNode.links();

        var minX = d3.min(nodes, function (d) { return d.x; });
        var maxX = d3.max(nodes, function (d) { return d.x; });
        var maxY = d3.max(nodes, function (d) { return d.y; });
        // the root's label is anchored to the left of its node, so the box
        // needs real headroom on that side or it clips
        var padL = 190;
        var h = Math.max(maxX - minX + 80, 260);
        svg.attr('viewBox', [-padL, minX - 40, maxY + padL + 300, h + 40].join(' '))
           .style('height', Math.min(Math.max(h + 40, 320), 900) + 'px');

        var link = gLinks.selectAll('path').data(links, function (d) {
            return d.target.data.id;
        });
        link.exit().remove();
        link.enter().append('path')
            .merge(link)
            .attr('stroke', function (d) {
                return d.target.data.dashed ? '#c58a2a' : '#c9cdd2';
            })
            .attr('stroke-width', 1.2)
            .attr('stroke-dasharray', function (d) {
                return d.target.data.dashed ? '4 3' : null;
            })
            .attr('d', d3.linkHorizontal()
                .x(function (d) { return d.y; })
                .y(function (d) { return d.x; }));

        var node = gNodes.selectAll('g.ctree__node').data(nodes, function (d) {
            return d.data.id || (d.id || (d.id = ++counter));
        });
        node.exit().remove();

        var enter = node.enter().append('g')
            .attr('class', 'ctree__node')
            .style('cursor', 'pointer')
            .on('click', function (e, d) {
                detail(d.data);
                if (d.children) { d._children = d.children; d.children = null; }
                else if (d._children) { d.children = d._children; d._children = null; }
                update(d);
            });

        enter.append('circle').attr('r', 5).attr('stroke-width', 1.5);
        enter.append('text').attr('dy', '0.32em').attr('font-size', 11);
        enter.append('title');

        var all = enter.merge(node);
        all.attr('transform', function (d) {
            return 'translate(' + d.y + ',' + d.x + ')';
        });
        all.select('circle')
            .attr('fill', function (d) {
                var t = TYPE[d.data.type] || TYPE.probe;
                return d.data.children || d.data._children || d._children
                    ? t.fill : t.fill;
            })
            .attr('stroke', function (d) {
                return d._children ? '#2f3437' : '#ffffff';
            })
            .attr('r', function (d) { return d._children ? 6.5 : 5; });
        all.select('text')
            .attr('x', function (d) { return d.children || d._children ? -9 : 9; })
            .attr('text-anchor', function (d) {
                return d.children || d._children ? 'end' : 'start';
            })
            .attr('fill', '#2f3437')
            .text(function (d) { return short(d.data, 34); });
        all.select('title').text(function (d) {
            return (d.data.kind ? d.data.kind + '\n' : '') + (d.data.label || '');
        });
    }

    function render(payload) {
        data = payload;
        counter = 0;
        rootNode = d3.hierarchy(payload.tree);
        rootNode.x0 = 0; rootNode.y0 = 0;
        collapse(rootNode, OPEN_DEPTH);
        update(rootNode);
        var s = payload.stats || {};
        status.textContent = s.nodes + ' nodes, depth ' + s.depth + ', '
            + (s.leaf || 0) + ' surviving regions, '
            + ((s.lit || 0) + (s.novel || 0)) + ' LLM-proposed nodes';
        detail(payload.tree);
        svg.call(zoom.transform, d3.zoomIdentity);
    }

    function load(file) {
        status.textContent = 'Loading…';
        fetch(DATA_DIR + '/' + file)
            .then(function (r) { return r.json(); })
            .then(render)
            .catch(function () { status.textContent = 'Could not load tree.'; });
    }

    zoom = d3.zoom().scaleExtent([0.3, 4]).on('zoom', function (e) {
        gRoot.attr('transform', e.transform);
    });
    svg.call(zoom);

    btnExpand.addEventListener('click', function () { setAll(true); });
    btnCollapse.addEventListener('click', function () { setAll(false); });
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
