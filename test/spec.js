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
});
