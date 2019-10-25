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

  def live_neighbour_counter(arr, current_index)
    get_element_at(@board_array, current_index + 1) +
    get_element_at(@board_array, current_index - 1) +
    get_element_at(@board_array, current_index + 10) +
    get_element_at(@board_array, current_index - 10) +
    get_element_at(@board_array, current_index + 9) +
    get_element_at(@board_array, current_index - 9) +
    get_element_at(@board_array, current_index + 11) +
    get_element_at(@board_array, current_index - 11)
  end


  
end