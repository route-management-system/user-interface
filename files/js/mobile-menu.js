(function () {
    'use strict';

    // device state
    const nav_menu = {
        orientation : 'portrait',
        state: 'closed'
    };

    // dom element references
    const top_nav_menu = document.querySelector('.main-header nav');
    const menu_button = top_nav_menu.querySelector('.menu-button');
    const close_button = top_nav_menu.querySelector('.close-button');
    const menu_items = top_nav_menu.querySelectorAll('a');

    // menu item hight used to calculate y position to tween to
    nav_menu.item_height = menu_items[0].scrollHeight;

    menu_button.addEventListener(
        'click',
        (e) => {
            e.preventDefault();

            if (nav_menu.state === 'closed') {

                menu_items.forEach((el, i) => {
                    if (i > 1) { // skip first two (menu button & logo), they're not hidden
                        TweenMax.to(el, 0.5, { // see greensock tween docs
                            ease: Power4.easeOut,
                            y: nav_menu.item_height * (i - 1),
                            onStart: () => {
                                el.style.position = 'absolute';
                                el.style.display = 'block';
                                el.style.zIndex = 100;
                            }
                        });
                    }

                });

                nav_menu.state = 'open';
            }

            else {
                menu_items.forEach((el, i) => {
                    if (i > 1) {
                        TweenMax.to(el, 0.75, {
                            ease: Power4.easeOut,
                            y: 0 ,
                            onComplete:() => {
                                el.style.position = 'absolute';
                                el.style.display = 'none';
                            }
                        });
                    }
                });

                nav_menu.state = 'closed';
            }
        }
    );

    // added later for 'close' button at bottom of menu
    // after it's open, could function to share with
    // menu button event listener
    close_button.addEventListener(
        'click',
        (e) => {
            e.preventDefault();

            if (nav_menu.state === 'open') {
                menu_items.forEach((el, i) => {
                    if (i > 1) {
                        TweenMax.to(el, 1, {
                            ease: Power4.easeOut,
                            y: 0,
                            onComplete:() => {
                                el.style.position = 'absolute';
                                el.style.display = 'none';
                            }
                        });
                    }
                });

                nav_menu.state = 'closed';
            }
        }
    );
}());
