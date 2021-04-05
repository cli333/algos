// longest palindromic subsequence

function s(str) {
  // brute force will have exponential complexity!!

  const n = str.length;
  const dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(0);
  }

  // for len 1 <= n
  // compare first and last chars
  // if match, trim 2 and recompute
  // if no match, trim 1 at a time and recompute

  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  // check 2 >= n
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      const j = i + len - 1;
      if (str[i] === str[j]) {
        dp[i][j] = 2 + dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
      }
    }
  }

  return dp[0][n - 1];
}

console.log(s("abcaa"), 3);
console.log(s("lpaspal"), 5);
