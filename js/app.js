const mainOverlay = document.querySelector('.main-overlay');
const exploreCategories = document.querySelectorAll('#categories .nav-link');
const exploreGuides = document.querySelectorAll('#guides .nav-link');
const categoryAnchors = document.querySelectorAll('#categories-sub a');
const guideAnchors = document.querySelectorAll('#guides-sub a');

const rate = 2.0;

// name arrays will eventually be replaced by get functions to real 
// categories/guides based on usage statistics
let categoryNames = [
	[
		'c/ Programming',
		'c/ Cooking',
		'c/ Gardening',
		'c/ Car Maintenence',
		'c/ Travel',
		'c/ Home Decorating',
		'c/ Game Design'
	],[],[]
];

let guideNames = [
	[
		'g/ Bootstrap: Mastering Glid & Flexbox',
		'g/ Making Ramsay\'s burger',
		'g/ Strike the Earth: Grow Some Potatoes',
		'g/ How to Change Your Oil',
		'g/ Must See Spots in Seoul',
		'g/ Making your Home Offfice a Vivarium',
		'g/ Unity for Winners'
	],[],[]
];

for (let i = 0; i < categoryNames[0].length; ++i) {
	categoryNames[1].push('c/ Some Category');
	categoryNames[2].push('c/ Some Other Category');
	guideNames[1].push('g/ Some Guide');
	guideNames[2].push('g/ Some Other Guide')
}

// Set initial background color/opacity
mainOverlay.style.background = `rgb(18,35,43)`; // 13, 25, 31 -- original color

// Change background opacity on scroll
document.addEventListener('scroll', () => {
	let alpha = 85 / window.scrollY*rate;
	if (alpha >= 0) {
		mainOverlay.style.background = `rgba(18,35,43,${alpha})`;
	}
});

// Handle explore button clicks
let exploreBtnClickHandler = function(button, buttonGroup, buttonAnchors, anchorNames) {	
	for (node of buttonGroup) {
		node.classList.remove('custom-active');
	}
	button.classList.add('custom-active');
	
	let i = Array.prototype.slice.call(buttonGroup).indexOf(button);
	let j = 0;

	for (anchor of buttonAnchors) {
		anchor.innerText = anchorNames[i][j++];
	}
}

let categoryBtnClickHandler = function() {
	exploreBtnClickHandler(this, exploreCategories, categoryAnchors, categoryNames);
}

let guideBtnClickHandler = function() {
	exploreBtnClickHandler(this, exploreGuides, guideAnchors, guideNames);
}

for (let i = 0; i < 3; ++i) {
	exploreCategories[i].addEventListener('click', categoryBtnClickHandler);
	exploreGuides[i].addEventListener('click', guideBtnClickHandler);
}

