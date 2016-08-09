// Sticky Add to Cart panel
var $sticky = $("[data-sticky]");

if ($sticky.length > 0) {
  var
    stickyStart = new Waypoint({
      element: document.getElementById("js-sticky-start"),
      handler: function(direction) {
        $sticky.toggleClass("panel--is-stuck", direction == "down");
      },
      offset: "bottom-in-view"
    }),
    stickyEnd = new Waypoint({
      element: document.getElementById("js-sticky-end"),
      handler: function(direction) {
        $sticky.toggleClass("panel--is-unstuck", direction == "down");

        if (direction == "down") {
          $sticky.css({top: this.element.offsetTop});
        } else {
          $sticky.removeAttr("style");
        }
      },
      offset: "bottom-in-view"
    })
}
