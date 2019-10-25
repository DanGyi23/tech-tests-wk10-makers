class GameOfLife
  attr_reader :board_array
  
  def initialize
    @board_array = Array.new(100, 0)
  end
  
  def tick
    []
  end

  def get_element_at(arr, index)
    index = index % arr.length;
    index = index + arr.length;
    index = index % arr.length;
    return arr[index]
  end
end