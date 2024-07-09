$(".products-list-slider").slick({
  infinite: true,
  slidesToShow: 5,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
      },
    },
  ],
});

$(".posts__slider").slick({
  infinite: true,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
      },
    },
  ],
});

$(".catalog__catalog-button").on("click", function () {
  $(".catalog__slide-content").slideToggle("slow", function () {
    // Animation complete.
  });
});

document.getElementById("menuBurger").onclick = () => {
  document.getElementById("adaptiveMenuContent").classList.toggle("none");
  setTimeout(() => {
    document.getElementById("adaptiveMenuContent").classList.toggle("visible");
  }, 1000);
};
