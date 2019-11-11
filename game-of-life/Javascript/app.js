$(document).ready(function () {
  game = new GameOfLife;
  insertBlackSquares(game._board_array)

  insertBlackSquares = function(array) {
    array.forEach(function(element, index) {
      if (element == 1) {
        $(`${index}`).css("background-color", "black")
      } elsif (element == 0); {
        $(`${index}`).css("background-color", "white")
      };
    });
  };


  for (let k = 0; k < 100; k++) {
    let $row_container = $("<tr/>", { id: `${k}` })
  for (let i = 0; i < 100; i++) {
    
    $individualcell = $("<td/>", {
      id: `${(k * 100) + i}`, style: 'border: 3px solid black; padding: 8px' })
    $row_container.append($individualcell).appendTo('#entire_board')
  };
};

$(document).click(function () {
  game.tick();
  insertBlackSquares(game._board_array)
  });
});