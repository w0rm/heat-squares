require "yaml"

module HeatSquares
  CONFIG = YAML.load(File.read("#{File.dirname(__FILE__)}/../../config.yml"))
  CONFIG["foursquare"]["client_secret"] = ENV["foursquare_client_secret"]
end