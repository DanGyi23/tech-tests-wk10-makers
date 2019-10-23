describe("WinCheck", function () {

  beforeEach(function () {
    game = new Game()
    check = new WinChecker(game);
  });

  playGame = function (turns_array) {
    turns_array.forEach(function (element) {
      game.makeTurn(element);
    });
  }
  describe("#winCheck for ROWS", function () {
    it('P1 wins when top row is all X', function () {
      playGame([0, 3, 1, 4, 2])
      expect(check.winCheck()).toEqual(game._player1)
    });

    it('P1 wins when middle row is all X', function () {
      playGame([3, 1, 4, 2, 5])
      expect(check.winCheck()).toEqual(game._player1)
    });

    it('P1 wins when bottom row is all X', function () {
      playGame([6, 1, 7, 2, 8])
      expect(check.winCheck()).toEqual(game._player1)
    });

    it('P2 wins when top row is all O', function () {
      playGame([6, 0, 7, 1, 4, 2])
      expect(check.winCheck()).toEqual(game._player2)
    });

    it('P2 wins when middle row is all O', function () {
      playGame([6, 3, 7, 4, 1, 5])
      expect(check.winCheck()).toEqual(game._player2)
    });

    it('P2 wins when bottom row is all O', function () {
      playGame([4, 6, 5, 7, 1, 8])
      expect(check.winCheck()).toEqual(game._player2)
    });
  });

  describe("#winCheck for COLUMNS", function () {
    it('P1 wins when first column is all X', function () {
      playGame([0, 4, 3, 5, 6])
      expect(check.winCheck()).toEqual(game._player1)
    });

    it('P1 wins when second column is all X', function () {
      playGame([1, 3, 4, 2, 7])
      expect(check.winCheck()).toEqual(game._player1)
    });

    it('P1 wins when third column is all X', function () {
      playGame([2, 3, 5, 1, 8])
      expect(check.winCheck()).toEqual(game._player1)
    });

    it('P2 wins when first column is all O', function () {
      playGame([2, 3, 5, 6, 4, 0])
      expect(check.winCheck()).toEqual(game._player2)
    });

    it('P2 wins when second column is all O', function () {
      playGame([2, 1, 5, 4, 6, 7])
      expect(check.winCheck()).toEqual(game._player2)
    });

    it('P2 wins when third column is all O', function () {
      playGame([3, 2, 4, 5, 6, 8])
      expect(check.winCheck()).toEqual(game._player2)
    });
  });

  describe("#winCheck for DIAGONALS", function () {
    it('P1 wins when top left to bottom right is all X', function () {
      playGame([0, 3, 4, 5, 8])
      expect(check.winCheck()).toEqual(game._player1)
    });

    it('P1 wins when top right to bottom left is all X', function () {
      playGame([2, 3, 4, 5, 6])
      expect(check.winCheck()).toEqual(game._player1)
    });

    it('P2 wins when top right to bottom left is all 0', function () {
      playGame([1, 0, 3, 4, 7, 8])
      expect(check.winCheck()).toEqual(game._player2)
    });

    it('P2 wins when top left to bottom right is all 0', function () {
      playGame([1, 2, 3, 4, 7, 6])
      expect(check.winCheck()).toEqual(game._player2)
    });
  });

  describe("#winCheck for DRAW", function () {
    it('Draw when no winner but all squares filled', function () {
      playGame([0, 1, 4, 2, 5, 3, 6, 8, 7])
      expect(check.winCheck()).toEqual("DRAW!")
    });
  });
});