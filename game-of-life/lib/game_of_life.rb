class GameOfLife
  attr_accessor :board_array
  
  def initialize(array= Array.new(100, 0))
    @board_array = array
    # initial_board_config
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


  
end