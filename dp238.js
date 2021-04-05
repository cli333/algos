// 120. Triangle
// Medium

// 2634

// 296

// Add to List

// Share
// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

// Example 1:

// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
// Example 2:

// Input: triangle = [[-10]]
// Output: -10

function s(triangle) {
  // find min path sum to bottom
  // for index i, can only move to i or i + 1 of next row

  const dp = JSON.parse(JSON.stringify(triangle));
  let n = triangle.length - 2;
  for (let i = n; i >= 0; i--) {
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] += Math.min(dp[i + 1][j], Math.min(dp[i + 1][j + 1]));
    }
  }
  return dp[0][0];
}

console.log(s([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));

function s2(triangle) {
  return helper(0, 0);

  function helper(row, col) {
    if (row === triangle.length) return 0;
    return (
      triangle[row][col] +
      Math.min(helper(row + 1, col), helper(row + 1, col + 1))
    );
  }
}

console.log(s2([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
