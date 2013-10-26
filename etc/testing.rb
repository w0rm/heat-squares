require "#{File.dirname(__FILE__)}/back/lib/heat_squares"
puts "XXX: #{ENV["foursquare_client_secret"]}"
results =
      HeatSquares::Scraper.client.search_venues(
        :ll => "52.530008,13.382708",
        :query => "coffee",
        :radius => 1000
      )

results HeatSquares::Scraper.scanner