// Given an m x n board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

function s(board, word) {
  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const len = board.length;
  const set = new Set();
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < board[i].length; j++) {
      set.add(`${i} ${j}`);
      if (helper(i, j)) return true;
      set.delete(`${i} ${j}`);
    }
  }
  return false;

  function helper(r, c, i = 0) {
    if (i === word.length) return true;
    if (!board[r] || !board[r][c] || board[r][c] !== word[i]) return false;
    for (let [r1, c1] of directions) {
      if (!set.has(`${r + r1} ${c + c1}`)) {
        set.add(`${r + r1} ${c + c1}`);
        if (helper(r + r1, c + c1, i + 1)) return true;
        set.delete(`${r + r1} ${c + c1}`);
      }
    }
  }
}

console.log(
  s(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  ),
  true
);
console.log(
  s(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  ),
  false
);
