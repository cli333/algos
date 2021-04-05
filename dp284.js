// find longest palindromic substring

var longestPalindrome = function (s) {
  const n = s.length;
  const dp = [];
  let maxLen = 1;
  let start = 0;
  for (let i = 0; i < n; i++) {
    dp.push(Array(n).fill(0));
  }
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = 1;
      start = i;
      maxLen = 2;
    }
  }
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      const j = i + len - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = 1;
        if (len > maxLen) {
          start = i;
          maxLen = len;
        }
      }
    }
  }
  return s.substring(start, start + maxLen);
};
