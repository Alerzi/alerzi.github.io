$(document).ready(function(){
	$(".header__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay:true,
		autoplaySpeed: 3000,
	});

	$(".client__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		arrows: false,
		autoplay:true,
		autoplaySpeed: 3000
	});
	
	$(".dropdown__btn").click(function() {
		$(".header__menu").toggle();
	});
});