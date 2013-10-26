module HeatSquares::FoursquareWrapper
  def self.search(client, lat, lng)
    http = Curl.get("https://api.foursquare.com/v2/venues/search?ll=#{lat},#{lng}&radius=1250&query=coffee&oauth_token=#{client.oauth_token}")
    http.body_str
  end
end