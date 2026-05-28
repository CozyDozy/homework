const swiper = new Swiper(".product__slider", {
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  effect: "slide",

  speed: 800,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    prevEl: ".product__slider-button--prev",
    nextEl: ".product__slider-button--next",
  },

  keyboard: {
    enabled: true,
  },
});
