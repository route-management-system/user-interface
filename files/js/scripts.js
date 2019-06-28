(function () {
    'use strict';

    // dynamically set the body bottom padding rquired for the sticky footer to work.
    const footer_height = document.querySelector('.main-footer').scrollHeight;
    document.body.style.paddingBottom = (footer_height - 10) + 'px';
}());
