var Board = function () {
  this.cells = {};
};

Board.prototype = {
  addCell: function(cell){
    this.cells[getCellRepresentation(cell.x, cell.y)] = cell;
  },
  getCellAt: function(x, y){
      return this.cells[getCellRepresentation(x, y)];
    },
  getAliveNeighbours: function(cell){
    var x = cell.x;
     var y = cell.y;
     var aliveCells = 0;

     for (var i = -1; i < 2; i++) {
       for(var j = -1; j < 2; j++) {
         if(i === 0 && i === j) {
           continue;
         }
         var currentCell = this.getCellAt(x + i, y + j);

         if(currentCell && currentCell.isAlive()) {
           aliveCells++;
         }
       }
     }
     return aliveCells;
   },
   calculateNextState: function(cell) {
     var tempCell = new Cell(cell.x, cell.y, cell.alive);
     var livingNeighbours = this.getAliveNeighbours(cell);
     if(livingNeighbours === 2 || livingNeighbours === 3) {
       tempCell.alive = true;
     } else {
       tempCell.alive = false;
     }
     return tempCell;
    }
};

var Cell = function (x, y, alive) {
  this.x = x;
  this.y = y;
  this.alive = alive;
};

Cell.prototype = {
  isAlive: function() {
    return this.alive;
  }
};

function getCellRepresentation (x, y){
 return "x" + x + "y" + y;
}
