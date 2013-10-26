require.config({

  paths: {
    backbone: 'vendor/backbone'
  , jquery: 'vendor/jquery'
  , underscore: 'vendor/underscore'
  , goog: 'vendor/goog'
  , propertyParser: 'vendor/propertyParser'
  , async: 'vendor/async'
  , gmaps: 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=visualization'
  }

, shim: {
    underscore: {
      exports: '_'
    }
  , gmaps: {
      exports: 'google.maps'
    }
  , backbone: {
      deps: ['jquery', 'underscore']
    , exports: 'Backbone'
    }
  }

})


require(['collections/venues', 'views/map'], function (Venues, MapView) {
  var venues = new Venues
    , map = new MapView({ el: '#map', collection: venues})
  map.render()
})

