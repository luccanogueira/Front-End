jQuery(document).ready(function() {
	jQuery('.icon-menu').click(function(e) {
		jQuery(this).toggleClass('active');
		jQuery('.menu ul').toggleClass('active');

		e.preventDefault();
	});
});