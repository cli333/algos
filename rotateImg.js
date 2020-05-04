// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees(clockwise).

//   Note:

// You have to rotate the image in -place, which means you have to modify the input 2D matrix directly.DO NOT allocate another 2D matrix and do the rotation.

//   Example 1:

// Given input matrix =
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ],

//   rotate the input matrix in -place such that it becomes:
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

const solve = (matrix) => {
  // flip across the top left to bottom right axis

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // flip horizontally

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < Math.floor(matrix[i].length / 2); j++) {
      [matrix[i][j], matrix[i][matrix[i].length - 1 - j]] = [
        matrix[i][matrix[i].length - 1 - j],
        matrix[i][j],
      ];
    }
  }

  return matrix;
};

console.log(
  solve([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
