/* The movie gallery's player.

   Each poster in the grid is a button carrying the movie's URL; pressing it
   opens the movie over the page in the post's own video element (controls,
   looping, muted autoplay -- the movies have no sound), the way the figure
   videos are embedded in the posts. Escape, the close button or a click on
   the backdrop close it, and the video stops so nothing keeps downloading.
*/
(function () {
    'use strict';

    var buttons = document.querySelectorAll('.gallery__btn');
    if (!buttons.length) return;

    var box = null, video = null, caption = null, lastFocus = null;

    function build() {
        box = document.createElement('div');
        box.className = 'lightbox';
        box.setAttribute('role', 'dialog');
        box.setAttribute('aria-modal', 'true');
        box.innerHTML =
            '<div class="lightbox__box">' +
            '  <button type="button" class="lightbox__close" aria-label="Close">&times;</button>' +
            '  <video class="lightbox__video video-figure__player" controls loop muted playsinline preload="metadata"></video>' +
            '  <p class="lightbox__caption"></p>' +
            '</div>';
        document.body.appendChild(box);
        video = box.querySelector('video');
        caption = box.querySelector('.lightbox__caption');
        box.querySelector('.lightbox__close').addEventListener('click', close);
        box.addEventListener('click', function (e) {
            if (e.target === box) close();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && box.classList.contains('is-open')) close();
        });
    }

    function open(btn) {
        if (!box) build();
        lastFocus = btn;
        video.poster = btn.getAttribute('data-poster') || '';
        video.src = btn.getAttribute('data-src');
        caption.innerHTML = btn.getAttribute('data-caption') || '';
        box.classList.add('is-open');
        document.body.classList.add('has-lightbox');
        var p = video.play();
        if (p && p.catch) p.catch(function () { /* the controls are there */ });
        box.querySelector('.lightbox__close').focus();
    }

    function close() {
        if (!box) return;
        video.pause();
        video.removeAttribute('src');
        video.load();
        box.classList.remove('is-open');
        document.body.classList.remove('has-lightbox');
        if (lastFocus) lastFocus.focus();
    }

    Array.prototype.forEach.call(buttons, function (btn) {
        btn.addEventListener('click', function () { open(btn); });
    });
})();
