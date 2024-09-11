export default function initSwiper() {
  const swiper = new Swiper(".clients__swiper", {
    speed: 400,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}
