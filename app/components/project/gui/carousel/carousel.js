import Swiper from 'swiper';
import $ from 'jquery';

$(() => {

  var swiper = new Swiper('.swiper-container', {
    grabCursor: true,
    breakpoints: {
      1024: {
        spaceBetween: 100,
        slidePerView: "auto",
        centeredSlides: true,
        watchOverflow: false
      }
    }
  
  });

});