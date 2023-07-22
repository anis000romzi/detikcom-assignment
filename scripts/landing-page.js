const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.arrow-slider-next',
    prevEl: '.arrow-slider-prev',
  },
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    850: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});
