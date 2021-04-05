// 74. Search a 2D Matrix
// Medium

// 3088

// 194

// Add to List

// Share
// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

function s(matrix, target) {
  // time, log(rows) + log(cols)
  // search rows by first col, then search that row
  const rows = matrix.length;
  if (!rows) return false;
  let r1 = 0;
  let r2 = rows - 1;
  while (r1 < r2) {
    const m = Math.floor((r1 + r2) / 2);
    if (r1 === m) break;
    if (matrix[m][0] > target) {
      r2 = m - 1;
    } else if (matrix[m][0] < target) {
      r1 = m;
    }
  }
  let c1 = 0;
  let c2 = matrix[r1].length - 1;
  while (c1 < c2) {
    const m = Math.floor((c1 + c2) / 2);
    if (c1 === m) break;
    if (matrix[r1][m] > target) {
      c2 = m - 1;
    } else {
      c1 = m;
    }
  }
  console.log({ r1, c1 });
  return matrix[r1][c1] === target;
}

console.log(
  s(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);

console.log(
  s(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    15
  )
);

console.log(s([[1, 3]], 3));

function s2(matrix) {
  if (!matrix.length) return false;
  let row = 0;
  let col = matrix[0].length - 1;
  while (col >= 0 && row <= matrix.length - 1) {
    if (matrix[row][col] === target) return true;
    if (matrix[row][col] > target) col--;
    if (matrix[row][col] < target) row++;
  }

  return true;
}
