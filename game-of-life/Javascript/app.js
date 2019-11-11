$(document).ready(function () {

  for (let k = 0; k < 100; k++) {
    let $row_container = $("<tr/>", { id: `${k}` })
  for (let i = 0; i < 100; i++) {
    
    $individualcell = $("<td/>", {
      id: `${(k * 100) + i}`, style: 'border: 3px solid black; padding: 8px' })
    $row_container.append($individualcell).appendTo('#entire_board')
  };
};
});