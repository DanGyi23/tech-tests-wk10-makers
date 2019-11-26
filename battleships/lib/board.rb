require_relative 'ship'

class Board
  attr_reader :board

  def initialize
    rows, cols = 8, 8
    @board = Array.new(rows) { Array.new(cols) }
  end

  def place_ship(ship, start_coords, end_coords)
    row_range = []
    col_range = []
    if start_coords.any? { |x| x > 8 } || end_coords.any? { |x| x > 8 } || start_coords.any? { |x| x < 0 } || end_coords.any? { |x| x < 0 }
      raise "coordinates not valid"
    elsif @board[start_coords[0]][start_coords[1]] != nil || @board[end_coords[0]][end_coords[1]] != nil
      raise "cannot place 2 ships in one place"
    end
    if start_coords[0] < end_coords[0]
      row_range = (start_coords[0]..end_coords[0]).to_a
    elsif start_coords[0] > end_coords[0]
      row_range = start_coords[0].downto(end_coords[0]).to_a
    else
      row_range = Array.new(ship.ship_length, start_coords[0])
    end

    if start_coords[1] < end_coords[1]
      col_range = (start_coords[1]..end_coords[1]).to_a
    elsif start_coords[1] > end_coords[1]
      col_range = start_coords[1].downto(end_coords[1]).to_a
    else
      col_range = Array.new(ship.ship_length, start_coords[1])
    end

    placed_ship_coordinates = row_range.zip(col_range)
    placed_ship_coordinates.each { |x,y| @board[x][y] = ship }

  end
end