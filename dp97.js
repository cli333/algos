// Given a positive integer n, find the least number of perfect square numbers(for example, 1, 4, 9, 16, ...) which sum to n.

//   Example 1:

// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

function isPerfectSquare(n) {
  if (n === 1) return true;
  for (let i = 2; i < n; i++) {
    if (i * i === n) return true;
  }
  return false;
}

function sol(n) {
  if (n === 0) return 0;

  // max squares = (1*1, 1*1, ...)
  let min = n;

  for (let i = 1; i < n; i++) {
    if (isPerfectSquare(i)) {
      min = Math.min(min, 1 + sol(n - i));
    }
  }

  return min;
}

function sol2(n) {
  const dp = Array(n + 1).fill(n);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], 1 + dp[i - j * j]);
    }
  }

  return dp[n];
}

console.log(sol(10)); // 9 + 1 => 2
console.log(sol2(12)); // 4 + 4 + 4 => 3
