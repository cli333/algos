// edit distance
// find min operations needed to convert word1 to word2
// can remove, delete, insert

function s(w1, w2, m = w1.length - 1, n = w2.length - 1) {
  // o(3^n+m) time
  // o(n+m) space
  // reached the end of one letter return whatever the length is of the other
  if (!m) return n;
  if (!n) return m;
  if (w1[m] === w2[n]) return s(w1, w2, m - 1, n - 1);
  return (
    1 +
    Math.min(s(w1, w2, m - 1, n), s(w1, w2, m, n - 1), s(w1, w2, m - 1, n - 1))
  );
}

console.log(s("inside", "index"), 3);
console.log(s("abc", "zabcd"), 2);

function s2(a, b) {
  // o(nm) space, time
  const m = a.length;
  const n = b.length;
  const dp = [];
  // pad the dp
  for (let i = 0; i <= m; i++) {
    const row = [];
    for (let j = 0; j <= n; j++) {
      row.push(0);
    }
    dp.push(row);
  }
  // one empty string vs a full string = edit of distance of the full string
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let i = 1; i <= n; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]);
      }
    }
  }

  return dp;
}

// console.log(s2("inside", "index"));
console.log(s2("abc", "zabcd"));
