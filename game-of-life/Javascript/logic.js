GameOfLife = function() {
    this._board_array = []
    for (let i = 0; i < 1000; i++ ) {
      this._board_array.push(Math.round(Math.random()));
    }
  
    
    
    GameOfLife.prototype.tick = function() {
      this._board_array.forEach(function (element, index) {
        if (element == 1 && (this.live_neighbour_total(index) == 2 || this.live_neighbour_total(index) == 3)) {
          element = 1
        } else if (element == 1 && this.live_neighbour_total(index) < 2) {
          element = 0
        } else if (element == 1 && this.live_neighbour_total(index) > 3) {
          element = 0
        } else if (element == 0 && this.live_neighbour_total(index) == 3) {
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