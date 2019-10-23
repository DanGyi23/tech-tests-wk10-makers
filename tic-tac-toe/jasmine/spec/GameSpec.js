describe("Game", function() {
  var game;
  beforeEach(function(){
    game = new Game();
  });

  describe("Players", function() {
    it("Has two players, X and O", function() {
      expect(game._player1.name).toEqual("X")
      expect(game._player2.name).toEqual("O")
    });
  });
});