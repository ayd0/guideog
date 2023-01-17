// Init Scrollspy
$('body').scrollspy({ target: '' });

// Smooth Scrolling on Nav
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
})

// Modal set focus to username input field
$('#loginModal').on('shown.bs.modal', () => {
	$('#username-inp').focus();
});
