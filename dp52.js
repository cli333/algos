// Given a 2D board and a list of words from the dictionary, find all words in the board.

// Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring.The same letter cell may not be used more than once in a word.

//   Example:

// Input:
// board = [
//   ['o', 'a', 'a', 'n'],
//   ['e', 't', 'a', 'e'],
//   ['i', 'h', 'k', 'r'],
//   ['i', 'f', 'l', 'v']
// ]
// words = ["oath", "pea", "eat", "rain"]

// Output: ["eat", "oath"]

function sol(board, words) {
  const clone = JSON.parse(JSON.stringify(board));

  const res = [];
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      for (let word of words) {
        if (helper(word, 0, r, c, clone.slice())) res.push(word);
      }
    }
  }

  return res;

  function helper(word, idx, row, col, used) {
    if (idx === word.length) return true;
    if (!board[row] || !board[row][col]) return false;
    if (word[idx] !== board[row][col]) return false;
    // if (used[row][col] === true) return false;
    used[row][col] = true;
    if (
      helper(word, idx + 1, row - 1, col, used) ||
      helper(word, idx + 1, row + 1, col, used) ||
      helper(word, idx + 1, row, col - 1, used) ||
      helper(word, idx + 1, row, col + 1, used)
    ) {
      return true;
    }
    used[row][col] = false;
    return false;
  }
}

console.log(
  sol(
    [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    ["oath", "pea", "eat", "rain"]
  )
);
