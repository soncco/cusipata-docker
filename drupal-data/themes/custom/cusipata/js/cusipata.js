"use strict";

AOS.init({
  duration: 800
});

(function ($, Drupal) {
  Drupal.behaviors.cusipata = {
    attach: function attach(context, settings) {
      $('#main-figure img').removeAttr('width').removeAttr('height');
      $('.galeria-item').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: true
      });
    }
  };
})(jQuery, Drupal);
