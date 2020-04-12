$(function() {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    asNavFor: ".slider__pagination"
  });

  $(".slider__pagination").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider"
  });

  $(".surf__slide").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    asNavFor: ".surf__map",
  });

  $(".surf__map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".surf__slide",
    focusOnSelect: true,
  });

  $(".travel__slider").slick({
    infinite: true,
    fade: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
  });

  $(".sleep__slider").slick({
    infinite: true,
    fade: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
  })

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="/images/sleep/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="/images/sleep/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  $(".quantity-button").on("click", function () {
    let summ = $(".nights").val() * $(".summ").data("nights") + ($(".guests").val() - 1) * $(".summ").data("guests");
  $(".summ").html('$' + summ);
  })

  let summ = $(".nights").val() * $(".summ").data("nights") + ($(".guests").val() - 1) * $(".summ").data("guests");
  $(".summ").html('$' + summ);

  $(".shop__image-circle").on("click", function () {
    $(this).toggleClass("active")
  });

  $(".shop__slider").slick({
    infinite: true,
    fade: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
  })


});
