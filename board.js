class Board {
  constructor() {
    this.board = [[null, null, null],[null, null, null],[null, null, null]];
    this.won = false;
  };

  attemptPlace(row, col) {
    if (row > 2 || row < 0 || col > 2 || col < 0) {
      console.log("invalid input.");
      return false;
    } else if (this.board[row][col]) {
      console.log("That spot is taken! Please try again.");
      return false;
    }
    return true;
  }

  placePiece(type, row, col){
    this.board[row][col] = type;
    if (this.checkWin(type)) {
      this.printWinner(type);
      return true;
    } else {
      let next = type === 'X' ? 'O' : 'X';
      this.printBoard(next);
      return false;
    }
  }

  checkWin(type) {
    let won = false;
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] === type && this.board[i][1] === type && this.board[i][2] === type) {
        won = true;
      } else if (this.board[0][i] === type && this.board[1][i] === type && this.board[2][i] === type) {
        won = true;
      }
    }

    if (this.board[0][0] === type && this.board[1][1] === type && this.board[2][2] === type){
      won = true;
    } else if (this.board[0][2] === type && this.board[1][1] === type && this.board[2][0] === type){
      won = true;
    }
    this.won = won;
    return won;
  }

  printBoard(next) {
    console.log('\n');
    for (let i = 0; i < 3; i++) {
      console.log(`${i + 1} ${this.board[i][0] || ' '}|${this.board[i][1] || ' '}|${this.board[i][2] || ' '}`);
      if (i < 2) console.log('  -----')
      else console.log('\n -1-2-3- \n');
    }
    console.log(`It's ${next}'s turn`);
  }

  printWinner(type) {
    console.log(`${type} wins!`);
  }
}

module.exports = Board;