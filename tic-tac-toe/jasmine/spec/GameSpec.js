describe("Game", function() {
  
  beforeEach(function(){
    game = new Game();
  });

  playGame = function(turns_array) {
    turns_array.forEach(function(element) {
      game.makeTurn(element);
    });
  }

  describe("Initiation", function() {
    it("Has two players, X and O, and an array, length 9", function() {
      expect(game._player1._name).toEqual("X")
      expect(game._player2._name).toEqual("O")
      expect(game._board.length).toEqual(9)
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
});