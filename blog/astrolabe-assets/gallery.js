/* The movie gallery's player, and the figures' magnifier.

   Each poster in the grid is a button carrying the movie's URL; pressing it
   opens the movie over the page in the post's own video element (controls,
   looping, muted autoplay -- the movies have no sound), the way the figure
   videos are embedded in the posts. A figure marked .static-figure--zoom
   opens the same way, as a picture at full size. Escape, the close button
   or a click on the backdrop close it, and a video stops so nothing keeps
   downloading.
*/
(function () {
    'use strict';

    var buttons = document.querySelectorAll('.gallery__btn');
    var zooms = document.querySelectorAll('.static-figure--zoom img');
    if (!buttons.length && !zooms.length) return;

    var box = null, video = null, picture = null, caption = null, lastFocus = null;

    function build() {
        box = document.createElement('div');
        box.className = 'lightbox';
        box.setAttribute('role', 'dialog');
        box.setAttribute('aria-modal', 'true');
        box.innerHTML =
            '<div class="lightbox__box">' +
            '  <button type="button" class="lightbox__close" aria-label="Close">&times;</button>' +
            '  <video class="lightbox__video video-figure__player" controls loop muted playsinline preload="metadata"></video>' +
            '  <img class="lightbox__img" alt="" hidden>' +
            '  <p class="lightbox__caption"></p>' +
            '</div>';
        document.body.appendChild(box);
        video = box.querySelector('video');
        picture = box.querySelector('.lightbox__img');
        caption = box.querySelector('.lightbox__caption');
        box.querySelector('.lightbox__close').addEventListener('click', close);
        box.addEventListener('click', function (e) {
            if (e.target === box) close();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && box.classList.contains('is-open')) close();
        });
    }

    function show(el) {
        box.classList.add('is-open');
        document.body.classList.add('has-lightbox');
        lastFocus = el;
        box.querySelector('.lightbox__close').focus();
    }

    function open(btn) {
        if (!box) build();
        picture.hidden = true; video.hidden = false;
        video.poster = btn.getAttribute('data-poster') || '';
        video.src = btn.getAttribute('data-src');
        caption.innerHTML = btn.getAttribute('data-caption') || '';
        show(btn);
        var p = video.play();
        if (p && p.catch) p.catch(function () { /* the controls are there */ });
    }

    // a figure: the picture at full size, with the figure's own caption
    function openPicture(img) {
        if (!box) build();
        video.hidden = true; picture.hidden = false;
        picture.src = img.getAttribute('data-zoom') || img.src;
        picture.alt = img.alt;
        var fc = img.parentNode.querySelector('figcaption');
        caption.innerHTML = fc ? fc.innerHTML : '';
        show(img);
    }

    function close() {
        if (!box) return;
        if (!video.hidden) {
            video.pause();
            video.removeAttribute('src');
            video.load();
        }
        picture.removeAttribute('src');
        box.classList.remove('is-open');
        document.body.classList.remove('has-lightbox');
        if (lastFocus) lastFocus.focus();
    }

    Array.prototype.forEach.call(buttons, function (btn) {
        btn.addEventListener('click', function () { open(btn); });
    });
    Array.prototype.forEach.call(zooms, function (img) {
        img.addEventListener('click', function () { openPicture(img); });
        img.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPicture(img); }
        });
    });
})();
