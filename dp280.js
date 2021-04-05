// 240. Search a 2D Matrix II
// Medium

// 4475

// 86

// Add to List

// Share
// Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// Example 1:

// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true
// Example 2:

// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// Output: false

function s(matrix, target) {
  let left = 0;
  let right = matrix[0].length - 1;
  let up = 0;
  let down = matrix.length - 1;

  while (left < right || up < down) {
    // find first num in down row >= target
    // set left boundary
    let l = left;
    let r = right;
    while (l < r) {
      const m = Math.floor((l + r) / 2);
      if (matrix[down][m] === target) return true;
      if (matrix[down][m] > target) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    const newLeft = l;
    console.log({ newLeft });

    // find first num in up row <= target
    // set right boundary
    l = left;
    r = right;
    while (l < r) {
      const m = Math.floor((l + r) / 2);
      if (matrix[up][m] === target) return true;
      if (matrix[up][m] > target) {
        r = m - 1;
      } else {
        l = m;
      }
    }
    const newRight = l;
    console.log({ newRight });
  }
}

console.log(
  s(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  ),
  true
);
console.log(
  s(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20
  ),
  false
);
