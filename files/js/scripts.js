(function () {
    'use strict';

    // dynamically set the body bottom padding rquired for the sticky footer to work.
    const footer_height = document.querySelector('.main-footer').scrollHeight;
    document.body.style.paddingBottom = (footer_height - 10) + 'px';
}());

/* shadow highlight script for the blog and the about pages */



class Shadow {
	constructor(element) {
		this.element = element;
		this.element.addEventListener('mouseover', this.toggleShadowOver.bind(this));
		this.element.addEventListener('mouseout', this.toggleShadowLeave.bind(this));
	}

	toggleShadowOver() {
		this.element.classList.add('shadow-element');
	}

	toggleShadowLeave() {
		this.element.classList.remove('shadow-element');
	}
}


if (document.querySelectorAll('.team-member').length > 0) {
	const links = document.querySelectorAll('.team-member');
	console.log('found elements 1');
	links.forEach(link => new Shadow(link));
} else if (document.querySelectorAll('.article-layer').length > 0) {
	const links = document.querySelectorAll('.article-layer');
	console.log('found elements 2');
	links.forEach(link => new Shadow(link));
} else {
	console.log('nothing matching command');
}