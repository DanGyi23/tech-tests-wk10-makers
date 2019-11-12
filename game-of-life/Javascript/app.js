$(document).ready(function () {
  game = new GameOfLife;
  

  insertBlackSquares = function(array) {
    array.forEach(function(element, index) {
      if (element === 1) {
        $(`#${index}`).css("background-color", "black")
      } else if (element === 0) {
        $(`#${index}`).css("background-color", "white")
      };
    });
  };

  insertBlackSquares(game._board_array)


  for (let k = 0; k < 100; k++) {
    let $row_container = $("<tr/>")
  for (let i = 0; i < 100; i++) {
    
    $individualcell = $("<td/>", {
      id: `${(k * 100) + i}`, style: 'border: 1px solid black; padding: 8px' })
    $row_container.append($individualcell).appendTo('#entire_board')
  };
};

$(document).click(function () {
  game.tick();
  // console.log(game._board_array)
  insertBlackSquares(game._board_array)
  });
});