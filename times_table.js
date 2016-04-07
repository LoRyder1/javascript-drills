
var timesTable = function(rows) {
  var table = ""
  for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= rows; j++) {
      table = table.concat(i * j).concat(" ");
    }
    table = table.concat("\n");
  }
  // console.log(table);
  return table;
};

