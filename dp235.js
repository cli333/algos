// 115. Distinct Subsequences
// Hard

// 1761

// 62

// Add to List

// Share
// Given two strings s and t, return the number of distinct subsequences of s which equals t.

// A string's subsequence is a new string formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ACE" is a subsequence of "ABCDE" while "AEC" is not).

// It's guaranteed the answer fits on a 32-bit signed integer.

// Example 1:

// Input: s = "rabbbit", t = "rabbit"
// Output: 3
// Explanation:
// As shown below, there are 3 ways you can generate "rabbit" from S.
// rabbbit
// rabbbit
// rabbbit
// Example 2:

// Input: s = "babgbag", t = "bag"
// Output: 5
// Explanation:
// As shown below, there are 5 ways you can generate "bag" from S.
// babgbag
// babgbag
// babgbag
// babgbag
// babgbag

function s(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    const row = [];
    for (let j = 0; j <= n; j++) {
      row.push(0);
    }
    dp.push(row);
  }
  // empty strings exist in all subsequences
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        // top left + top
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        // top
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[m][n];
}

console.log(s("abcde", "ace"));
console.log(s("rabbbit", "rabbit"));
