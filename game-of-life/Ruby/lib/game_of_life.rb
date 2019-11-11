class GameOfLife
  attr_accessor :board_array
  
  def initialize(array= Array.new(1000, 0))
    @board_array = array
  end
  
  def tick
    @board_array = @board_array.map.with_index(0) { |element, index|
    if element == 1 && (live_neighbour_total(index) == 2 || live_neighbour_total(index) == 3)
      element = 1
    elsif element == 1 && live_neighbour_total(index) < 2
      element = 0
    elsif element == 1 && live_neighbour_total(index) > 3
      element = 0
    elsif element == 0 && live_neighbour_total(index) == 3
      element = 1
    end
    }
  end

  def get_element_at(index)
    index = index % @board_array.length;
    index = index + @board_array.length;
    index = index % @board_array.length;
    return @board_array[index]
  end

  def live_neighbour_total(current_index)
    [1,-1,100,-100,99,-99,101,-101].map { |x| 
    x = get_element_at(current_index + x)
    }.reduce(:+)
  end

end