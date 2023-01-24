const mainOverlay = document.querySelector('.main-overlay');
const mainNavA = document.querySelector('#main-nav a');

const rate = 2.0;

mainOverlay.style.background = `rgb(13,25,31)`;

document.addEventListener('scroll', () => {
	let alpha = 85 / window.scrollY*rate;
	if (alpha >= 0) {
		mainOverlay.style.background = `rgba(13,25,31,${alpha})`;
	}
});
