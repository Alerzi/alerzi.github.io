$(document).ready(function(){
	$(".header__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		arrows: true,
		autoplay:true,
		autoplaySpeed: 3000,
	});
	
	$(".dropdown__btn").click(function() {
		$(".header__nav-menu").toggle();
	});
});