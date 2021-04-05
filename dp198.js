// n queens problem
// given a positive n, find the number of ways to place n queens on an n*n board such that no queens can attack each other

function s(n) {
  let board = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(".");
    }
    board.push(row);
  }
  let res = 0;
  helper(0);
  return res;

  function helper(row) {
    if (row >= board.length) {
      res++;
      return;
    }
    for (let col = 0; col < board[0].length; col++) {
      if (up(row, col) && uLeft(row, col) && uRight(row, col)) {
        board[row][col] = "Q";
        helper(row + 1);
        board[row][col] = ".";
      }
    }
  }

  // check  up
  function up(row, col) {
    if (!board[row] || !board[row][col]) return true;
    if (board[row][col] === "Q") return false;
    return up(row - 1, col);
  }
  // check up left
  function uLeft(row, col) {
    if (!board[row] || !board[row][col]) return true;
    if (board[row][col] === "Q") return false;
    return uLeft(row - 1, col - 1);
  }
  // check up right
  function uRight(row, col) {
    if (!board[row] || !board[row][col]) return true;
    if (board[row][col] === "Q") return false;
    return uRight(row - 1, col + 1);
  }
}

console.log(s(4), 2);
