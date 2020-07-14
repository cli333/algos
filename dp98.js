// Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers.Return the maximum product you can get.

//   Example 1:

// Input: 2
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.
// Example 2:

// Input: 10
// Output: 36
// Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

function sol(n) {
  if (n === 0) return 1;
  let max = n;
  for (let i = 1; i < n; i++) {
    max = Math.max(max, i * sol(n - i));
  }
  return max;
}

function sol2(n) {
  const dp = Array(n + 1).fill(n);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], (i - j) * j);
      dp[i] = Math.max(dp[i], dp[j] * (i - j));
    }
  }

  return dp;
}

console.log(sol(10)); // 36
console.log(sol2(10));
