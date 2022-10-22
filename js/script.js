jQuery(function ($) {
  $(window).resize(function () {
    if (window.matchMedia("(min-width: 1201px)").matches) {
      $(".nav-body").removeAttr("style");
      $(".menu-btn").removeClass("is-open");
    }
  });

  $(".js-hamburger").on("click", function () {
    $(this).toggleClass("is-open");
    $(".nav-body").toggleClass("open");
    $(".nav-body").slideToggle("fast");
  });
});
