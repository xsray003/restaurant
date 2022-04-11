(function ($) {
  "use strict";

  var navbarCollapse = function () {
    if ($("#mainnav").offset().top > 100) {
      $("#mainnav").addClass("navbar-shrink");
    } else {
        $("#mainnav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);
})(jQuery);
