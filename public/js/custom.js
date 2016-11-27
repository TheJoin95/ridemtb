jQuery(document).ready(function($) {
    "use strict";

    $('img').each(function() {
        if(!$(this).hasClass('no-replace'))
            $(this).attr('src', 'http://fakeimg.pl/600x400');
    });

    /* photogallery */

    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
        $(".pretty-gallery a[rel^='prettyPhoto']").prettyPhoto();
    });

    if ($('#header-v1').length) {
        var stickyNavTop = $('#header-v1').offset().top;
        var stickyNav = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyNavTop) {
                $('#header-v1').addClass('sticky');
            } else {
                $('#header-v1').removeClass('sticky');
            }
        }
        ;
        stickyNav();
        $(window).scroll(function() {
            stickyNav();
        });
    }

    if ($('#header-v3').length) {
        var stickyNavTop = $('#header-v3').offset().top;
        var stickyNav = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyNavTop) {
                $('#header-v3').addClass('sticky');
            } else {
                $('#header-v3').removeClass('sticky');
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
            var $navigacia = $('body, #slide-menu')
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

    if ($('#time-slider').length) {
        $('#time-slider').owlCarousel({
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

    if ($('#team-slider').length) {
        $('#team-slider').owlCarousel({
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
    
    if ($('#testimonial-slider').length) {
        $('#testimonial-slider').owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            navText: '',
            items: 1,
            autoplay: false,
            smartSpeed: 1500,
        });
    }
    if ($('#testimonial-slider2').length) {
        $('#testimonial-slider2').owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            navText: '',
            items: 1,
            autoplay: false,
            smartSpeed: 1500,
        });
    }
    if ($('#blog-slider').length) {
        $('#blog-slider').owlCarousel({
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
    if ($('#blog-slider2').length) {
        $('#blog-slider2').owlCarousel({
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
    if ($('#testimonial-slider').length) {
        $('#testimonial-slider').owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            navText: '',
            items: 1,
            autoplay: false,
            smartSpeed: 1500,
        });
    }
    if ($('#review-slider').length) {
        $('#review-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: '',
            items: 1,
            autoplay: false,
            smartSpeed: 1500,
        });
    }
    if ($('#product-slider1').length) {
        $('#product-slider1').owlCarousel({
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
    if ($('#widget-slider').length) {
        $('#widget-slider').owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            navText: '',
            items: 1,
            autoplay: false,
            smartSpeed: 1500,
        });
    }
    if ($('#product-slider').length) {
        $('#product-slider').bxSlider({
            auto: true,
            pagerCustom: '#bx-pager',
            navigation: false,
        });
    }
    if ($('#product-slider2').length) {
        $('#product-slider2').bxSlider({
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
    if ($('.countdown').length) {
        $('.countdown').final_countdown({
            'start': 1362139200,
            'end': 1388461320,
            'now': 1387461319
        });
    }
    if ($(".gallery-masonary .isotope").length) {
        var $container = $('.gallery-masonary .isotope');
        $container.imagesLoaded(function() {
            $container.isotope({
                itemSelector: '.masonary-item',
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
    if ($(".blog-masonary .isotope").length) {
        var $container = $('.blog-masonary .isotope');
        $container.imagesLoaded(function() {
            $container.isotope({
                itemSelector: '.masonary-item',
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
    if ($('.portfolioGallery').length) {
        var $container = $('.portfolioGallery');
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
    if ($('#map_contact').length) {
        var map;
        var myLatLng = new google.maps.LatLng(43.8228376,11.1417166);
        var myOptions = {
            zoom: 12,
            center: myLatLng,
            zoomControl: true,
            scrollWheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            styles: [{
                saturation: -50,
                lightness: 10
            }],
        }
        map = new google.maps.Map(document.getElementById('map_contact'),myOptions);
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            map: map,
            icon: 'images/map-icon.png'
        });
        marker.getPosition();
    }
    if ($('#range-slider').length) {
        $("#range-slider").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#range-slider").slider("values", 0) + " - $" + $("#range-slider").slider("values", 1));
    }
    ;if ($('#calendar').length) {
        $('#calendar').fullCalendar({
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