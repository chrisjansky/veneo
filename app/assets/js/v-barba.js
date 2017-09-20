/* On page load */
$("[data-header]").scrollupbar();
veneoInit();
veneoDropdown();
veneoScroll();
veneoInteractions();
veneoToggle();

veneoFlickity();
veneoTabs();
veneoWaypoints();

/* Barba.js */
Barba.Pjax.init();
Barba.Prefetch.init();

/* On AJAX-enabled link click */
Barba.Dispatcher.on('linkClicked', function() {
  $.scrollupbar.destroy();
});

/* Event based here */
Barba.Dispatcher.on('newPageReady', function() {
  veneoDropdown();
  veneoScroll();
  veneoInteractions();
  veneoToggle();
});

/* Direct DOM manupulation here */
Barba.Dispatcher.on('transitionCompleted', function() {
  $("[data-header]").scrollupbar();
  veneoInit();
  veneoFlickity();
  veneoTabs();
  veneoMap();
  veneoWaypoints();
});
