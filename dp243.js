// 130. Surrounded Regions
// Medium

// 2500

// 744

// Add to List

// Share
// Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Example:

// X X X X
// X O O X
// X X O X
// X O X X
// After running your function, the board should be:

// X X X X
// X X X X
// X X X X
// X O X X

function s(board) {
  const row = board.length;
  const col = board[0].length;

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (
        !board[r + 1] ||
        !board[r - 1] ||
        !board[r][c + 1] ||
        !board[r][c - 1]
      ) {
        flat(r, c);
      }
    }
  }

  console.log(board);

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (board[r][c] === "O") board[r][c] = "X";
      if (board[r][c] === "$") board[r][c] = "O";
    }
  }

  return board;

  function flat(r, c) {
    if (!board[r] || !board[r][c] || board[r][c] !== "O") return;
    board[r][c] = "$";
    flat(r + 1, c);
    flat(r - 1, c);
    flat(r, c + 1);
    flat(r, c - 1);
  }
}

console.log(
  s([
    ["x", "x", "x", "x"],
    ["x", "O", "O", "x"],
    ["x", "x", "O", "x"],
    ["x", "O", "x", "x"],
  ])
);

console.log(
  s([
    ["O", "O", "O"],
    ["O", "O", "O"],
    ["O", "O", "O"],
  ])
);
