// Sticky Add to Cart panel
var $sticky = $("[data-sticky]");

var
  unstuckClass = "panel--is-unstuck";

if ($sticky.length > 0 && currentDevice == "desktop") {
  var
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

// Header background-color waypoint
var headerFade = $header.waypoint({
  handler: function(direction) {
    $header.toggleClass("header--not-top", direction == "down");
  },
  offset: function() {
    // Triger once scrolled past its height
    return -this.element.clientHeight
  }
})
