const swiper1 = new Swiper('.swiper1', {
	pagination: {
		el: '.swiper-pagination1',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 3500,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	}, 
	keyboard: true,
	loop: true,
	speed: 1200,
});
const swiper2 = new Swiper('.swiper__news', {
	navigation: {
		nextEl: '.swiper-button-next',
	},
	autoplay: {
		delay: 3500,
		stopOnLastSlide: false,
		disableOnInteraction: false,
	}, 
	keyboard: true,
	loop: true,
	speed: 1200,
});