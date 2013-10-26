define([ 'async!http://maps.google.com/maps/api/js?v=3.exp&sensor=false&libraries=visualization' ]
       , function () {

  return {
    dataUrl: '/data'
  , heatGradient: [
      'rgba(255,255,255,0)'
    , '#5d0200'
    , '#873900'
    , '#be6113'
    , '#c88729'
    , '#cd942d'
    , '#f2a74c'
    , '#d0ad4f'
    , '#ffeeaa'
    ]
  , mapOptions: {
      zoom: 13
    , center: new google.maps.LatLng(52.51831, 13.404985)
    , panControl: false
    , zoomControl: true
    , zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE
      , position: google.maps.ControlPosition.MIDDLE_LEFT
      }
    , mapTypeControl: false
    , scaleControl: false
    , streetViewControl: false
    , overviewMapControl: false
    , styles: [
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "road",
        "stylers": [
          { "saturation": 1 },
          { "hue": "#0077ff" },
          { "lightness": 100 }
        ]
      },{
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
          { "visibility": "on" },
          { "color": "#c8c8c8" }
        ]
      },{
        "featureType": "landscape.natural",
        "stylers": [
          { "color": "#c8c8c8" }
        ]
      },{
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#c8c8c8" }
        ]
      },{
        "elementType": "labels",
        "stylers": [
          { "saturation": -100 }
        ]
      },{
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#8a8abe" }
        ]
      },{
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          { "color": "#000000" },
          { "weight": 0.1 }
        ]
      },{
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
          { "weight": 2 },
          { "color": "#ffff5f" }
        ]
      },{
      }
    ]
    }
  }
})
