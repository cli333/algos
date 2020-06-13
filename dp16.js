// longest common subsequence, 2 strings

function sol(s1, s2, m = s1.length - 1, n = s2.length - 1) {
  if (m < 0 || n < 0) {
    return 0;
  }

  if (s1[m] === s2[n]) {
    return 1 + sol(s1, s2, m - 1, n - 1);
  }

  return Math.max(sol(s1, s2, m - 1, n), sol(s1, s2, m, n - 1));
}

console.log(sol("cat", "cta"));

function sol2(s1, s2) {
  const dp = [];
  for (let i = 0; i <= s1.length; i++) {
    const row = [];
    for (let j = 0; j <= s2.length; j++) {
      row.push(0);
    }
    dp.push(row);
  }

  s1 = " " + s1;
  s2 = " " + s2;

  for (let m = 1; m < s1.length; m++) {
    for (let n = 1; n < s2.length; n++) {
      if (s1[m] === s2[n]) {
        dp[m][n] = 1 + dp[m - 1][n - 1];
      } else {
        dp[m][n] = Math.max(dp[m - 1][n], dp[m][n - 1]);
      }
    }
  }

  return dp[s1.length - 1][s2.length - 1];
}

console.log(sol2("cat", "cta"));
