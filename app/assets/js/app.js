var
  viewWidth = document.documentElement.clientWidth,
  viewHeight = document.documentElement.clientHeight;

var
  $html = $("html"),
  $body = $("body"),
  $toggle = $("[data-toggle]"),
  $pagesToggle = $("[data-pages]"),
  $searchToggle = $("[data-search]");

var
  toggleActiveClass = "toggle--is-active";

$("[data-header]").headroom({
  offset: 20,
  tolerance: {
    down: 5,
    up: 50
  }
});

var $catSlider = $("[data-slider]").flickity({
  contain: true,
  draggable: true,
  prevNextButtons: false,
  pageDots: false
});

$catSlider.on("staticClick.flickity", function(event, pointer, cellElement, cellIndex) {
  if (typeof cellIndex == "number") {
    $catSlider.flickity("selectCell", cellIndex)
  }
})

$("[data-cat-item]").on("click", function(event) {
  event.preventDefault();
})

$("[data-close]").on("click", function(event) {
  $html.removeClass("search--is-active");
  $toggle.removeClass(toggleActiveClass);
})

$pagesToggle.on("click", function(event) {
  $html.removeClass("search--is-active");
  $searchToggle.removeClass(toggleActiveClass);
})

$searchToggle.on("click", function(event) {
  $html.removeClass("pages--is-active");
  $pagesToggle.removeClass(toggleActiveClass);
})
