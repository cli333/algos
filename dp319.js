// 54. Spiral Matrix
// Medium

// 3637

// 650

// Add to List

// Share
// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

function s(matrix) {
  const res = [];
  let r1 = 0;
  let r2 = matrix.length - 1;
  let c1 = 0;
  let c2 = matrix[0].length - 1;
  while (r1 <= r2 && c1 <= c2) {
    for (let c = c1; c <= c2; c++) {
      res.push(matrix[r1][c]);
    }
    r1++;
    for (let r = r1; r <= r2; r++) {
      res.push(matrix[r][c2]);
    }
    c2--;
    if (r1 > r2) break;
    for (let c = c2; c >= c1; c--) {
      res.push(matrix[r2][c]);
    }
    r2--;
    if (c1 > c2) break;
    for (let r = r2; r >= r1; r--) {
      res.push(matrix[r][c1]);
    }
    c1++;
  }
  return res;
}

console.log(
  s([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  s([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
