// 79. Word Search
// Medium

// 5421

// 240

// Add to List

// Share
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

function s(board, word) {
  if (!board || !word) return false;
  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const set = new Set();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        set.add(`${i} ${j}`);
        if (helper(i, j, 0)) return true;
        set.delete(`${i} ${j}`);
      }
    }
  }
  return false;

  function helper(i, j, k) {
    if (!board[i] || !board[i][j]) return false;
    if (board[i][j] !== word[k]) return false;
    if (k === word.length - 1 && board[i][j] === word[k]) return true;
    let hasFound = false;
    for (let [i1, j1] of directions) {
      if (!set.has(`${i + i1} ${j + j1}`)) {
        set.add(`${i + i1} ${j + j1}`);
        hasFound = hasFound || helper(i + i1, j + j1, k + 1);
        set.delete(`${i + i1} ${j + j1}`);
      }
    }
    return hasFound;
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
  )
);

console.log(
  s(
    [
      ["k", "i", "n", "t"],
      ["b", "i", "n", "s"],
      ["g", "n", "y", "i"],
      ["u", "o", "e", "d"],
      ["d", "i", "b", "v"],
      ["h", "i", "r", "t"],
    ],
    "hirt"
  )
);
