import Swiper, { Navigation, Pagination } from 'swiper';
import $ from 'jquery';

$(() => {

  var swiper = new Swiper('.swiper-container_1', {
    modules: [ Navigation, Pagination ],
    centeredSlides: false,
    slidesPerView: 'auto',
    loop: false,
    breakpoints: {
      320: {
        spaceBetween: 35,
        pagination: {
          el: '.work__advantages-pagination',
          type: 'bullets',
        },
      },
      1024: {
        spaceBetween: 29,
        watchOverflow: true,
        pagination: false
      }
    }
  });

  var swiper_2 = new Swiper('.swiper-container_2', {
    modules: [ Navigation, Pagination ],
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 40,
    breakpoints: {
      320: {
        spaceBetween: 35,
      },
      1024: {
        navigation: {
          nextEl: '.work__photos-nav_next',
          prevEl: '.work__photos-nav_prev',
        }
      }
    },
    pagination: {
      el: '.work__photos-pagination',
      type: 'bullets',
    }
  });


  var swiper_3 = new Swiper('.swiper-container_3', {
    modules: [ Navigation, Pagination ],
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 40,
    breakpoints: {
      320: {
        spaceBetween: 35,
        pagination: {
          el: '.about__pagination',
          type: 'bullets',
        }
      },
      1024: {
        navigation: {
          nextEl: '.about__nav_next',
          prevEl: '.about__nav_prev',
        }
      }
    }
  });

});