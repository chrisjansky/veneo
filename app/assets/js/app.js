var
  viewWidth = document.documentElement.clientWidth,
  viewHeight = document.documentElement.clientHeight;

var
  $html = $("html"),
  $body = $("body"),
  $toggle = $("[data-toggle]"),
  $pagesToggle = $("[data-pages]"),
  $searchToggle = $("[data-search]");

$("[data-header]").headroom({
  offset: 20,
  tolerance: {
    down: 5,
    up: 50
  }
})
