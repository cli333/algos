// 212. Word Search II
// Hard

// 3561

// 142

// Add to List

// Share
// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Example 1:

// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

function s(board, words) {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const res = [];
  const set = new Set();
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      for (let word of words) {
        if (board[r][c] === word[0]) {
          set.add(`${r} ${c}`);
          if (helper(r, c, 0, word)) res.push(word);
          set.delete(`${r} ${c}`);
        }
      }
    }
  }
  return res;

  function helper(r, c, k, word) {
    if (!board[r] || !board[r][c] || board[r][c] !== word[k]) return false;
    if (k === word.length - 1 && word[k] === board[r][c]) return true;
    let hasFound = false;
    for (let [r1, c1] of directions) {
      if (!set.has(`${r + r1} ${c + c1}`)) {
        set.add(`${r + r1} ${c + c1}`);
        hasFound = hasFound || helper(r + r1, c + c1, k + 1, word);
        set.delete(`${r + r1} ${c + c1}`);
      }
    }
    return hasFound;
  }
}

console.log(
  s(
    [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    ["oath", "pea", "eat", "rain"]
  ),
  ["eat", "oath"]
);
