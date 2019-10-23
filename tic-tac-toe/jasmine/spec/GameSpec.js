describe("Game", function() {
  var game;
  beforeEach(function(){
    game = new Game();
  });

  playGame = function(turns_array) {
    turns_array.forEach(function(element) {
      game.makeTurn(element);
    });
  }

  describe("Players", function() {
    it("Has two players, X and O", function() {
      expect(game._player1._name).toEqual("X")
      expect(game._player2._name).toEqual("O")
    });
  });

  describe("#turnChanger", function() {
    it("Changes the current turn (this._currentTurn) to the opposite player object", function() {
      expect(game._currentTurn).toEqual(game._player1)
      game.turnChanger();
      expect(game._currentTurn).toEqual(game._player2)
    });

    it("Changes the current turn back after 1 turn each", function() {
      expect(game._currentTurn).toEqual(game._player1)
      game.turnChanger();
      expect(game._currentTurn).toEqual(game._player2)
      game.turnChanger();
      expect(game._currentTurn).toEqual(game._player1)
    });
  });

  describe("#storeTurn", function() {
    it("Stores the first players turn in the board array", function() {
      expect(game._board[0]).toEqual(undefined)
      game.makeTurn(0);
      expect(game._board[0]).toEqual("X");
    });

    it("Stores both the first and second players turns in the board array", function() {
      expect(game._board[0]).toEqual(undefined)
      game.makeTurn(0);
      expect(game._board[0]).toEqual("X");
      game.makeTurn(4);
      expect(game._board[0]).toEqual("X");
      expect(game._board[4]).toEqual("O");
    });

    it("Does not allow you to make turn at already occupied index", function() {
      expect(game._board[0]).toEqual(undefined)
      game.makeTurn(0);
      expect(game._board[0]).toEqual("X");
      expect( function() {game.makeTurn(0)} ).toThrow(new Error("Square already occupied, try again"));
    });
  });

  describe("#winCheck for ROWS", function() {
    it('P1 wins when top row is all X', function() {
      playGame([0,3,1,4,2])
      expect(game.winCheck()).toEqual(game._player1)
    });

    it('P1 wins when middle row is all X', function () {
      playGame([3, 1, 4, 2, 5])
      expect(game.winCheck()).toEqual(game._player1)
    });

    it('P1 wins when bottom row is all X', function () {
      playGame([6, 1, 7, 2, 8])
      expect(game.winCheck()).toEqual(game._player1)
    });

    it('P2 wins when top row is all O', function () {
      playGame([6, 0, 7, 1, 4, 2])
      expect(game.winCheck()).toEqual(game._player2)
    });

    it('P2 wins when middle row is all O', function () {
      playGame([6, 3, 7, 4, 1, 5])
      expect(game.winCheck()).toEqual(game._player2)
    });

    it('P2 wins when bottom row is all O', function () {
      playGame([4, 6, 5, 7, 1, 8])
      expect(game.winCheck()).toEqual(game._player2)
    });
  });

  describe("#winCheck for COLUMNS", function () {
    it('P1 wins when first column is all X', function () {
      playGame([0, 4, 3, 5, 6])
      expect(game.winCheck()).toEqual(game._player1)
    });
  });
});