define( ['backbone', 'models/venue', 'underscore', 'config']
      , function (Backbone, Venue, _, config) {

  return Backbone.Collection.extend({
    model: Venue
  , url: config.dataUrl
  , parse: function (data) {
      return data.spots
    }
  , getPoints: function () {
      var points = []
      this.each(function (point) {
        _.each(point.getPoints(), function (p) {
          points.push(p)
        })
      })
      return points
    }
  })

})
