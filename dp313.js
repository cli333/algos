// 36. Valid Sudoku
// Medium

// 2433

// 547

// Add to List

// Share
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

function s(board) {
  // box index = (row / 3) * 3 + (col / 3)
  const map = buildMap();
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === ".") continue;
      if (
        map[`row${r}`][board[r][c]] ||
        map[`col${c}`][board[r][c]] ||
        map[`box${Math.floor(r / 3) * 3 + Math.floor(c / 3)}`][board[r][c]]
      )
        return false;
      map[`row${r}`][board[r][c]] = 1;
      map[`col${c}`][board[r][c]] = 1;
      map[`box${Math.floor(r / 3) * 3 + Math.floor(c / 3)}`][board[r][c]] = 1;
    }
  }
  return true;

  function buildMap() {
    const map = {};
    for (let i = 0; i < 9; i++) {
      map[`row${i}`] = Array(9).fill(0);
      map[`col${i}`] = Array(9).fill(0);
      map[`box${i}`] = Array(9).fill(0);
    }
    return map;
  }
}

console.log(
  s([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
  true
);

console.log(
  s([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
  false
);
