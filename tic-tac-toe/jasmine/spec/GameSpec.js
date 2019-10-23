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
    })
  });
});