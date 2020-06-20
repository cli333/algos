// n queens
// place n queens on an n*n board such that no queens attack each other
// return all possibilities

function sol(n) {
  const res = [];
  const board = [];
  for (let r = 0; r < n; r++) {
    const row = [];
    for (let c = 0; c < n; c++) {
      row.push(".");
    }
    board.push(row);
  }
  helper(0);
  return res;

  function helper(rowIdx) {
    // when out of bounds
    if (rowIdx === board.length) {
      res.push(JSON.parse(JSON.stringify(board)));
      return;
    }

    for (let colIdx = 0; colIdx < board[rowIdx].length; colIdx++) {
      if (isValid(rowIdx, colIdx)) {
        board[rowIdx][colIdx] = "Q";
        helper(rowIdx + 1);
        board[rowIdx][colIdx] = ".";
      }
    }
  }

  function isValid(rowIdx, colIdx) {
    // check cells 'above' current cell
    for (let i = rowIdx - 1; i >= 0; i--) {
      if (board[i][colIdx] === "Q") return false;
    }
    for (let i = rowIdx - 1, j = colIdx - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }
    for (
      let i = rowIdx - 1, j = colIdx + 1;
      i >= 0 && j < board.length;
      i--, j++
    ) {
      if (board[i][j] === "Q") return false;
    }
    return true;
  }
}

console.log(sol(4));
