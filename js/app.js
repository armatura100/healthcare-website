// DOM elements
const header = document.querySelector('.header');
const menuLinks = document.querySelectorAll('.menu__link');
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

// header scroll listener
document.addEventListener('DOMContentLoaded', checkScroll);
document.addEventListener('scroll', checkScroll);

function checkScroll() {
	let scrollPos = scrollY;

	if (scrollPos > 0) {
		header.classList.add('header--scrolled');
	} else {
		header.classList.remove('header--scrolled');
	}
}

// menu links
menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		menuLinks.forEach(link => {
			link.classList.remove('menu__link--active');
		});
		link.classList.add('menu__link--active');
		menuList.classList.remove('menu--active');
		menuBtn.classList.remove('menu__btn--open');
	});
});

// menu btn
menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('menu__btn--open');
	menuList.classList.toggle('menu--active');
})

// Sliders
$(function () {
	$('.service__items').slick({
		dots: true,
		arrows: false,
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 1500,
		centerMode: true,
		responsive: [
			{
				breakpoint: 1151,
				settings: {
					slidesToShow: 2,
					centerMode: false,
				}
			},
			{
				breakpoint: 751,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.reviews__items').slick({
		slidesToShow: 3,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 1500,
		prevArrow: '<button class= "slick-prev" type="button"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8341 1.97049C11.0293 2.1656 11.0294 2.48189 10.8345 2.67721L4.8779 8.64685C4.68315 8.84203 4.68315 9.15802 4.8779 9.35319L10.8345 15.3228C11.0294 15.5182 11.0293 15.8344 10.8341 16.0296L9.48996 17.3737C9.2947 17.569 8.97812 17.569 8.78285 17.3737L0.762688 9.35358C0.567426 9.15831 0.567426 8.84173 0.762688 8.64647L8.78285 0.626302C8.97812 0.43104 9.2947 0.43104 9.48996 0.626302L10.8341 1.97049Z" fill="#40A3F8"/></svg></button>',
		nextArrow: '<button class="slick-next" type="button"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.762287 16.0295C0.567175 15.8344 0.567003 15.5181 0.761901 15.3228L6.71854 9.35315C6.91329 9.15797 6.91329 8.84198 6.71854 8.64681L0.761902 2.67717C0.567003 2.48184 0.567175 2.16556 0.762287 1.97045L2.10647 0.626259C2.30174 0.430997 2.61832 0.430996 2.81358 0.626258L10.8337 8.64642C11.029 8.84169 11.029 9.15827 10.8337 9.35353L2.81358 17.3737C2.61832 17.569 2.30174 17.569 2.10647 17.3737L0.762287 16.0295Z" fill="#40A3F8"/></svg></button>',
		responsive: [
			{
				breakpoint: 1251,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 860,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});
});