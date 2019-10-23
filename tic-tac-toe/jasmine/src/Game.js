function Game() {
  this._player1 = new Player(name= "X");
  this._player2 = new Player(name= "O");
  this._currentTurn = this._player1
  this._board = new Array(9);

  Game.prototype.makeTurn = function(index) {
    if (this._board[index] === undefined) {
    this._board[index] = this._currentTurn._name
    this.turnChanger();
    } else {
      throw new Error("Square already occupied, try again")
    };
  };

  Game.prototype.turnChanger = function () {
    if (this._currentTurn === this._player1) {
      this._currentTurn = this._player2
    } else {
      this._currentTurn = this._player1
    };
  };

  Game.prototype.winCheck = function() {
    if (this._board[0] === this._board[1] && this._board[0] === this._board[2]) {
      return this._player1
    } else if (this._board[3] === this._board[4] && this._board[3] === this._board[5]) {
      return this._player1
    }
  };

};