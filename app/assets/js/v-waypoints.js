// Sticky Add to Cart panel
var $sticky = $("[data-sticky]");

var
  stuckClass = "panel--is-stuck",
  unstuckClass = "panel--is-unstuck";

if ($sticky.length > 0 && currentDevice == "desktop") {
  var
    stickyStart = new Waypoint({
      element: document.getElementById("js-sticky-start"),
      handler: function(direction) {
        $sticky.toggleClass(stuckClass, direction == "down");
      },
      offset: "bottom-in-view"
    }),
    stickyEnd = new Waypoint({
      element: document.getElementById("js-sticky-end"),
      handler: function(direction) {
        $sticky.toggleClass(unstuckClass, direction == "down");

        if (direction == "down") {
          $sticky.css({top: this.element.offsetTop});
        } else {
          $sticky.removeAttr("style");
        }
      },
      offset: "bottom-in-view"
    })
}

function panelRestick($element, container) {
  if ($element.hasClass(unstuckClass)) {
    $element.css({top: container.offsetTop});
  }
}
