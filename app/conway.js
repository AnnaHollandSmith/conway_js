var Board = function() {
  this.cells = {};
};

var Cell = function(x,y) {
  this.x = x;
  this.y = y;
};

Board.prototype = {
  addCell: function(cell) {
    this.cells[getCellRepresentation(cell.x,cell.y)] = cell;
  },
  getCellAt: function(x,y) {
    return this.cells[getCellRepresentation(x,y)];
  },
  getAliveNeighbours: function(cell) {
    return 0;
  }
};

function getCellRepresentation(x,y) {
  return "x" + x + "y" + y;
}
