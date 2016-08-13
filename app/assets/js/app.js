var
  viewWidth = document.documentElement.clientWidth,
  viewHeight = document.documentElement.clientHeight;

var
  $html = $("html"),
  $body = $("body"),
  $header = $("[data-header]"),
  $toggle = $("[data-toggle]"),
  $pagesToggle = $("[data-pages]"),
  $searchToggle = $("[data-search]");

$header.scrollupbar();
