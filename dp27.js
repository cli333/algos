// sudoku solver
//EVERY  row, col, and submatrix contains 1, ...9

function sol(matrix) {
  solve(matrix);
  return matrix;

  function isValid(matrix, row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (matrix[row][i] === num) return false;
      if (matrix[i][col] === num) return false;
      if (
        matrix[3 * Math.floor(row / 3) + Math.floor(i / 3)][
          3 * Math.floor(col / 3) + Math.floor(i % 3)
        ] === num
      )
        return false;
    }
    return true;
  }

  function solve(matrix) {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (matrix[r][c] === 0) {
          for (let n = 1; n <= 9; n++) {
            if (isValid(matrix, r, c, n)) {
              // set the number
              matrix[r][c] = n;
              if (solve(matrix)) {
                return true;
              }
              // unset the number
              matrix[r][c] = 0;
            }
          }
          // triggers the backtracking on line 30
          // if a number assignment doesn't pan out, returns false
          // also when reach bottom of stack, will return false
          return false;
        }
      }
    }
    return true;
  }
}

console.log(
  sol([
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0],
  ])
);

/*
Output:
          3 1 6 5 7 8 4 9 2
          5 2 9 1 3 4 7 6 8
          4 8 7 6 2 9 5 3 1
          2 6 3 4 1 5 9 8 7
          9 7 4 8 6 3 1 2 5
          8 5 1 7 9 2 6 4 3
          1 3 8 9 4 7 2 5 6
          6 9 2 3 5 1 8 7 4
          7 4 5 2 8 6 3 1 9
[
  [3, 1, 6, 5, 7, 8, 4, 9, 2],
  [5, 2, 9, 1, 3, 4, 7, 6, 8],
  [4, 8, 7, 6, 2, 9, 5, 3, 1],
  [2, 6, 3, 4, 1, 5, 9, 8, 7],
  [9, 7, 4, 8, 6, 3, 1, 2, 5],
  [8, 5, 1, 7, 9, 2, 6, 4, 3],
  [1, 3, 8, 9, 4, 7, 2, 5, 6],
  [6, 9, 2, 3, 5, 1, 8, 7, 4],
  [7, 4, 5, 2, 8, 6, 3, 1, 9],
];
*/
