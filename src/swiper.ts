export const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 48,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  autoplay: {
    delay: 5000,
  },
});
