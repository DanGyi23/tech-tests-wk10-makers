GameOfLife = function() {
    this._board_array = new Array(1000)
    
    
    GameOfLife.prototype.tick = function() {
      this._board_array.forEach(function (element, index) {
        if (element == 1 && (this.live_neighbour_total(index) == 2 || this.live_neighbour_total(index) == 3)) {
          element = 1
        } elsif (element == 1 && this.live_neighbour_total(index) < 2); {
          element = 0
        } elsif (element == 1 && this.live_neighbour_total(index) > 3); {
          element = 0
        } elsif (element == 0 && lthis.ive_neighbour_total(index) == 3); {
          element = 1
        };

      });
      return this._board_array
    };

    GameOfLife.prototype.getElementAt = function(index) {
      corrected_index = this._board_array[(index % this._board_array.length)]
      return corrected_index
    };

    GameOfLife.prototype.live_neighbour_total = function(index) {
      referential_array = [1, -1, 100, -100, 99, -99, 101, -101]
      
      referential_array.forEach(function(x) {
          x = get_element_at((index + x))
      });
      return referential_array
    };

};



// def live_neighbour_total(current_index)
// [1, -1, 100, -100, 99, -99, 101, -101].map { | x |
//   x = get_element_at(current_index + x)
// }.reduce(: +)
// end

// end