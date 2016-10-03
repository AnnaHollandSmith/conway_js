describe('Conways game of life', function() {
  it('sanity test', function() {
    expect(true).toBe(true);
  });

  var board, cell;

  beforeEach(function() {
    board = new Board();
    cell = new Cell(1,1,true);
    board.addCell(cell);
  });

  describe('addCell', function() {
    it('adds a cell to the board', function() {
      expect(board.cells.x1y1).toEqual(cell);
    });
  });

  describe('getCellAt', function() {
    it("returns the cell for the given coordinates", function() {
      expect(board.getCellAt(1,1)).toEqual(cell);
    });
  });

  describe('getAliveNeighbours', function() {
    it('returns 0 when there are no alive neighbours', function() {
      expect(board.getAliveNeighbours(cell)).toEqual(0);
    });
    it('returns 1 when there is 1 alive neighbour', function() {
      var neighbourCell = new Cell(1,2,true);
      board.addCell(neighbourCell);
      expect(board.getAliveNeighbours(cell)).toEqual(1);
    });
    it('returns 8 when there are 8 alive neighbours', function() {
      board.addCell(new Cell(0,0,true));
      board.addCell(new Cell(0,1,true));
      board.addCell(new Cell(1,0,true));
      board.addCell(new Cell(1,2,true));
      board.addCell(new Cell(2,1,true));
      board.addCell(new Cell(2,0,true));
      board.addCell(new Cell(0,2,true));
      board.addCell(new Cell(2,2,true));

      expect(board.getAliveNeighbours(cell)).toEqual(8);
    });
    it('returns 1 when there are 7 dead neighbours', function() {
      board.addCell(new Cell(0,0,true));
      board.addCell(new Cell(0,1,false));
      board.addCell(new Cell(1,0,false));
      board.addCell(new Cell(1,2,false));
      board.addCell(new Cell(2,1,false));
      board.addCell(new Cell(2,0,false));
      board.addCell(new Cell(0,2,false));
      board.addCell(new Cell(2,2,false));

    expect(board.getAliveNeighbours(cell)).toEqual(1);
    });
  });
});
