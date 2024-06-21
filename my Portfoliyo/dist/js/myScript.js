$(document).ready(function () {
      $(".toggle-manu").click(function (e) {
            $("header nav").toggleClass("nav-active");

      });
      $(".toggle-close").click(function (e) {
            $("header nav").removeClass("nav-active");
      });
      $(".top-to-back").hide();
      $(".top-to-back").click(function (e) {
            $("html").animate({ "scrollTop": "0" });

      });

});


$(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
            $("header").addClass("header-active");
            $('.top-to-back').fadeIn();
      } else {
            $("header").removeClass("header-active");
            $(".top-to-back").fadeOut();
      }
});

$(document).ready(function () {
      $(".hidden-project").fadeOut();
      $(".project-more").click(function (e) {
            $(".hidden-project").fadeToggle("slow");
      });
});


$(window).on("load", function () {
      $(".loding-left").css({
            "left": "-100%",
            "transition": " 3s all"
            
      });
      $(".loding-right").css({
            "right": "-100%",
            "transition": " 3s all"
      });
      $(".loding-left").fadeOut(1000);
      $(".loding-right").fadeOut(1000);
});