// categorieItemes
$(document).ready(function () {
      $(".categorie-manu").click(function (e) {
            $("#categorieItemes").slideToggle();

      });
});

// togglemanu
$(document).ready(function () {
      $("#toggle-manu").click(function (e) {
            $(".nav-bar").toggleClass("open-nav");
      });
      $(".close-nav").click(function (e) {
            $(".nav-bar").toggleClass("open-nav");
      });
      $(".top-to-back").click(function (e) {
            $("html").animate({ "scrollTop": "0" });

      });
});

$(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
            $(".top-to-back").fadeIn();

      } else {

            $(".top-to-back").fadeOut();
      }
});

$(".Categories").click(function (e) {
      e.preventDefault();
      $("#Categories").show();
      $("#Main-Manu").hide();
});
$(".Main-Manu").click(function (e) {
      e.preventDefault();
      $("#Main-Manu").show();
      $("#Categories").hide();
});