# config.ru
$: << File.expand_path(File.dirname(__FILE__))

require "back/app"
run HeatSquares::App


