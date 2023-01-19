// Init Scrollspy
$('body').scrollspy({ target: '' });

// Smooth scrolling on nav
$("#main-nav a, #learn-btn a[href^='#']").on('click', function(event) {
	if (this.hash !== "") {
		event.preventDefault();

		const hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1000, function() {
			window.location.hash = hash;
		});
	}
});

// On page load set focus to sign up email input field
$(function() {
	$('#signup-email').focus();	
});

// Login modal set focus to username input field
$('#loginModal').on('shown.bs.modal', () => {
	$('#username-inp').focus();
});
