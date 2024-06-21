// counter js
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

// 

$(document).ready(function () {
      $('.owl-carousel-1').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            center: true,
            autoplay: true,
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 2
                  },
                  1000: {
                        items: 4
                  }
            }
      })

});

$(document).ready(function () {
      $('.owl-carousel-2').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            center: true,
            stagePadding: 0,
            autoplay: true,
            dots: false,
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 2
                  },
                  1000: {
                        items: 2
                  }
            }
      })
});