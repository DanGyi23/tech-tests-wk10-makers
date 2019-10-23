function WinChecker(game) {
  const PLAYER_1_WIN = "XXX"
  const PLAYER_2_WIN = "OOO"
  
  WinChecker.prototype.winCheck = function () {
    let row = this.rowWinCheck();
    let column = this.columnWinCheck();
    let diagonal = this.diagonalWinCheck();
    if (row !== undefined) {
      return row
    } else if (column !== undefined) {
      return column
    } else if (diagonal !== undefined) {
      return diagonal
    } else if (!game._board.includes(undefined)) {
      return "DRAW!"
    }
  };

  WinChecker.prototype.arraySelector = function(pos1,pos2,pos3) {
    return ([game._board[pos1], game._board[pos2],game._board[pos3]]).join('')
  };

  WinChecker.prototype.rowWinCheck = function () {
    if
      (this.arraySelector(0,1,2) === PLAYER_1_WIN ||
      this.arraySelector(3,4,5) === PLAYER_1_WIN ||
      this.arraySelector(6,7,8) === PLAYER_1_WIN) {
      return game._player1
    } else if
      (this.arraySelector(0,1,2) === PLAYER_2_WIN ||
      this.arraySelector(3,4,5) === PLAYER_2_WIN ||
      this.arraySelector(6,7,8) === PLAYER_2_WIN) {
      return game._player2
    }
  }


  WinChecker.prototype.columnWinCheck = function () {
    if
      (this.arraySelector(0, 3, 6) === PLAYER_1_WIN ||
      this.arraySelector(1, 4, 7) === PLAYER_1_WIN ||
      this.arraySelector(2, 5, 8) === PLAYER_1_WIN) {
      return game._player1
    } else if
      (this.arraySelector(0, 3, 6) === PLAYER_2_WIN ||
        this.arraySelector(1, 4, 7) === PLAYER_2_WIN ||
        this.arraySelector(2, 5, 8) === PLAYER_2_WIN) {
      return game._player2
    }
  }

  WinChecker.prototype.diagonalWinCheck = function () {
    if
      (this.arraySelector(0, 4, 8) === PLAYER_1_WIN ||
      this.arraySelector(2, 4, 6) === PLAYER_1_WIN) {
      return game._player1
    } else if
      (this.arraySelector(0, 4, 8) === PLAYER_2_WIN ||
      this.arraySelector(2, 4, 6) === PLAYER_2_WIN) {
      return game._player2
    }
  }
}