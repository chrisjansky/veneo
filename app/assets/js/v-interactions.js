var
  toggleActiveClass = "toggle--is-active",
  matActiveClass = "material--is-active",
  varActiveClass = "variant--is-active",
  catActiveClass = "category--is-active";

var $catLink = $("[data-cat-link]");

$catLink.on("click", function(event) {
  event.preventDefault();

  $catLink.removeClass(catActiveClass);
  $(this).addClass(catActiveClass);
})

$("[data-mats-item]").on("click", function(event) {
  $(this).siblings().removeClass(matActiveClass);
  $(this).addClass(matActiveClass);
})

$("[data-vars-item]").on("click", function(event) {
  $(this).siblings().removeClass(varActiveClass);
  $(this).addClass(varActiveClass);
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
