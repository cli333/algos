// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
// Example:

// Consider the following matrix:

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// Given target = 5, return true.

// Given target = 20, return false.

function sol(matrix, target) {
  // o(m + n ) time

  if (!matrix || !matrix.length) return false;
  const m = matrix.length;
  const n = matrix[0].length;
  let curRow = 0;
  let curCol = n - 1;

  while (curRow < m && curCol >= 0) {
    if (matrix[curRow][curCol] === target) return true;
    if (matrix[curRow][curCol] > target) {
      curCol--;
    } else if (matrix[curRow][curCol] < target) {
      curRow++;
    }
  }

  return false;
}

console.log(
  sol(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
