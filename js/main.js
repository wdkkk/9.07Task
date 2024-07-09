$(".products-list-slider").slick({
  infinite: true,
  slidesToShow: 5,
  variableWidth: true,
});

$(".posts__slider").slick({
  infinite: true,
  slidesToShow: 4,
});

$(".catalog__catalog-button").on("click", function () {
  $(".catalog__slide-content").slideToggle("slow", function () {
    // Animation complete.
  });
});
