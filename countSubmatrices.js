// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

//   Example 1:

// Input: matrix =
//   [
//     [0, 1, 1, 1],
//     [1, 1, 1, 1],
//     [0, 1, 1, 1]
//   ]
// Output: 15
// Explanation:
// There are 10 squares of side 1.
// There are 4 squares of side 2.
// There is  1 square of side 3.
// Total number of squares = 10 + 4 + 1 = 15.
// Example 2:

// Input: matrix =
//   [
//     [1, 0, 1],
//     [1, 1, 0],
//     [1, 1, 0]
//   ]
// Output: 7
// Explanation:
// There are 6 squares of side 1.
// There is 1 square of side 2.
// Total number of squares = 6 + 1 = 7.

function solve(matrix) {
  // time = o(m * n)
  let res = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) continue;
      // if part of left or top border
      // ie no "three neighbors"
      if (row === 0 || col === 0) {
        res++;
        continue;
      }
      // min of three neighbors(up, left, diagonal left)
      let min = Math.min(
        matrix[row - 1][col - 1],
        matrix[row][col - 1],
        matrix[row - 1][col]
      );
      // add min of three nighbors to the current box
      matrix[row][col] += min;
      // add current box value to the res
      res += matrix[row][col];
    }
  }

  return res;
}

console.log(
  solve([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
  ])
); // 15

console.log(
  solve([
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0],
  ])
); // 7
