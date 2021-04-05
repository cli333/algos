// word search
// find the word in the board, can only use each cell once, can only move horizontal and vertical

function s(board, word) {
  // o(row*col*4^w), w = length of word
  // o(length word), stack height at most length of the word

  const n = word.length;
  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const set = new Set();

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word[0]) {
        set.add(`${row} ${col}`);
        if (helper(row, col)) return true;
        set.delete(`${row} ${col}`);
      }
    }
  }

  return false;

  function helper(row, col, i = 0) {
    if (i === n) return true;
    if (!board[row] || !board[row][col]) return false;
    if (board[row][col] !== word[i]) return false;
    for (let d of directions) {
      const [r, c] = d;
      const key = `${row + r} ${col + c}`;
      if (!set.has(key)) {
        set.add(key);
        if (helper(row + r, col + c, i + 1)) return true;
        set.delete(key);
      }
    }
    return false;
  }
}

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

console.log(
  s(
    [
      ["A", "C", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
