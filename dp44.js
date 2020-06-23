// mini sudoku solver

function sol(N) {
  const board = [];
  for (let r = 0; r < N; r++) {
    const row = [];
    for (let c = 0; c < N; c++) {
      row.push(0);
    }
    board.push(row);
  }
  helper();
  return board;

  function helper() {
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        if (board[r][c] === 0) {
          for (let n = 1; n <= N; n++) {
            if (isValid(r, c, n)) {
              board[r][c] = n;
              if (helper()) return true;
              board[r][c] = 0;
            }
          }
          // if the num is 0 and assignment doesn't work
          // otherwise will never reach this return statement
          return false;
        }
      }
    }
    return true;
  }

  function isValid(row, col, num) {
    for (let i = 0; i < N; i++) {
      if (board[row][i] === num) return false;
      if (board[i][col] === num) return false;
    }
    return true;
  }
}

console.log(sol(6));
