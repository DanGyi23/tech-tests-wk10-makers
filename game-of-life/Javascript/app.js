$(document).ready(function () {

  for (let k = 0; k < 11; k++) {
    let $row_container = $("<tr/>", { id: `${k}` })
  for (let i = 0; i < 10; i++) {
    
    $individualcell = $("<td/>", { id: `${(k * 10) + i}` })
    $row_container.append($individualcell).appendTo('#entire_board')
  };
};
});