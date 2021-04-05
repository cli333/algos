// 63. Unique Paths II
// Medium

// 2587

// 289

// Add to List

// Share
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and space is marked as 1 and 0 respectively in the grid.

// Example 1:

// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

function s(grid) {
  const r = grid.length - 1;
  const c = grid[r].length - 1;
  if (grid[r][c] === 1 || grid[0][0] === 1) return 0;
  for (let i = 0; i <= r; i++) {
    for (let j = 0; j <= c; j++) {
      if (grid[i][j] === 1) grid[i][j] = -1;
    }
  }
  grid[r][c] = 1;
  for (let i = r - 1; i >= 0; i--) {
    if (grid[i][c] === 0) grid[i][c] = grid[i + 1][c];
  }
  for (let i = c - 1; i >= 0; i--) {
    if (grid[r][i] === 0) grid[r][i] = grid[r][i + 1];
  }
  for (let i = r - 1; i >= 0; i--) {
    for (let j = c - 1; j >= 0; j--) {
      if (grid[i][j] < 0) continue;
      grid[i][j] += grid[i][j + 1] > 0 ? grid[i][j + 1] : 0;
      grid[i][j] += grid[i + 1][j] > 0 ? grid[i + 1][j] : 0;
    }
  }
  return grid[0][0] > 0 ? grid[0][0] : 0;
}

console.log(
  s([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);

console.log(s([[1, 0]]));
