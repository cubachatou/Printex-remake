//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderMain = new Swiper(".slider-main", {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 1300,
	simulateTouch: true,
	loop: true,
	preloadImages: false,
	lazy: true,
  parallax: true,
	// Dotts
	pagination: {
		el: ".pagination-main",
		clickable: true,
	},
	// Arrows
	navigation: {
		nextEl: ".controls-main .controls-main__button_next",
		prevEl: ".controls-main .controls-main__button_prev",
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});

function sliders_bild_callback(params) { }

let sliderDA = new Swiper(".da", {
  effect: 'fade',
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 1300,
	simulateTouch: true,
	loop: true,
	preloadImages: false,
	lazy: true,
  parallax: true,
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});

sliderMain.controller.control = sliderDA;
sliderDA.controller.control = sliderMain;