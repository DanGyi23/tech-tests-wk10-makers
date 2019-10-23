function Game() {
  this._board = new Array(9)
  this._player1 = new Player("X");
  this._player2 = new Player("O");
  this._currentTurn = this._player1
  this._winChecker = new WinChecker(this)


  Game.prototype.makeTurn = function (index) {
    if (this._board[index] === undefined) {
      this._board[index] = this._currentTurn._name
      if (this._winChecker.winCheck() !== undefined) {
        return this._winChecker.winCheck();
      };
      this.turnChanger();
    } else {
      return "Square already occupied, try again"
    };
  };

  Game.prototype.turnChanger = function () {
    if (this._currentTurn === this._player1) {
      this._currentTurn = this._player2
    } else {
      this._currentTurn = this._player1
    };
  };
};