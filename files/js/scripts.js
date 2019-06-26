/* shadow highlight script for the blog and the about pages */



class Shadow {
	constructor(element) {
		this.element = element;
		this.element.addEventListener('mouseover', this.toggleShadowOver.bind(this));
		this.element.addEventListener('mouseout', this.toggleShadowLeave.bind(this));
	}

	toggleShadowOver() {
		const items = document.querySelectorAll('.team-member');
		items.forEach(item => item.classList.remove('shadow-element'));
		this.element.classList.add('shadow-element');
	}

	toggleShadowLeave() {
		this.element.classList.remove('shadow-element');
	}
}

class ShadowBlog {
	constructor(element) {
		this.element = element;
		this.element.addEventListener('mouseover', this.toggleShadowOver.bind(this));
		this.element.addEventListener('mouseout', this.toggleShadowLeave.bind(this));
	}
	toggleShadowOver() {
		const items = document.querySelectorAll('.article-layer');
		items.forEach(item => item.classList.remove('shadow-element'));
		this.element.classList.add('shadow-element');
	}

	toggleShadowLeave() {
		this.element.classList.remove('shadow-element');
	}
}

const links = document.querySelectorAll('.team-member');
links.forEach(link => new Shadow(link));
const linksBlog = document.querySelectorAll('.article-layer');
linksBlog.forEach(link => new ShadowBlog(link));
