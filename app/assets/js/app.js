var
  viewWidth = document.documentElement.clientWidth,
  viewHeight = document.documentElement.clientHeight;

var
  $body = $("body");

// WebFontConfig = {
//   custom: {
//     families: ["christel", "GoldenSans-Regular"]
//   }
// }

// setTimeout(function() {
  $("[data-slider]").each(function(index, instance) {
    var sliderSwiper = new Swiper(instance, {
      // Shared settings
      slidesPerView: "auto",
      centeredSlides: true,
      watchSlidesProgress: true,
      keyboardControl: true,
      grabCursor: true
    });
  })
// }, 500);

$("[data-cat-item]").on("click", function(event) {
  event.preventDefault();
})

// $("[data-pages]").on("click", function(event) {
//   $body.toggleClass("pages--is-active");
// })
