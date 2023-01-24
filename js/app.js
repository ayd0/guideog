const mainOverlay = document.querySelector('.main-overlay');
const mainNavA = document.querySelector('#main-nav a');

const rate = 2.0;

mainOverlay.style.background = `rgb(18,35,43)`;
// 13, 25, 31 -- original color
// 25, 47, 59

document.addEventListener('scroll', () => {
	let alpha = 85 / window.scrollY*rate;
	if (alpha >= 0) {
		mainOverlay.style.background = `rgba(18,35,43,${alpha})`;
	}
});
