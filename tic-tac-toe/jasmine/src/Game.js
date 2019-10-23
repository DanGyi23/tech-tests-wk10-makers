function Game() {
  this._player1 = new Player(name= "X");
  this._player2 = new Player(name= "O");
  this._currentTurn = this._player1
  this._board = new Array(9);

  Game.prototype.turnChanger = function() {
    if (this._currentTurn === this._player1) {
      this._currentTurn = this._player2
    } else {
      this._currentTurn = this  ._player1
    }
  }
}