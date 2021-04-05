// longest commmon substring

function s(a, b, m = a.length - 1, n = b.length - 1, res = 0) {
  // o(3^n+m) time
  // o(n + m) space

  if (m < 0 || n < 0) {
    return res;
  } else if (a[m] === b[n]) {
    return Math.max(
      s(a, b, m - 1, n - 1, res + 1),
      s(a, b, m - 1, n, 0),
      s(a, b, m, n - 1, 0)
    );
  } else {
    return Math.max(s(a, b, m - 1, n, 0), s(a, b, m, n - 1, 0));
  }

  if (m < 0 || n < 0) return res;
  if (a[m] === b[n]) res = s(a, b, m - 1, n - 1, res + 1);
  return Math.max(res, s(a, b, m - 1, n, 0), s(a, b, m, n - 1, 0));
}

console.log(s("opposite", "position"));

// function s2(a, b) {
//   let res = 0;
//   const m = a.length;
//   const n = b.length;
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (b.includes(a.substring(i, j + 1))) {
//         res = Math.max(res, j - i + 1);
//       }
//     }
//   }
//   return res;
// }

// console.log(s2("abcdef", "bcdf"));

// longest common subsequence

function s2(a, b, m = 0, n = 0) {
  if (m === a.length || n === b.length) return 0;
  if (a[m] === b[n]) return 1 + s2(a, b, m + 1, n + 1);
  return Math.max(s2(a, b, m + 1, n), s2(a, b, m, n + 1));
}

console.log(s2("opposite", "positione"));

function s3(a, b) {
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
    if (a[i] === b[0]) dp[i][0] = 1;
  }
  for (let i = 0; i < n; i++) {
    if (a[0] === b[i]) dp[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (a[i] === b[j]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      }
    }
  }

  return dp;
}

console.log(s3("opposite", "positione"));
console.log(s3("zbcdf", "abcde"));
