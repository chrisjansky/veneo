var
  viewWidth = document.documentElement.clientWidth,
  viewHeight = document.documentElement.clientHeight;

$("[data-slider]").each(function(index, instance) {
  var sliderSwiper = new Swiper(instance, {
    // Shared settings
    keyboardControl: true,
    grabCursor: true,
    slidesPerView: "auto"
  });
});
