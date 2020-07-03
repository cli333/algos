// Given a triangle, find the minimum path sum from top to bottom.Each step you may move to adjacent numbers on the row below.

// For example, given the following triangle

// [
//   [2],
//   [3, 4],
//   [6, 5, 7],
//   [4, 1, 8, 3]
// ]
// The minimum path sum from top to bottom is 11(i.e., 2 + 3 + 5 + 1 = 11).

function sol(triangle) {
  return helper(0, 0);

  function helper(row, col) {
    if (row === triangle.length) {
      return 0;
    }
    return (
      triangle[row][col] +
      Math.min(helper(row + 1, col), helper(row + 1, col + 1))
    );
  }
}

function sol2(triangle) {
  const dp = [];

  // fill dp table bottom up
  // start at the base and move up
  // the MIN will be at peak

  const n = triangle.length;
  for (let i = 0; i < n; i++) {
    dp.push([]);
  }

  // fill bottom row of dp
  for (let i = 0; i < triangle[n - 1].length; i++) {
    dp[n - 1][i] = triangle[n - 1][i];
  }

  // work up the triangle and the dp
  for (let i = n - 2; i >= 0; i--) {
    const len = triangle[i].length;
    for (let j = 0; j < len; j++) {
      const left = dp[i + 1][j];
      const right = dp[i + 1][j + 1];
      const cur = triangle[i][j];
      dp[i][j] = cur + Math.min(left, right);
    }
  }

  return dp;
}

console.log(sol([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
console.log(sol([[5], [3, 4], [9, 8, 1], [4, 5, 8, 2]]));
console.log(sol2([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
console.log(sol2([[5], [3, 4], [9, 8, 1], [4, 5, 8, 2]]));
