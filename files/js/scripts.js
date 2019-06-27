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
} else if (document.querySelectorAll('.feature-layer').length > 0){
	/* For the features */
	const links = document.querySelectorAll('.feature-layer');
	console.log('found elements 3');
	links.forEach(link => new Shadow(link));

	/* For the members section of the about page */
	const links2 = document.querySelectorAll('.about-member');
	console.log('found elements 4');
	links2.forEach(link => new Shadow(link));
} else {

}

/* summary button: for the team.html page */

class SummaryPress {
	constructor(element) {
		this.element = element;
		this.buttonOpen = this.element.querySelector('.summary-open');
		this.buttonClose = this.element.querySelector('.summary-close');
		this.paragraph = this.element.querySelector('.summary');
		console.log(this.paragraph);

		this.buttonOpen.addEventListener('click', this.expandParagraph.bind(this));
		this.buttonClose.addEventListener('click', this.collapseParagraph.bind(this));
	}

	expandParagraph() {
		this.paragraph.style.display = 'block';
		this.buttonOpen.style.display = 'none';
		this.buttonClose.style.display = 'block';
	}

	collapseParagraph() {
		this.paragraph.style.display = 'none';
		this.buttonOpen.style.display = 'block';
		this.buttonClose.style.display = 'none';
	}
}

const buttons = document.querySelectorAll('.member-summary');
buttons.forEach(button => new SummaryPress(button));
