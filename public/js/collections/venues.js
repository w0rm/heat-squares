define( ['backbone', 'models/venue', 'underscore']
      , function (Backbone, Venue, _) {

  return Backbone.Collection.extend({
    model: Venue
  , url: '/test.json'
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
