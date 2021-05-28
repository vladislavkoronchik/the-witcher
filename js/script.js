let mySwiper = new Swiper('.swiper-container', {
	// slidesPerView: 2,
	loop: true,
	navigation: {
		nextEl: '.arrow-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		}
	}
});

let burgerBtn = document.querySelector('.burger');
let menuList = document.querySelector('.menu-list');
let header = document.querySelector('.header');

burgerBtn.addEventListener('click', function() {
	burgerBtn.classList.toggle('active');	
	menuList.classList.toggle('active');	
	header.classList.toggle('active');	
})