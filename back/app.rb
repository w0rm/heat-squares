require "sinatra/base"
require "json"

require_relative "lib/heat_squares"

class HeatSquares::App < Sinatra::Base
  set :sessions, true

  get "/data" do
    content_type :json
    HeatSquares::Scraper.scrap.to_json
  end
end