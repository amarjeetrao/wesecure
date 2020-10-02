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

})();