(function() {
	'use strict';

	window.addEventListener('scroll', () => {
		if ( document.querySelector('.header') ) {
			const header = document.querySelector('.header');

			document.documentElement.scrollTop > 60 ?
				header.classList.add('_scroll') : header.classList.remove('_scroll');
		}
	});

	if ( document.querySelector('.intro-slider__init') ) {
		const introSlider = document.querySelector('.intro-slider__init'),
			introSliderNav = document.querySelector('.intro-slider__dots'),
			introSliderControls = document.querySelector('.intro-slider__arrows');

		tns({
			container: introSlider,
			items: 1,
			loop: true,
			gutter: 30,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			fixedWidth: 806,
			nav: true,
			navContainer: introSliderNav,
			controls: true,
			controlsContainer: introSliderControls,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayButtonOutput: false,
			responsive: {
				0: {
					fixedWidth: false
				},
				1200: {
					fixedWidth: 706
				},
				1406: {
					fixedWidth: 806
				}
			}
		});
	}

	if ( document.querySelector('.panel__item') ) {
		const panelItems = document.querySelectorAll('.panel__item');

		panelItems.forEach((item)=> {
			item.addEventListener('click', (e)=> {
				e.stopPropagation();
				if ( item.hasAttribute('data-src') ) {
					let itemSrc = item.getAttribute('data-src');

					document.querySelector(itemSrc).classList.add('_active');

					document.querySelector('body').style = 'overflow: hidden';
				}
			});
		});
	}

	if ( document.querySelector('.mobile-catalog__control button') ) {
		const mobileSto = document.querySelector('.mobile-catalog__control button');

		mobileSto.addEventListener('click', ()=> {
			mobileSto.classList.toggle('_active');
		});
	}

	if ( document.querySelector('.mobile-catalog__list > li._parent > a') ) {
		const mobileCatalogListControls = document.querySelectorAll('.mobile-catalog__list > li._parent > a');

		mobileCatalogListControls.forEach((item)=> {
			item.addEventListener('click', (e)=> {
				e.preventDefault();
				item.closest('li').classList.toggle('_active');
			});
		});
	}

	if ( document.querySelector('.panel__box') ) {
		document.addEventListener('click', (e) => {
			const panelBox = document.querySelectorAll('.panel__box');

			panelBox.forEach((item)=> {
				let panelBoxContent = item.querySelector('.panel__box-content');

				if ( document.querySelector('.fancybox__container') ) {

				} else {
					if ( !panelBoxContent.contains(e.target) ) {
						item.classList.remove('_active');
						document.querySelector('body').style = '';
					}
				}
			});
		});
	}

	if ( document.querySelector('.slider__init') ) {
		const sliders = document.querySelectorAll('.slider__init');

		sliders.forEach((item)=> {
			let itemArrows = item.closest('.slider').querySelector('.arrows');

			tns({
				container: item,
				loop: true,
				gutter: 10,
				mouseDrag: true,
				swipeAngle: false,
				speed: 1000,
				nav: false,
				controls: true,
				controlsContainer: itemArrows,
				responsive: {
					0: {
						items: 1
					},
					767: {
						items: 2
					},
					991: {
						items: 3
					},
					1200: {
						items: 4
					},
					1400: {
						items: 5
					}
				}
			});
		});
	}

	if ( document.querySelector('.product__carousel-init') ) {
		const productCarousels = document.querySelectorAll('.product__carousel-init');

		productCarousels.forEach((item)=> {
			let itemDots = item.closest('.product__carousel').querySelector('.product__dots');

			tns({
				container: item,
				items: 1,
				loop: false,
				gutter: 0,
				mouseDrag: false,
				touch: false,
				swipeAngle: false,
				speed: 1000,
				nav: true,
				navContainer: itemDots,
				controls: false
			});
		});
	}

	if ( document.querySelector('.product__count') ) {
		const productCount = document.querySelectorAll('.product__count');

		productCount.forEach((item) => {
			let productCountInput = item.querySelector('input'),
				productCountPlus = item.querySelector('button._plus'),
				productCountMinus = item.querySelector('button._minus');

			productCountPlus.addEventListener('click', () => {
				productCountInput.value++;
			});

			productCountMinus.addEventListener('click', () => {
				productCountInput.value > 1 ? productCountInput.value-- : '';
			});
		});
	}

	window.addEventListener("DOMContentLoaded", () => {
		[].forEach.call( document.querySelectorAll('input[type="tel"]'), (input) => {
			let keyCode;

			function mask(event) {
				event.keyCode && (keyCode = event.keyCode);
				let pos = this.selectionStart;
				if (pos < 3) event.preventDefault();
				let matrix = "+7 (___) ___-__-__",
					i = 0,
					def = matrix.replace(/\D/g, ""),
					val = this.value.replace(/\D/g, ""),
					new_value = matrix.replace(/[_\d]/g, function(a) {
						return i < val.length ? val.charAt(i++) || def.charAt(i) : a
					});
				i = new_value.indexOf("_");
				if (i != -1) {
					i < 5 && (i = 3);
					new_value = new_value.slice(0, i)
				}
				let reg = matrix.substr(0, this.value.length).replace(/_+/g,
					function(a) {
						return "\\d{1," + a.length + "}"
					}).replace(/[+()]/g, "\\$&");
				reg = new RegExp("^" + reg + "$");
				if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
				if (event.type == "blur" && this.value.length < 5)  this.value = ""
			}

			input.addEventListener("input", mask, false);
			input.addEventListener("focus", mask, false);
			input.addEventListener("blur", mask, false);
			input.addEventListener("keydown", mask, false);
		});
	});

	if ( document.querySelector('.form__password') ) {
		let formPassword = document.querySelectorAll('.form__password');

		formPassword.forEach((item) => {
			item.addEventListener('click', () => {
				let formInput = item.closest('fieldset').querySelector('input'),
					formIcons = item.querySelectorAll('svg');

				item.classList.toggle('_active');

				formIcons.forEach((icon) => {
					icon.classList.toggle('_active');
				});

				item.classList.contains('_active') ? formInput.setAttribute('type', 'text') : formInput.setAttribute('type', 'password');
			});
		});
	}

	if ( document.querySelector('input[name="policy"]') ) {
		let policy = document.querySelectorAll('input[name="policy"]');

		policy.forEach((item) => {
			item.addEventListener('change', () => {
				let formBtn = item.closest('form').querySelector('button[type="submit"]');

				item.checked ? formBtn.removeAttribute('disabled') : formBtn.setAttribute('disabled', 'disabled');
			});
		});
	}

	if ( document.querySelector('.about__more') ) {
		const aboutMore = document.querySelector('.about__more');

		aboutMore.addEventListener('click', () => {
			aboutMore.querySelector('svg:first-child').classList.remove('_active');
			aboutMore.querySelector('svg:nth-child(2)').classList.remove('_active');
			aboutMore.closest('.about').querySelector('.about__hidden').classList.toggle('_active');

			if ( aboutMore.classList.contains('_active') ) {
				aboutMore.querySelector('span').innerHTML = aboutMore.getAttribute('data-show');
				aboutMore.querySelector('svg:first-child').classList.add('_active');
			} else {
				aboutMore.querySelector('span').innerHTML = aboutMore.getAttribute('data-hide');
				aboutMore.querySelector('svg:nth-child(2)').classList.add('_active');
			}

			aboutMore.classList.toggle('_active');
		});
	}

	if ( document.querySelector('button.product__param') ) {
		const productParams = document.querySelectorAll('.product__param');

		productParams.forEach((item) => {
			item.addEventListener('click', (e) => {
				item.classList.toggle('_active');

				e.stopPropagation();
			});
		});

		document.addEventListener('click', (e) => {
			const productPopups = document.querySelectorAll('.product__popup');

			productPopups.forEach((item)=> {
				if ( !item.contains(e.target) ) {
					item.closest('.product__wrap-popup').querySelector('button').classList.remove('_active');
				}
			});
		});
	}

	document.addEventListener('touchstart', handleTouchStart, false);
	document.addEventListener('touchmove', handleTouchMove, false);
	var xDown = null;
	var yDown = null;

	function getTouches(evt) {
		return evt.touches;
	}

	function handleTouchStart(evt) {
		const firstTouch = getTouches(evt)[0];
		xDown = firstTouch.clientX;
		yDown = firstTouch.clientY;
	}

	function handleTouchMove(evt) {
		if ( ! xDown || ! yDown ) {
			return;
		}

		var xUp = evt.touches[0].clientX;
		var yUp = evt.touches[0].clientY;

		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;

		if ( Math.abs( xDiff ) < Math.abs( yDiff ) ) {
			if ( yDiff < -10 ) {
				if ( document.querySelector('.panel__box') ) {
					const panelBox = document.querySelectorAll('.panel__box');

					panelBox.forEach((item)=> {
						let panelBoxContent = item.querySelector('.panel__box-content');
						item.classList.remove('_active');
						document.querySelector('body').style = '';
					});
				}
			}
		}
		xDown = null;
		yDown = null;
	}

	const goTopBtn = document.querySelector('.go-top');

	window.addEventListener('scroll', trackScroll);
	goTopBtn.addEventListener('click', backToTop);

	function trackScroll() {
		let scrolled = window.pageYOffset;
		let coords = document.documentElement.clientHeight;

		if (scrolled > coords) {
			goTopBtn.classList.add('_active');
		}
		if (scrolled < coords) {
			goTopBtn.classList.remove('_active');
		}
	}

	function backToTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -80);
			setTimeout(backToTop, 10);
		}
	}

	const showPanel = document.querySelectorAll('.show-panel');

	if (showPanel.length > 0) {
		showPanel.forEach((item) => {
			item.addEventListener('click', (e) => {
				let itemSrc = document.querySelector(item.getAttribute('data-src'));

				if (itemSrc) {
					itemSrc.classList.toggle('_active');
				}

				e.stopPropagation();
			});
		});
	}

	const filterPanelCar = document.querySelectorAll('.mobile-car input[type="radio"]'),
		filterPanelCarBtn = document.querySelector('.filter__mobile-control._car');

	if ( (filterPanelCar.length > 0) && (filterPanelCarBtn) ) {
		filterPanelCar.forEach((item) => {
			item.addEventListener('change', () => {
				filterPanelCarBtn.innerHTML = item.value;
				filterPanelCarBtn.classList.add('_active');
			});
		});
	}

	const filterPanelModel = document.querySelectorAll('.mobile-model input[type="checkbox"]'),
		filterPanelModelBtn = document.querySelector('.filter__mobile-control._model');

	if ( (filterPanelModel.length > 0) && (filterPanelModelBtn) ) {
		filterPanelModel.forEach((item) => {
			item.addEventListener('change', () => {
				let tempValue = '';

				filterPanelModel.forEach((tempItem) => {
					if (tempValue === '') {
						tempItem.checked ? tempValue = tempValue + tempItem.value : '';
					} else {
						tempItem.checked ? tempValue = tempValue + ', ' + tempItem.value : '';
					}
				});

				filterPanelModelBtn.innerHTML = tempValue;

				if (tempValue) {
					filterPanelModelBtn.classList.add('_active')
				} else {
					filterPanelModelBtn.innerHTML = filterPanelModelBtn.getAttribute('data-default');
					filterPanelModelBtn.classList.remove('_active');
				}
			});
		});
	}

	const templateItem = document.querySelectorAll('.template__item'),
		categoryTemplate = document.querySelectorAll('.category__template');

	if ( (templateItem.length > 0) && (categoryTemplate.length > 0) ) {
		templateItem.forEach((item) => {
			item.addEventListener('click', () => {
				let itemSrc = document.querySelector(item.getAttribute('data-src'));

				templateItem.forEach((tempItem) => {
					tempItem.classList.remove('_active');
				});

				categoryTemplate.forEach((tempItem) => {
					tempItem.classList.remove('_active');
				});

				item.classList.add('_active');
				itemSrc.classList.add('_active');
			});
		});
	}

	const accessouriesCarousel = document.querySelector('.accessouries__carousel'),
		accessouriesArrows = document.querySelector('.accessouries .arrows');

	if (accessouriesCarousel) {
		tns({
			container: accessouriesCarousel,
			loop: true,
			gutter: 10,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			nav: false,
			controls: true,
			controlsContainer: accessouriesArrows,
			responsive: {
				0: {
					items: 1
				},
				767: {
					items: 2
				},
				991: {
					items: 3
				},
				1200: {
					items: 4
				},
				1400: {
					items: 5
				}
			}
		});
	}

	const tabsBtn = document.querySelectorAll('.tabs__btn');

	if (tabsBtn.length > 0) {
		tabsBtn.forEach((btn) => {
			btn.addEventListener('click', () => {
				let btnContent = btn.closest('.tabs').querySelector('.tabs__content[data-item="'+btn.getAttribute('data-item')+'"]');

				btn.closest('.tabs').querySelectorAll('.tabs__btn').forEach((item) => {
					item.classList.remove('_active');
				});

				btn.closest('.tabs').querySelectorAll('.tabs__content').forEach((item) => {
					item.classList.remove('_active');
				});

				btn.classList.add('_active');
				btnContent.classList.add('_active');
			});
		});
	}

	const similarCarousel = document.querySelector('.similar__carousel'),
		similarArrows = document.querySelector('.similar .arrows');

	if (similarCarousel) {
		tns({
			container: similarCarousel,
			loop: true,
			gutter: 15,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			nav: false,
			controls: true,
			controlsContainer: similarArrows,
			responsive: {
				0: {
					items: 1
				},
				767: {
					items: 2
				},
				991: {
					items: 3
				},
				1199: {
					items: 4
				},
				1400: {
					items: 5
				}
			}
		});
	}

	const filterOilChooseBtn = document.querySelectorAll('.filter__seal-choose-btn');

	if (filterOilChooseBtn.length > 0) {
		filterOilChooseBtn.forEach((btn) => {
			btn.addEventListener('click', () => {
				btn.classList.toggle('_active');
			});
		});
	}

	const filterOilRadio = document.querySelectorAll('.filter__seal-choose-block input[type="radio"]');

	if ( (filterOilRadio.length > 0) && (filterOilChooseBtn.length > 0) ) {
		filterOilRadio.forEach((radio) => {
			radio.addEventListener('change', () => {
				let radioBtn = radio.closest('.filter__seal-choose').querySelector('.filter__seal-choose-btn');

				radioBtn.classList.remove('_active');
				radioBtn.classList.add('_black');
				radioBtn.innerHTML = radio.value;
			});
		});
	}

	const profileChange = document.querySelectorAll('.profile__change');

	if (profileChange.length > 0) {
		profileChange.forEach((item) => {
			item.addEventListener('click', () => {
				item.classList.contains('_active') ? item.innerHTML = item.getAttribute('data-change') :
					item.innerHTML = item.getAttribute('data-save');

				item.classList.toggle('_active');

				let inputs;

				if ( item.classList.contains('_block') ) {
					inputs = item.closest('.profile__block').querySelectorAll('.profile__input');
				} else {
					inputs = document.querySelectorAll('.profile__input');
				}

				if ( item.classList.contains('_active') ) {
					inputs.forEach((input) => {
						input.removeAttribute('readonly');
					});
				} else {
					inputs.forEach((input) => {
						input.setAttribute('readonly', 'readonly');
					});
				}
			});
		});
	}

	const orderItem = document.querySelectorAll('.order__item');

	if ( orderItem.length > 0 ) {
		orderItem.forEach((item) => {
			item.addEventListener('click', () => {
				item.classList.toggle('_active');
			});
		});
	}

	const modalRegister = document.querySelector('button[data-src="#modal-register"]');

	if ( modalRegister ) {
		modalRegister.addEventListener('click', () => {
			Fancybox.close();
		});
	}

})()