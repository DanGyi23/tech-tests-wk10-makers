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

  Game.prototype.winCheck = function() {
    if 
    (this.arraySlicer(0, 3) === PLAYER_1_WIN ||
     this.arraySlicer(3, 6) === PLAYER_1_WIN || 
     this.arraySlicer(6, 9) === PLAYER_1_WIN) {
      return this._player1
    } else if 
    (this.arraySlicer(0, 3) === PLAYER_2_WIN || 
    this.arraySlicer(3, 6) === PLAYER_2_WIN || 
    this.arraySlicer(6, 9) === PLAYER_2_WIN) {
      return this._player2
    };
  };

  Game.prototype.arraySlicer = function(start,finish) {
    return this._board.slice(start,finish).join('')
  };

};