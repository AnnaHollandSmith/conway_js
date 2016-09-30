describe('Conways game of life', function() {
  it('sanity test', function() {
    expect(true).toBe(true);
  });

  describe('addCell', function() {
    it('adds a cell to the board', function() {
      var board = new Board();
      var cell = new Cell(1,1,true);
      board.addCell(cell);
      expect(board.cells.x1y1).toEqual(cell);
    });
  });
});
