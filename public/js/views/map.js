define([ 'backbone'
       , 'underscore'
       , 'async!http://maps.google.com/maps/api/js?v=3.exp&sensor=false&libraries=visualization'
       ], function (Backbone, _) {

  var mapOptions = {
        zoom: 13
      , center: new google.maps.LatLng(52.51831, 13.404985)
      , mapTypeId: google.maps.MapTypeId.SATELLITE
      }


  return Backbone.View.extend({

    initialize: function () {
      this.listenTo(this.collection, 'reset', this.addMap)
      this.collection.fetch({success: _.bind(this.addMap, this)})
    }

  , render: function () {
      this.map = new google.maps.Map(this.el, mapOptions)
      return this
    }

  , addMap: function () {
      this.heatPointArray = new google.maps.MVCArray(this.collection.getPoints())
      this.heatmap = new google.maps.visualization.HeatmapLayer({data: this.heatPointArray})
      this.heatmap.setOptions({radius: 100});
      this.heatmap.setOptions({opacity: 0.6});
      this.heatmap.setMap(this.map)
    }

  })


})
