

$(document).ready(function(){
	$('.post-wrapper').slick
	({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  
	  nextArrow : $('.next'),
	  prevArrow :$ ('.prev')
	});


	let hamberger = document.querySelector ('.hamberger');
	let times = document.querySelector('.times');
	let mobileNav = document.querySelector('.mobile-nav')
	const mediaQuery = window.matchMedia('(max-width: 1024px)')

	hamberger.addEventListener('click' ,function(){
		mobileNav.classList.add('open');

	});

	times.addEventListener('click' ,function(){
		mobileNav.classList.remove('open');
	});

	
});