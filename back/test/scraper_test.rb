require_relative "test_helper"

class ScraperTest < MiniTest::Unit::TestCase
  def test_scrap
    result = HeatSquares::Scraper.scrap

    puts result

    File.open("#{File.dirname(__FILE__)}/fixtures/scraping_results.json", "w") { |f| f.write JSON.pretty_generate(result) }
  end
end