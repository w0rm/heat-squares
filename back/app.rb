require "sinatra/base"
require "json"

require_relative "lib/heat_squares"

class HeatSquares::App < Sinatra::Base
  set :sessions, true
  set :public_folder, "public"

  get "/data" do
    content_type :json
    HeatSquares::Scraper.run.to_json
  end
end