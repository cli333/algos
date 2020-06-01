// Problem description: Given a 2d grid map of '1's(land) and '0's(water), count the number of islands.An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.You may assume all four edges of the grid are all surrounded by water.

//   Example 1:
// Input:
// 11110
// 11010
// 11000
// 00000
// Output: 1

// Example 2:
// Input:
// 11000
// 11000
// 00100
// 00011
// Output: 3

function solve(matrix) {
  let res = 0;
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 1) {
        findEdge(matrix, r, c);
        res++;
      }
    }
  }

  return res;

  function findEdge(matrix, r, c) {
    if (!matrix[r] || !matrix[r][c] || matrix[r][c] !== 1) return;

    matrix[r][c] = 0;
    findEdge(matrix, r + 1, c);
    findEdge(matrix, r - 1, c);
    findEdge(matrix, r, c + 1);
    findEdge(matrix, r, c - 1);
  }
}

console.log(
  solve([
    [1, 0, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
  ])
);
