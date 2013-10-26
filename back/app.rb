require "sinatra/base"
require "json"

require_relative "lib/heat_squares"

class HeatSquares::App < Sinatra::Base
  set :sessions, true
  set :public_folder, "public"

  get "/data" do
    content_type :json

    result = HeatSquares::Cache.get

    redirect "/cache" if result.nil?

    result
  end

  get "/cache" do
    result = HeatSquares::Scraper.run.to_json
    HeatSquares::Cache.refresh(result)

    redirect "/data"
  end
end