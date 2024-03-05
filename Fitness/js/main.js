$(document).ready(function(){
	$(".dropdown__btn").click(function() {
		$(".header__menu").toggle();
	});
});

$(function() {
	$(".translate").click(function() {
		let lang = $(this).attr("id");
		$(".translate").css("color", "#ffffff");
		$(this).css("color", "#fa7c30");
		$(".lang").each(function(index, item) {
			$(this).html(arrLang[lang][$(this).attr("data-key")]);
		});
		$(".placeholder").each(function(index, item) {
			$(this).attr('placeholder', arrLang[lang][$(this).attr("data-key")]);
		});
	});
});

let arrLang = { en, ru };




