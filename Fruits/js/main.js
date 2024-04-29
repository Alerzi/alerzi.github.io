let slide = new Swiper(".swiper1", {
    autoplay: { delay: 5000 },
    slidesPerView: 1,
    loop: true,
    navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

let slide2 = new Swiper(".swiper2", {
    autoplay: { delay: 5000 },
    slidesPerView: 1,
    loop: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let map;

function init() {
  let options = {
    zoom: 10,
    center: {
      lat: -34.397, lng: 150.644
    }
  }
  map = new google.maps.Map(document.getElementById("map"), options);
}