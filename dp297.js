// 64. Minimum Path Sum
// Medium

// 4443

// 82

// Add to List

// Share
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example 1:

// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
// Example 2:

// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12

function s(grid) {
  // find min sum from 0,0 to r,c
  const r = grid.length - 1;
  const c = grid[0].length - 1;
  const dp = [];
  for (let i = 0; i <= r; i++) {
    dp.push(Array(c + 1).fill(Infinity));
  }
  dp[r][c] = grid[r][c];
  for (let i = r - 1; i >= 0; i--) {
    dp[i][c] = grid[i][c] + dp[i + 1][c];
  }
  for (let i = c - 1; i >= 0; i--) {
    dp[r][i] = grid[r][i] + dp[r][i + 1];
  }
  for (let i = r - 1; i >= 0; i--) {
    for (let j = c - 1; j >= 0; j--) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i][j + 1]) + grid[i][j];
    }
  }
  return dp[0][0];
}

console.log(
  s([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
