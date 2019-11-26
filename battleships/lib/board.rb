require_relative 'ship'

class Board
  attr_reader :board

  def initialize
    rows, cols = 8, 8
    @board = Array.new(rows) { Array.new(cols) }
  end

  def place_ship(ship, start_coords, end_coords)
    if start_coords.any? { |x| x > 8 } || end_coords.any? { |x| x > 8 } || start_coords.any? { |x| x < 0 } || end_coords.any? { |x| x < 0 }
      raise "coordinates not valid"
    elsif @board[start_coords[0]][start_coords[1]] != nil || @board[end_coords[0]][end_coords[1]] != nil
      raise "cannot place 2 ships in one place"
    end
    @board[start_coords[0]][start_coords[1]] = ship
    @board[end_coords[0]][end_coords[1]] = ship
  end
end