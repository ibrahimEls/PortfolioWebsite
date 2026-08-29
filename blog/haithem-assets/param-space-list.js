/* Builds the additional-materials download list from the data index. */
(function () {
    'use strict';

    var list = document.getElementById('ps3d-extra');
    var fig = document.getElementById('ps3d');
    if (!list || !fig) return;

    var dir = fig.getAttribute('data-dir');

    function label(e) {
        return e.field || e.cls.replace(/_/g, ' ');
    }

    fetch(dir + '/index.json')
        .then(function (r) { return r.json(); })
        .then(function (idx) {
            idx.lagrangians
                .sort(function (a, b) { return a.number - b.number; })
                .forEach(function (e) {
                    var li = document.createElement('li');
                    var a = document.createElement('a');
                    a.href = dir + '/' + e.file;
                    a.setAttribute('download', '');
                    a.textContent = 'Lagrangian ' + e.number + ', ' + label(e);
                    var meta = document.createElement('span');
                    meta.className = 'data-list__meta';
                    meta.textContent = 'd = ' + e.d + ', ' + e.nTurns
                        + ' turns, ' + e.nViable + ' viable';
                    li.appendChild(a);
                    li.appendChild(meta);
                    list.appendChild(li);
                });
        })
        .catch(function () {
            list.innerHTML = '<li>Data index unavailable.</li>';
        });
})();
