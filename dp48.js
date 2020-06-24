// find if word exists on the board

function sol(board, word) {
  const used = JSON.parse(JSON.stringify(board)).map((arr) => arr.fill(false));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (helper(0, i, j)) return true;
    }
  }
  return false;

  function helper(idx, row, col) {
    if (idx === word.length) return true;
    if (!board[row] || !board[row][col]) return false;
    if (used[row][col] || board[row][col] !== word[idx]) return false;
    used[row][col] = true;
    if (
      helper(idx + 1, row + 1, col) ||
      helper(idx + 1, row - 1, col) ||
      helper(idx + 1, row, col + 1) ||
      helper(idx + 1, row, col - 1)
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
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
); // true

console.log(
  sol(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ASFBCCEDF"
  )
);
