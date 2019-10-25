class GameOfLife
  attr_accessor :board_array
  
  def initialize(array= Array.new(100, 0))
    @board_array = array
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

  def live_neighbour_total(arr, current_index)
    [1,-1,10,-10,9,-9,11,-11].map { |x| 
    x = get_element_at(@board_array, current_index + x)
    }.reduce(:+)
  end

end