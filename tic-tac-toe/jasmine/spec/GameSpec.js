describe("Game", function() {
  var game;
  beforeEach(function(){
    game = new Game();
  });

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
      game.makeTurn(0);
      expect(game._board[0]).toEqual("X");
    });
  });
});