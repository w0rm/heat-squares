require "yaml"

module HeatSquares
  CONFIG = YAML.load(File.read("#{File.dirname(__FILE__)}/../../config.yml"))
  CONFIG["foursquare"]["client_secret"] = ENV["foursquare_client_secret"]

  if(CONFIG["foursquare"]["client_secret"].nil?)
    puts "You have to set the environment variable 'foursquare_client_secret'"
    puts "like: `export foursquare_client_secret=WDOVF1WC031SHHMM5ERNQ0EFJJAC3Z2NW1KXW0YEO3UR3KNX`"
  end
end