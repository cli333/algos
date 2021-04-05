// longest common subsequence

function s(a, b, m = 0, n = 0, memo = {}) {
  // substring
  //   if (m === a.length || n === b.length) return res;
  //   if (a[m] === b[n]) {
  //     res = s(a, b, m + 1, n + 1, res + 1);
  //   }
  //   return Math.max(res, s(a, b, m + 1, n), s(a, b, m, n + 1));

  // w/o memoization o(2^n+m) time and space

  // w/ memoization o(n*m) time and space
  const key = `${m} ${n}`;
  if (key in memo) return memo[key];
  if (m === a.length || n === b.length) return 0;
  if (a[m] === b[n]) return 1 + s(a, b, m + 1, n + 1);
  const res = Math.max(s(a, b, m + 1, n), s(a, b, m, n + 1));
  memo[key] = res;
  return res;
}

console.log(s("asbcde!fJ", "azbcd,ef"));
console.log(s("abdacbab", "acebfca"));

function s2(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    dp.push(row);
  }
  for (let i = 0; i < m; i++) {
    if (a[i] === b[0]) dp[i][0]++;
  }
  for (let i = 1; i < n; i++) {
    if (a[0] === b[i]) dp[0][i]++;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1]);
      dp[i][j] = Math.max(dp[i][j], dp[i][j - 1]);
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
      if (a[i] === b[j]) dp[i][j]++;
    }
  }
  return dp;
}

console.log(s2("asbcde!fJ", "azbcd,ef"));
console.log(s2("abdacbab", "acebfca"));
