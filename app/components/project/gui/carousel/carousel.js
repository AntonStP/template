import Swiper from 'swiper';
import $ from 'jquery';

$(() => {

  var swiper = new Swiper('.swiper-container_1', {
    centeredSlides: false,
    slidesPerView: 'auto',
    loop: false,
    breakpoints: {
      320: {

      },
      1024: {
        spaceBetween: 29,
        watchOverflow: true
      }
    }
  
  });

});