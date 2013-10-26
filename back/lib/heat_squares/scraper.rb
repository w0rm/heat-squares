require "foursquare2"

module HeatSquares::Scraper

  def self.run
    results = HeatSquares::Scraper.scanner

    {
      :amount => results.count,
      :spots => results
    }
  end

  def self.venues(lat, lng, radius)
    puts "XXX: searching venues in: #{lat}, #{lng} (#{radius})"
    results =
      HeatSquares::Scraper.client.search_venues_by_tip(
        :ll => "#{lat},#{lng}",
        :query => "coffee",
        :radius => radius
      )

    results.map do |venue|
      {
        :id => venue.id,
        :lat => venue.location.lat,
        :lng => venue.location.lng,
        :amount => venue.herenow
      }
    end
  end

  def self.scanner
    left_top = HeatSquares::CONFIG["scanner"]["area"]["left_top"]
    right_bottom = HeatSquares::CONFIG["scanner"]["area"]["right_bottom"]
    steps = HeatSquares::CONFIG["scanner"]["steps"]
    radius = HeatSquares::CONFIG["scanner"]["radius"]

    step_coordinate = {}
    step_coordinate["lat"] = (left_top["lat"] - right_bottom["lat"]) / steps
    step_coordinate["lng"] = (right_bottom["lng"] - left_top["lng"]) / steps

    venues = []

    steps.times.map do |index_lat|
      actual_lat = left_top["lat"] - (step_coordinate["lat"] * index_lat) - (step_coordinate["lat"] / 2)

      steps.times.map do |index_lng|
        actual_lng = left_top["lng"] + (step_coordinate["lng"] * index_lng) + (step_coordinate["lng"] / 2)
        venues.concat HeatSquares::Scraper.venues(actual_lat, actual_lng, radius)
      end
    end

    venues
  end

  def self.client
    @client ||=
      Foursquare2::Client.new(
        :client_id => HeatSquares::CONFIG["foursquare"]["client_id"],
        :client_secret => HeatSquares::CONFIG["foursquare"]["client_secret"]
      )
  end
end