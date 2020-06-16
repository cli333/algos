// edit distance between two strings

function sol(s1, s2, m = s1.length, n = s2.length) {
  // runtime o(3^n)
  // space, call stack as deep as longest string, s1 or s2

  // no more m, min edit distance is lenght of s2 or n
  // vice versa
  if (!m) return n;
  if (!n) return m;

  // last chars the same, move both along
  if (s1[m - 1] === s2[n - 1]) {
    return sol(s1, s2, m - 1, n - 1);
  }

  let insert = sol(s1, s2, m, n - 1);
  let remove = sol(s1, s2, m - 1, n);
  let replace = sol(s1, s2, m - 1, n - 1);

  return 1 + Math.min(insert, remove, replace);
}

function sol2(s1, s2) {
  // space, time, o(m * n)

  const dp = [];
  for (let j = 0; j <= s1.length; j++) {
    const row = [];
    for (let i = 0; i <= s2.length; i++) {
      row.push(0);
    }
    dp.push(row);
  }

  for (let m = 0; m <= s1.length; m++) {
    for (let n = 0; n <= s2.length; n++) {
      if (m === 0) {
        dp[m][n] = n;
      } else if (n === 0) {
        dp[m][n] = m;
      } else if (s1[m - 1] === s2[n - 1]) {
        dp[m][n] = dp[m - 1][n - 1];
      } else {
        let insert = dp[m][n - 1];
        let remove = dp[m - 1][n];
        let replace = dp[m - 1][n - 1];
        dp[m][n] = 1 + Math.min(insert, remove, replace);
      }
    }
  }

  return dp;
}

console.log(sol("horse", "ros")); // 3
console.log(sol2("horse", "ros"));
