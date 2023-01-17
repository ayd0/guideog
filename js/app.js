const darkOverlay = document.querySelector('.dark-overlay');
const mainNavA = document.querySelector('#main-nav a');

const rate = 2.0;
const bgColors = '0,0,0,';

darkOverlay.style.background = `rgba(0,0,0,1)`;

document.addEventListener('scroll', () => {
	let alpha = 85 / window.scrollY*rate;
	if (alpha >= 0) {
		darkOverlay.style.background = `rgba(0,0,0,${alpha})`;
	}
});
