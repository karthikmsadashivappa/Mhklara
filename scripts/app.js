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

$("#top_stories_slider").slick({
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 9999,
      settings: {
        slidesToShow: 4
      }
    },
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

$("#naanu_series_slider").slick({
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
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

$(".pop").on("click", function(e) {
  var wrapper = $("#video-modal");
  var href = $(this).attr("href");
  var customFrame =
    "<iframe src=" +
    href +
    ' width="100%" height="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" class="youtube-video"></iframe>';
  $(wrapper)
    .append(customFrame)
    .show();
  e.preventDefault();
});

var closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", function() {
  document.querySelector("#video-modal").style.display = "none";
  document.querySelector(".ytp-cued-thumbnail-overlay").style.display = "none";
});

$(".close-button").click(function() {
  document.querySelector(".youtube-video").src = "";
  window.location.reload();
});
