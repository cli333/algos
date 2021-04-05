// 62. Unique Paths
// Medium

// 4793

// 240

// Add to List

// Share
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// Example 1:

// Input: m = 3, n = 7
// Output: 28

// function s(m, n) {
//   // how many unique paths from top left to bot right
//   // can move right or bot
//   let res = 0;
//   helper(0, 0);
//   return res;

//   function helper(r, c) {
//     if (r >= m || c >= n) return;
//     if (r === m - 1 && c === n - 1) {
//       res++;
//       return;
//     }
//     helper(r + 1, c);
//     helper(r, c + 1);
//   }
// }

function s(m, n) {
  const dp = [];
  for (let i = 0; i < n; i++) {
    dp.push(Array(m).fill(1));
  }
  for (let i = n - 2; i >= 0; i--) {
    for (let j = m - 2; j >= 0; j--) {
      dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
    }
  }
  return dp[0][0];
}

console.log(s(7, 3));
