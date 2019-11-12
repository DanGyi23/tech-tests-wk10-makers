GameOfLife = function() {
    var board_array = []
    this._board_array = board_array
    for (let i = 0; i < 10000; i++ ) {
      board_array.push(Math.round(Math.random()));
    }
    
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
      index = index % board_array.length;
      index = index + board_array.length;
      index = index % board_array.length;

      return index
    };

    GameOfLife.prototype.live_neighbour_total = function(index) {
      referential_array = [1, -1, 100, -100, 99, -99, 101, -101]
      
      values_array = referential_array.map(function(element, index) {
        element = GameOfLife.prototype.getElementAt((element + index))
        return element
      });
      return values_array
    };

};