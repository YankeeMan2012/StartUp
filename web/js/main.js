window.onload  = function () {
    AppJS.ready();
};

var AppJS = {

    ready: function () {
        AppJS.handlers();
        AppJS.initSlider();
        AppJS.pageAnimate();
    },

    handlers: function () {
        $('.hamburger').on('click', function()  { AppJS.openMenu( $(this) ); });
        $('.overlay').on('click', function()    { AppJS.closeMenu();         });
        window.onresize = function ()           { AppJS.windowResize();      };
        window.onscroll = function ()           { AppJS.windowScroll();      };
    },

    windowResize: function () {
        if (window.innerWidth > 1000) {
            AppJS.closeMenu();
        }
    },

    windowScroll: function () {
        AppJS.pageAnimate();
    },

    openMenu: function (menuBtn) {
        menuBtn.addClass('active');
        $('body').addClass('openMenu')
    },

    closeMenu: function () {
        $('.hamburger').removeClass('active');
        $('body').removeClass('openMenu');
    },

    initSlider: function () {
        new Swiper('.firstSectionSlider', {
            speed: 1000,
            prevButton: '.firstSectionSliderPrev',
            nextButton: '.firstSectionSliderNext',
            loop: true,
            pagination: '.firstSectionSliderPagination',
            paginationClickable: true
        });

        new Swiper('.commentSlider', {
            speed: 1000,
            prevButton: '.commentSliderPrev',
            nextButton: '.commentSliderNext',
            loop: true,
            pagination: '.paginationBox',
            paginationType: 'custom',
            paginationCustomRender: function (swiper, current, total) {
                return '<span class="num">' + current + '</span> from <span class="with">' + total + '</span>';
            }
        });

        new Swiper('.teamSlider', {
            speed: 1000,
            loop: true,
            pagination: '.teamSliderPagination',
            paginationClickable: true
        });
    },

    initMap: function () {
        var mapBox = $('.map');
        var center = {lat: 40.703017, lng: -73.987023};
        var markerIcon = 'img/icon/markerIcon.svg';

        var styleArray = [
            {
                featureType: "all",
                stylers: [
                    { saturation: -100 }
                ]
            },{
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [
                    { hue: "#00ffee" },
                    { saturation: 100 }
                ]
            },{
                featureType: "road.local",
                elementType: "labels",
                stylers: [
                    {visibility: 'off'}
                ]
            },{
                featureType: "poi.business",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }
        ];

        var styledMap = new google.maps.StyledMapType(styleArray, {name: "Styled Map"});

        var map = new google.maps.Map(mapBox[0], {
            center: center,
            scrollwheel: false,
            zoom: 13
        });

        var image = new google.maps.MarkerImage(
            markerIcon,
            new google.maps.Size(50, 50),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 25),
            new google.maps.Size(50, 50)
        );

        var marker = new google.maps.Marker({
            position: center,
            map: map,
            title: 'Hello World!',
            icon: image,
        });

        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
    },

    pageAnimate: function () {
        var scroll = $('body').scrollTop();
        var winH = window.innerWidth;
        var header = $('header');
        var s1 = $('.s1');
        var s2 = $('.s2');
        var s3 = $('.s3');
        var s4 = $('.s4');
        var s6 = $('.s6');
        var s8 = $('.s8');
        var s9 = $('.s9');
        var s10 = $('.s10');
        var s11 = $('.s11');
        var s12 = $('.s12');

        var s2Top = s2.position().top;
        var s3Top = s3.position().top;
        var s4Top = s4.position().top;
        var s6Top = s6.position().top;
        var s8Top = s8.position().top;
        var s9Top = s9.position().top;
        var s10Top = s10.position().top;
        var s11Top = s11.position().top;
        var s12Top = s12.position().top;

        if (scroll < 20) {
            header.removeClass('headerBack');
        }
        
        if (scroll >= 0) {
            header.add(s1).addClass('animate');
        }
        if (scroll > 20) {
            header.addClass('headerBack');
        }
        if (winH / 2 >= s2Top - scroll) {
            s2.addClass('animate');
        }
        if (winH / 2 >= s3Top - scroll) {
            s3.addClass('animate');
        }
        if (winH / 2 >= s4Top - scroll) {
            s4.addClass('animate');
        }
        if (winH / 2 >= s6Top - scroll) {
            s6.addClass('animate');
        }
        if (winH / 2 >= s8Top - scroll) {
            s8.addClass('animate');
        }
        if (winH / 2 >= s9Top - scroll) {
            s9.addClass('animate');
        }
        if (winH / 2 >= s10Top - scroll) {
            s10.addClass('animate');
        }
        if (winH / 2 >= s11Top - scroll) {
            s11.addClass('animate');
        }
        if (winH / 2 >= s12Top - scroll) {
            s12.addClass('animate');
        }
    },

};


