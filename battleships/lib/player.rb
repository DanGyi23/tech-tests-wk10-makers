require_relative 'ship'

class Player
  attr_reader :ships
  def initialize(name)
    @name = name
    @ships = [Ship.new(6), Ship.new(5), Ship.new(4), Ship.new(3), Ship.new(2)]
  end
end