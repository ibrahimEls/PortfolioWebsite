/* Downloads picker.

   One Lagrangian class at a time, with the two things worth taking away:
   the decision tree as a full-resolution PDF and the raw transcripts the
   literature-search agents returned. The menu is the same listbox the 3D
   figure uses, so it inherits that styling and keyboard behaviour.
*/
(function () {
    'use strict';

    var root = document.getElementById('dl-pick');
    if (!root || !window.haithemCombo) return;

    var DIR = root.getAttribute('data-dir') || 'haithem-assets/downloads';
    var combo = window.haithemCombo(root.querySelector('.combo'));
    var pdf = root.querySelector('.dl-pick__file--pdf');
    var docs = root.querySelector('.dl-pick__file--docs');
    var byName = {};

    function size(n) {
        return n < 1048576 ? Math.round(n / 1024) + ' KB'
                           : (n / 1048576).toFixed(1) + ' MB';
    }

    function replies(n) {
        return n + (n === 1 ? ' reply' : ' replies');
    }

    function show(name) {
        var it = byName[name];
        if (!it) return;

        // a run can have one artifact without the other: the transcripts
        // often land before the tree has been rendered
        var drawn = !!it.pdf;
        pdf.classList.toggle('is-empty', !drawn);
        if (drawn) {
            pdf.href = DIR + '/' + it.pdf;
            pdf.removeAttribute('aria-disabled');
            pdf.querySelector('.dl-pick__note').textContent =
                'PDF · ' + size(it.pdfSize);
        } else {
            pdf.removeAttribute('href');
            pdf.setAttribute('aria-disabled', 'true');
            pdf.querySelector('.dl-pick__note').textContent =
                'not rendered yet';
        }

        // only the trees the agents were actually run on carry transcripts
        var has = !!it.responses;
        docs.classList.toggle('is-empty', !has);
        if (has) {
            docs.href = DIR + '/' + it.responses;
            docs.removeAttribute('aria-disabled');
            docs.querySelector('.dl-pick__note').textContent =
                'Markdown · ' + replies(it.responsesFiles)
                + ' · ' + size(it.responsesSize);
        } else {
            docs.removeAttribute('href');
            docs.setAttribute('aria-disabled', 'true');
            docs.querySelector('.dl-pick__note').textContent =
                'none for this tree';
        }
    }

    fetch(DIR + '/index.json')
        .then(function (r) { return r.json(); })
        .then(function (idx) {
            var rows = idx.items.map(function (it) {
                byName[it.name] = it;
                var bits = [];
                if (it.pdf) bits.push('PDF ' + size(it.pdfSize));
                if (it.responses) bits.push(replies(it.responsesFiles));
                var meta = bits.join(' · ');
                return { value: it.name, html: it.display, meta: meta,
                         group: it.runLabel };
            });
            combo.change(show);
            combo.set(rows, rows[0].value);
            show(rows[0].value);
        })
        .catch(function () { root.hidden = true; });
})();
