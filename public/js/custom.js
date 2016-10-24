jQuery(document).ready(function($) {
    "use strict";

    /* photogallery */

    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
        $(".pretty-gallery a[rel^='prettyPhoto']").prettyPhoto();
    });

    if ($('#cp_header-v1').length) {
        var stickyNavTop = $('#cp_header-v1').offset().top;
        var stickyNav = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyNavTop) {
                $('#cp_header-v1').addClass('cp_sticky');
            } else {
                $('#cp_header-v1').removeClass('cp_sticky');
            }
        }
        ;
        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        });
    }

    if ($('#cp_header-v3').length) {
        var stickyNavTop = $('#cp_header-v3').offset().top;
        var stickyNav = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyNavTop) {
                $('#cp_header-v3').addClass('cp_sticky');
            } else {
                $('#cp_header-v3').removeClass('cp_sticky');
            }
        }
        ;
        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        });
    }

    if ($('#push, #close').length) {
        $('#push, #close').on('click', function() {
            var $navigacia = $('body, #cp-slide-menu')
              , val = $navigacia.css('left') === '300px' ? '0px' : '300px';
            $navigacia.animate({
                left: val
            }, 500)
        });
    }

    // if ($('#home-slider1').length) {
    //     $('#home-slider1').owlCarousel({
    //         loop: true,
    //         dots: false,
    //         nav: true,
    //         navText: '',
    //         items: 1,
    //         autoplay: false,
    //         smartSpeed: 2000,
    //     });
    // }

    if ($('#home-slider').length) {
        $('#home-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            navText: '',
            items: 1,
            autoplay: true,
            smartSpeed: 4500,
        });
    }

    // if ($('#home-slider3').length) {
    //     $('#home-slider3').owlCarousel({
    //         loop: true,
    //         dots: false,
    //         nav: true,
    //         navText: '',
    //         items: 1,
    //         autoplay: false,
    //         smartSpeed: 2000,
    //     });
    // }

    // if ($('#home-slider4').length) {
    //     $('#home-slider4').owlCarousel({
    //         loop: true,
    //         dots: false,
    //         nav: true,
    //         navText: '',
    //         items: 1,
    //         autoplay: false,
    //         smartSpeed: 2000,
    //     });
    // }

    if ($('#cp-time-slider').length) {
        $('#cp-time-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            navText: '',
            items: 4,
            smartSpeed: 500,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1199: {
                    items: 4,
                }
            }
        });
    }

    if ($('.upevents-slider').length) {
        $('.upevents-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: '',
            items: 2,
            smartSpeed: 500,
            margin: 30,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1199: {
                    items: 2,
                }
            }
        });
    }

    if ($('#cp-team-slider').length) {
        $('#cp-team-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: '',
            items: 2,
            smartSpeed: 500,
            margin: 30,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1199: {
                    items: 2,
                }
            }
        });
    }
    
    if ($('#cp-testimonial-slider').length) {
        $('#cp-testimonial-slider').owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            navText: '',
            items: 1,
            autoplay: false,
            smartSpeed: 1500,
        });
    }
    if ($('#cp-testimonial-slider2').length) {
        $('#cp-testimonial-slider2').owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            navText: '',
            items: 1,
            autoplay: false,
            smartSpeed: 1500,
        });
    }
    if ($('#cp-blog-slider').length) {
        $('#cp-blog-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: '',
            items: 2,
            smartSpeed: 500,
            padding: 0,
            margin: 30,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 2,
                },
                1199: {
                    items: 2,
                }
            }
        });
    }
    if ($('#cp-blog-slider2').length) {
        $('#cp-blog-slider2').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: '',
            items: 1,
            smartSpeed: 500,
            padding: 0,
            margin: 30,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1199: {
                    items: 1,
                }
            }
        });
    }
    if ($('#cp-testimonial-slider').length) {
        $('#cp-testimonial-slider').owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            navText: '',
            items: 1,
            autoplay: false,
            smartSpeed: 1500,
        });
    }
    if ($('#cp-review-slider').length) {
        $('#cp-review-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: '',
            items: 1,
            autoplay: false,
            smartSpeed: 1500,
        });
    }
    if ($('#cp-product-slider1').length) {
        $('#cp-product-slider1').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: '',
            items: 3,
            smartSpeed: 500,
            padding: 0,
            margin: 30,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 2,
                },
                1199: {
                    items: 3,
                }
            }
        });
    }
    if ($('#cp-widget-slider').length) {
        $('#cp-widget-slider').owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            navText: '',
            items: 1,
            autoplay: false,
            smartSpeed: 1500,
        });
    }
    if ($('#cp_product-slider').length) {
        $('#cp_product-slider').bxSlider({
            auto: true,
            pagerCustom: '#bx-pager',
            navigation: false,
        });
    }
    if ($('#cp_product-slider2').length) {
        $('#cp_product-slider2').bxSlider({
            auto: true,
            pagerCustom: '#bx-pager2',
            navigation: false,
        });
    }
    if ($('.eventcountdown').length) {
        $(function() {
            var austDay = new Date();
            austDay = new Date(austDay.getFullYear() + 1,1 - 1,26);
            $('.eventcountdown').countdown({
                until: austDay
            });
            $('#year').text(austDay.getFullYear());
        });
    }
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }
    if ($('.cp-countdown').length) {
        $('.cp-countdown').final_countdown({
            'start': 1362139200,
            'end': 1388461320,
            'now': 1387461319
        });
    }
    if ($(".cp-gallery-masonary .isotope").length) {
        var $container = $('.cp-gallery-masonary .isotope');
        $container.imagesLoaded(function() {
            $container.isotope({
                itemSelector: '.cp-masonary-item',
                transitionDuration: '0.6s',
                masonry: {
                    columnWidth: $container.width() / 12
                },
                layoutMode: 'masonry'
            });
        });
        $(window).resize(function() {
            $container.isotope({
                masonry: {
                    columnWidth: $container.width() / 12
                }
            });
        });
    }
    if ($(".cp-blog-masonary .isotope").length) {
        var $container = $('.cp-blog-masonary .isotope');
        $container.imagesLoaded(function() {
            $container.isotope({
                itemSelector: '.cp-masonary-item',
                transitionDuration: '0.6s',
                masonry: {
                    columnWidth: $container.width() / 12
                },
                layoutMode: 'masonry'
            });
        });
        $(window).resize(function() {
            $container.isotope({
                masonry: {
                    columnWidth: $container.width() / 12
                }
            });
        });
    }
    if ($('.cp_portfolioGallery').length) {
        var $container = $('.cp_portfolioGallery');
        $container.imagesLoaded(function() {
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
        });
        $('.cp_galleryFilter a').on('click', function() {
            $('.cp_galleryFilter .current').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }
    if ($('.galleryContainer').length) {
        var $container = $('.galleryContainer');
        $container.imagesLoaded(function() {
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
        });
    }
    if ($('.galleryFilter a').length) {
        $('.galleryFilter a').on('click', function() {
            $('.galleryFilter .current').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }
    if ($('#cp-map_contact').length) {
        var map;
        var myLatLng = new google.maps.LatLng(43.8228376,11.1417166);
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            zoomControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                saturation: -50,
                lightness: 10
            }],
        }
        map = new google.maps.Map(document.getElementById('cp-map_contact'),myOptions);
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon.png'
        });
        marker.getPosition();
    }
    if ($('#cp-range-slider').length) {
        $("#cp-range-slider").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#cp-range-slider").slider("values", 0) + " - $" + $("#cp-range-slider").slider("values", 1));
    }
    ;if ($('#cp-calendar').length) {
        $('#cp-calendar').fullCalendar({
            defaultDate: '2016-05-12',
            editable: true,
            eventLimit: true,
            events: [{
                title: 'All Day Event',
                start: '2016-05-01'
            }, {
                title: 'Long Event',
                start: '2016-05-07',
                end: '2016-05-10'
            }, {
                id: 999,
                title: 'Repeating Event',
                start: '2016-05-09T16:00:00'
            }, {
                id: 999,
                title: 'Repeating Event',
                start: '2016-05-16T16:00:00'
            }, {
                title: 'Conference',
                start: '2016-05-11',
                end: '2016-05-13'
            }, {
                title: 'Meeting',
                start: '2016-05-12T10:30:00',
                end: '2016-05-12T12:30:00'
            }, {
                title: 'Lunch',
                start: '2016-05-12T12:00:00'
            }, {
                title: 'Meeting',
                start: '2016-05-12T14:30:00'
            }, {
                title: 'Happy Hour',
                start: '2016-05-12T17:30:00'
            }, {
                title: 'Dinner',
                start: '2016-05-12T20:00:00'
            }, {
                title: 'Birthday Party',
                start: '2016-05-13T07:00:00'
            }, {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2016-05-28'
            }]
        });
    }
    ;if ($('.circlestat').length) {
        $('.circlestat').circliful();
    }
    ;if ($('.datepicker').length) {
        $(".datepicker").datepicker();
    }
    ;$(document).ready(function() {
        // $('#popup-overlay-home').fadeIn(500, function() {
        //     $('#popup').show();
        //     $('#popup').css({
        //         "top": "200px",
        //         "opacity": "1",
        //         "visibility": "visible"
        //     });
        // });
        // $("#popup-close").on('click', function() {
        //     $('#popup-overlay-home').css({
        //         "display": "none",
        //         "visibility": "hidden"
        //     });
        // });
    });
});