// give a 2d board and word
// find if the word exists in the grid

// word can be constructed from letters of adjacent cells, horizontal OR vertical only
// same letter cannot be used more than once

const search = (board, word) => {
  let rows = board.length;
  let cols = board[0].length;
  // create a 2d array of visited cells
  const visited = [...Array(rows)].map(row => Array(cols));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // find first char
      // search adjacent cells using helper
      if (word[0] === board[i][j] && searchWord(i, j, 0, board, word))
        return true;
    }
  }
  console.log(visited);
  return false;

  function searchWord(i, j, index, board, word) {
    // if index === word.length, then have found whole word
    if (index === word.length) return true;

    if (
      i < 0 || // boundary checks
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      word[index] !== board[i][j] || // not right letter
      visited[i][j] // if visited, return
    )
      return false;

    // when visit cell, mark as visited
    visited[i][j] = true;
    if (
      searchWord(i + 1, j, index + 1, board, word) ||
      searchWord(i - 1, j, index + 1, board, word) ||
      searchWord(i, j + 1, index + 1, board, word) ||
      searchWord(i, j - 1, index + 1, board, word)
    )
      return true;

    visited[i][j] = false; // resets board
    return false;
  }
};

let board = [
  ["a", "b", "c", "e"],
  ["s", "f", "c", "s"],
  ["a", "d", "e", "e"]
];

console.log(search(board, "abcced")); // true
console.log(search(board, "see")); // true
console.log(search(board, "abcb")); // false
