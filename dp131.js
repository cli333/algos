// sudoku solver

function sol(board) {
  helper();
  return board;

  function helper() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === ".") {
          for (let k = 1; k <= 9; k++) {
            if (isValid(i, j, k)) {
              board[i][j] = k;
              if (helper()) return true;
              board[i][j] = ".";
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  function isValid(row, col, curNum) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === curNum) return false;
      if (board[i][col] === curNum) return false;
      if (
        board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
          3 * Math.floor(col / 3) + (i % 3)
        ] === curNum
      )
        return false;
    }
    return true;
  }
}

console.log(
  sol([
    Array(9).fill("."),
    Array(9).fill("."),
    Array(9).fill("."),
    Array(9).fill("."),
    Array(9).fill("."),
    Array(9).fill("."),
    Array(9).fill("."),
    Array(9).fill("."),
    Array(9).fill("."),
  ])
);

// n queens
function sol2(n) {
  const res = [];
  const board = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(".");
    }
    board.push(row);
  }

  helper(0);
  return res;

  function helper(row) {
    if (row === n) {
      res.push(JSON.parse(JSON.stringify(board)));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = "Q";
        helper(row + 1);
        board[row][col] = ".";
      }
    }
  }

  function isValid(row, col) {
    for (let i = row - 1; i >= 0; i--) {
      if (board[i][col] === "Q") return false;
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }
}

console.log(sol2(5));
