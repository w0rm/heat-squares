require "foursquare2"

module HeatSquares::Scraper
  def self.scrap
    lat = HeatSquares::CONFIG["center_coordinates"]["lat"]
    lng = HeatSquares::CONFIG["center_coordinates"]["lng"]

    client = Foursquare2::Client.new(:client_id => HeatSquares::CONFIG["foursquare"]["client_id"], :client_secret => HeatSquares::CONFIG["foursquare"]["client_secret"])
    venues = client.search_venues_by_tip(:ll => "#{lat},#{lng}", :query => "coffee")

    aggregation =
      venues.map do |venue|
        {
          :lat => venue.location.lat,
          :lng => venue.location.lng,
          :amount => venue.herenow
        }
      end

    {
      :spots => aggregation
    }
  end
end