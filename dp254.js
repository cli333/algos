// minimum edit distance to convert a to b or vice versa
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
  // fill out first col and row
  for (let i = 1; i <= m; i++) {
    dp[i][0] = 1 + dp[i - 1][0];
  }
  for (let i = 1; i <= n; i++) {
    dp[0][i] = 1 + dp[0][i - 1];
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i] === b[j]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp;
}

console.log(s("horse", "ros"));

function s2(a, b) {
  return helper(a, b, a.length, b.length);

  function helper(a, b, m, n) {
    if (!m) return n;
    if (!n) return m;
    if (a[m - 1] === b[n - 1]) {
      return helper(a, b, m - 1, n - 1);
    }
    return (
      1 +
      Math.min(
        helper(a, b, m - 1, n),
        helper(a, b, m - 1, n - 1),
        helper(a, b, m, n - 1)
      )
    );
  }
}

console.log(s2("horse", "ros"), 3);
