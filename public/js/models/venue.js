define([ 'backbone'
       , 'async!http://maps.google.com/maps/api/js?v=3.exp&sensor=false&libraries=visualization'
       ], function (Backbone) {


  return Backbone.Model.extend({

    getPoints: function () {
      var points = []
        , i
        , len = this.get('amount') || 1
      for (i = 0; i <= len; i++) {
        points.push(new google.maps.LatLng(this.get('lat'), this.get('lng')))
      }
      return points
    }

  })

})
