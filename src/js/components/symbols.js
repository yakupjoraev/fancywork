import Swiper, { Thumbs, Navigation, Pagination } from 'swiper';
function symbolsSLider() {
Swiper.use([Thumbs, Navigation, Pagination]);
const mySwiper = new Swiper('.gallery-top', {
  slidesPerView: 1,
  thumbs: {
    swiper: {
      el: '.gallery-thumbs',
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    },
  },
  navigation: {
    nextEl: '.symbols-slider__next',
  },
});

}
symbolsSLider()
