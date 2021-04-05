// 96. Unique Binary Search Trees
// Medium

// 4268

// 159

// Add to List

// Share
// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

// Example 1:

// Input: n = 3
// Output: 5
// Example 2:

// Input: n = 1
// Output: 1

function s(n) {
  // catalan number
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }

  return dp;
}

console.log(s(3), 5);
console.log(s(1), 1);
