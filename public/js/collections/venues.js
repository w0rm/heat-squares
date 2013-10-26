define( ['backbone', 'models/venue', 'underscore', 'config']
      , function (Backbone, Venue, _, config) {

  return Backbone.Collection.extend({
    model: Venue
  , url: config.dataUrl
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
