jQuery(document).ready(function($) {
    "use strict";
    google.maps.event.addDomListener(window, 'load', init);
    function init() {
        var mapOptions = {
            zoom: 14,
            center: new google.maps.LatLng(43.8228376,11.1417166),
            scrollwheel: false,
            styles: [{
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "true"
                }]
            }, {
                "featureType": "transit",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "true"
                }]
            }, {
                "stylers": [{
                    "hue": "#ffcf00"
                }, {
                    "saturation": -40
                }, {
                    "gamma": 1.15
                }, {
                    "lightness": 5
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "lightness": 24
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "lightness": 57
                }]
            }]
        };
        var mapElement = document.getElementById('map_v1');
        var map = new google.maps.Map(mapElement,mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(43.8228376,11.1417166),
            map: map,
            title: 'Ciclissimo MTB'
        });
    }
});
