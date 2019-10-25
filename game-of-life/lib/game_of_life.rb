class GameOfLife
  attr_accessor :board_array
  
  def initialize
    initial_board_config
  end
  
  def tick(array)
    array
  end

  def get_element_at(arr, index)
    index = index % arr.length;
    index = index + arr.length;
    index = index % arr.length;
    return arr[index]
  end

  def initial_board_config
    @board_array = Array.new(100, 0)
    @board_array = @board_array.map.with_index(0) { |element, index|
      index % 2 == 0 ? element = 1 : element = 0
    }
  end
  
end