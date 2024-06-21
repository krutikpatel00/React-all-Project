$(document).ready(function () {
      $(".toggle-manu").click(function (e) {
            $("nav").slideToggle();
      });
      $(".top-to-back").click(function (e) {
            $("html").animate({ "scrollTop": "0" });
      });
});

$(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
            $("header").addClass("header-active");
            $(".top-to-back").fadeIn();
      } else {
            $("header").removeClass("header-active");
            $(".top-to-back").fadeOut();
      }

});

$(document).ready(function () {
      $('.owl-carousel-1').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            responsive: {
                  0: {
                        items: 1
                  },
                  700: {
                        items: 2
                  },
                  1000: {
                        items: 3
                  }
            }
      })
});

// counter

var a = 0;
$(window).scroll(function () {

      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                  var $this = $(this),
                        countTo = $this.attr('data-count');
                  $({
                        countNum: $this.text()
                  }).animate({
                        countNum: countTo
                  },

                        {

                              duration: 2000,
                              easing: 'swing',
                              step: function () {
                                    $this.text(Math.floor(this.countNum));
                              },
                              complete: function () {
                                    $this.text(this.countNum);
                                    //alert('finished');
                              }

                        });
            });
            a = 1;
      }

});