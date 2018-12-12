const Board = require('./board.js');
const readline = require('readline-sync');

let board = new Board();

let won = false;
let type = 'X';
board.printBoard(type);
while (!won) {
  let attempt = false;
  let row;
  let col;
  while (!attempt) {
    row = readline.questionInt("Select a row: ");
    col = readline.questionInt("Select a column: ");
    attempt = board.attemptPlace(row - 1, col - 1);
  }
  won = board.placePiece(type, row - 1, col - 1);
  type = type === 'X' ? 'O' : 'X';
}
