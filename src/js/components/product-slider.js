import Swiper, {Navigation, Pagination } from 'swiper';
  Swiper.use([Navigation, Pagination]);
  const swiper = new Swiper('.product__container', {
    slidesPerView: 'auto',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

