// Given a 2D board containing 'X' and 'O'(the letter O), capture all regions surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

//   Example:

// X X X X
// X O O X
// X X O X
// X O X X
// After running your function, the board should be:

// X X X X
// X X X X
// X X X X
// X O X X

function sol(board) {
  // mark all O's on 4 borders and explore
  for (let i = 0; i < board.length; i++) {
    if (board[0][i] === "O") helper(0, i);
    if (board[i][0] === "O") helper(i, 0);
    if (board[i][board.length - 1] === "O") helper(i, board.length - 1);
    if (board[board.length - 1][i] === "O") helper(board.length - 1, i);
  }

  // flip back
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
      if (board[i][j] === "v") board[i][j] = "O";
    }
  }

  return board;

  function helper(r, c) {
    if (!board[r] || !board[r][c] || board[r][c] === "X" || board[r][c] === "v")
      return;
    board[r][c] = "v";
    helper(r + 1, c);
    helper(r - 1, c);
    helper(r, c + 1);
    helper(r, c - 1);
  }
}

console.log(
  sol([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);

console.log(
  sol([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "O", "X"],
  ])
);
