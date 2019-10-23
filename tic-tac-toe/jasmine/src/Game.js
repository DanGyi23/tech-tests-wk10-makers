function Game() {
  this._player1 = new Player(name= "X");
  this._player2 = new Player(name= "O");
  const PLAYER_1_WIN = "XXX"
  const PLAYER_2_WIN = "OOO"
  this._currentTurn = this._player1
  this._board = new Array(9)


  Game.prototype.makeTurn = function(index) {
    if (this._board[index] == undefined) {
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

  Game.prototype.winCheck = function () {
    return this.rowWinCheck();
  };

  Game.prototype.arraySelector = function(pos1,pos2,pos3) {
    return ([this._board[pos1], this._board[pos2],this._board[pos3]]).join('')
  };

  Game.prototype.rowWinCheck = function() {
    if
      (this.arraySelector(0,1,2) === PLAYER_1_WIN ||
      this.arraySelector(3,4,5) === PLAYER_1_WIN ||
      this.arraySelector(6,7,8) === PLAYER_1_WIN) {
      return this._player1
    } else if
      (this.arraySelector(0,1,2) === PLAYER_2_WIN ||
      this.arraySelector(3,4,5) === PLAYER_2_WIN ||
      this.arraySelector(6,7,8) === PLAYER_2_WIN) {
      return this._player2
    }
  }

};