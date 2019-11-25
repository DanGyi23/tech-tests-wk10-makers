class Board
  attr_reader :board

  def initialize
    rows, cols = 8, 8
    @board = Array.new(rows) { Array.new(cols) }
  end
end