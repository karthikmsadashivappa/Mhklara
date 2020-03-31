$(".main-banner").slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true
});

$("#mr_kats_show_slider").slick({
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 345,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
