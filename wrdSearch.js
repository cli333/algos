// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring.The same letter cell may not be used more than once.

//   Example:

// board =
//   [
//     ['A', 'B', 'C', 'E'],
//     ['S', 'F', 'C', 'S'],
//     ['A', 'D', 'E', 'E']
//   ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

function solve(board, word) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === word[0] && dfs(board, word, 0, r, c)) {
        return true;
      }
    }
  }

  return false;

  function dfs(board, word, idx, row, col) {
    if (idx === word.length) return true;
    if (!board[row] || !board[row][col] || board[row][col] !== word[idx])
      return false;

    // capture the current char and convert to empty
    // so cannot use again
    let temp = board[row][col];
    board[row][col] = "";

    const left = dfs(board, word, idx + 1, row, col - 1);
    const right = dfs(board, word, idx + 1, row, col + 1);
    const up = dfs(board, word, idx + 1, row - 1, col);
    const down = dfs(board, word, idx + 1, row + 1, col);

    // restore board char
    board[row][col] = temp;
    return left || right || up || down;
  }
}

console.log(
  solve(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
console.log(
  solve(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  )
);
console.log(
  solve(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
