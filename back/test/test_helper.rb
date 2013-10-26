require "minitest/unit"
require "minitest/autorun"
require "mocha/setup"

require_relative "../lib/heat_squares"

class MiniTest::Unit::TestCase
  FIXTURES = File.expand_path("#{File.dirname(__FILE__)}/fixtures")
end

