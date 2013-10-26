require_relative "test_helper"

class ConfigTest < MiniTest::Unit::TestCase
  def test_value
    assert_equal("52.51831", HeatSquares::CONFIG["center_coordinates"]["lat"])
  end

  def test_env_value
    assert(!HeatSquares::CONFIG["foursquare"]["client_secret"].nil?)
  end
end