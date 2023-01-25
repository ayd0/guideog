const mainOverlay = document.querySelector('.main-overlay');
const exploreCategories = document.querySelectorAll('#categories .nav-link');
const exploreGuides = document.querySelectorAll('#guides .nav-link');

const rate = 2.0;

// Set initial background color/opacity
mainOverlay.style.background = `rgb(18,35,43)`;
// 13, 25, 31 -- original color
// 25, 47, 59

// Change background opacity on scroll
document.addEventListener('scroll', () => {
	let alpha = 85 / window.scrollY*rate;
	if (alpha >= 0) {
		mainOverlay.style.background = `rgba(18,35,43,${alpha})`;
	}
});

// Handle explon button clicks
let exploreBtnClickHandler = function(button, buttonGroup) {	
	for (node of buttonGroup) {
		node.classList.remove('custom-active');
	}
	button.classList.add('custom-active');
}

let categoryBtnClickHandler = function() {
	exploreBtnClickHandler(this, exploreCategories);
}

let guideBtnClickHandler = function() {
	exploreBtnClickHandler(this, exploreGuides);
}

for (let i = 0; i < 3; ++i) {
	exploreCategories[i].addEventListener('click', categoryBtnClickHandler);
	exploreGuides[i].addEventListener('click', guideBtnClickHandler);
}

