/* Scale a bundled figure to fit its column.

   The embedded page lays itself out fluidly but has a minimum width, so
   sizing the frame to the column either clips it or leaves scrollbars.
   Instead it is rendered at the fixed size the figure was drawn for and
   scaled down to whatever width is available, which keeps it seamless.
*/
(function () {
    'use strict';

    var frames = document.querySelectorAll('.embed-figure__frame');
    if (!frames.length) return;

    function fit(frame) {
        var iframe = frame.querySelector('iframe');
        if (!iframe) return;
        var w = +frame.getAttribute('data-w') || 1400;
        var h = +frame.getAttribute('data-h') || 720;
        var avail = frame.clientWidth;
        if (!avail) return;
        var k = Math.min(1, avail / w);
        iframe.style.width = w + 'px';
        iframe.style.height = h + 'px';
        iframe.style.transformOrigin = 'top left';
        iframe.style.transform = 'scale(' + k + ')';
        frame.style.height = Math.round(h * k) + 'px';
    }

    function fitAll() {
        Array.prototype.forEach.call(frames, fit);
    }

    fitAll();
    window.addEventListener('resize', fitAll);
    Array.prototype.forEach.call(frames, function (f) {
        var iframe = f.querySelector('iframe');
        if (iframe) iframe.addEventListener('load', function () { fit(f); });
    });
})();
