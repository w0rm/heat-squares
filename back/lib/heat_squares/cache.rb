module HeatSquares::Cache
  CACHE_PATH = "#{File.dirname(__FILE__)}/../../../tmp/results.json"

  puts "XXX: CACHE_PATH: #{CACHE_PATH}"

  def self.get
    return nil if !File.exists?(CACHE_PATH)
    File.read(CACHE_PATH)
  end

  def self.refresh(data)
    puts "XXX: refreshing cache"
    File.open(CACHE_PATH, "w") { |f| f.write data }
    data
  end
end