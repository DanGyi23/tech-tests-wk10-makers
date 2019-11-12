GameOfLife = function() {
    var board_array = []
    this._board_array = board_array
    for (let i = 0; i < 10000; i++ ) {
      board_array.push(Math.round(Math.random()));
    }
    console.log(this._board_array)
  
    
    
    GameOfLife.prototype.tick = function() {
      board_array.forEach(function (element, index) {
        if (element == 1 && (GameOfLife.prototype.live_neighbour_total(index) == 2 || GameOfLife.prototype.live_neighbour_total(index) == 3)) {
          element = 1
        } else if (element == 1 && GameOfLife.prototype.live_neighbour_total(index) < 2) {
          element = 0
        } else if (element == 1 && GameOfLife.prototype.live_neighbour_total(index) > 3) {
          element = 0
        } else if (element == 0 && GameOfLife.prototype.live_neighbour_total(index) == 3) {
          element = 1
        };

      });
      return board_array
    };

    GameOfLife.prototype.getElementAt = function(index) {
      corrected_index = board_array[(index % board_array.length)]
      return corrected_index
    };

    GameOfLife.prototype.live_neighbour_total = function(index) {
      referential_array = [1, -1, 100, -100, 99, -99, 101, -101]
      
      referential_array.forEach(function(x) {
        x = GameOfLife.prototype.getElementAt((index + x))
      });
      return referential_array
    };

};