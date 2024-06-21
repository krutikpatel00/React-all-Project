$(document).ready(function () {
    $('.owl-carousel-1').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        animateOut: 'fadeOut',
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    var owl = $('.owl-carousel-1');
    owl.owlCarousel();
    // Go to the next item
    $('.btn-next').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.btn-prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
});

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
    }
    else {
        $("header").removeClass("header-active");
        $(".top-to-back").fadeOut();
    }
});


// valution

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

$(document).ready(function () {
    $('.owl-carousel-2').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        center: true,
        stagePadding: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
});

$(document).ready(function () {
    $(".faqs-accordion > a").click(function (e) {
        $(this).parent(".faqs-accordion").find(".hide-show").slideToggle();
        $(this).parent(".faqs-accordion").prevAll(".faqs-accordion").find(".hide-show").slideUp();
        $(this).parent(".faqs-accordion").nextAll(".faqs-accordion").find(".hide-show").slideUp();
    });
    $(".faqs-accordion > a").click(function (e) {
        $(this).parent(".faqs-accordion").find(".faq-icon").toggleClass("icon-rotate");;

        $(this).parent(".faqs-accordion").prevAll(".faqs-accordion").find(".faq-icon").removeClass("icon-rotate");
        $(this).parent(".faqs-accordion").nextAll(".faqs-accordion").find(".faq-icon").removeClass("icon-rotate");
    });
    $(".faqs-accordion > a").click(function (e) {
        $(this).parent(".faqs-accordion").find("#faq-bg").toggleClass("faq-bg");

        $(this).parent(".faqs-accordion").prevAll(".faqs-accordion").find("#faq-bg").removeClass("faq-bg");
        $(this).parent(".faqs-accordion").nextAll(".faqs-accordion").find("#faq-bg").removeClass("faq-bg");
    });
});


$(document).ready(function () {
    $().click(function (e) { 
        e.preventDefault();
        
    });
});