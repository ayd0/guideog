const darkOverlay = document.querySelector('.dark-overlay');
// const navHomeBtn = document.querySelector('#nav-home-btn');

const rate = 2.0;

darkOverlay.style.background = 'rgba(0,0,0,1)';

document.addEventListener('scroll', () => {
	let alpha = 85 / window.scrollY*rate;
	if (alpha >= 0) {
		darkOverlay.style.background = `rgba(0,0,0,${alpha})`;
	}
});

/*
// default behavior w.o scrollspy
navHomeBtn.addEventListener('click', () => {
	darkOverlay.style.background = 'rgba(0,0,0,1)';
});
*/


