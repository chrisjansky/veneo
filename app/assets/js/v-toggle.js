$("[data-toggle]").on("click", function(event) {
  event.preventDefault();
  
  var
    $thisEl = $(this);

  $body
    .toggleClass($thisEl.attr("data-toggle"));

  $thisEl
    .toggleClass("toggle--is-active");
});
