(function () {
	// testimonial slider
	let swiper = new Swiper('.swiper-container', {
		autoHeight: true,
		autoplay: {
			delay: 4500,
			disableOnInteraction: false
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	});

	//navigation mobile menu
	let menuToggle = document.querySelector('.navbar-toggler');

	menuToggle.addEventListener('click', function () {
		mobileTarget = this.dataset.target;

		let mobileMenu = document.querySelector(mobileTarget);
		mobileMenu.classList.toggle('slided');
	});
})();