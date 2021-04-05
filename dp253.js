// function s(s1, s2) {
//   // longest common substring
//   const m = s1.length;
//   const n = s2.length;

//   const dp = [];
//   for (let i = 0; i < m; i++) {
//     const row = [];
//     for (let j = 0; j < n; j++) {
//       row.push(0);
//     }
//     dp.push(row);
//   }

//   // check first col and row
//   for (let i = 0; i < m; i++) {
//     if (s1[i] === s2[0]) {
//       dp[i][0] = 1;
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     if (s1[0] === s2[i]) {
//       dp[0][i] = 1;
//     }
//   }

//   let len = 0;
//   let lastIdx = null;
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       if (s1[i] === s2[j]) {
//         dp[i][j] = 1 + dp[i - 1][j - 1];
//       }
//       if (dp[i][j] > len) {
//         len = dp[i][j];
//         lastIdx = i;
//       }
//     }
//   }

//   let str = "";
//   while (len) {
//     str = s1[lastIdx] + str;
//     lastIdx--;
//     len--;
//   }

//   return { dp, str };
// }

// console.log(s("abcdaf", "zbcdf"));

// function s2(s1, s2) {
//   return helper(s1, s2, s1.length, s2.length, 0);

//   function helper(s1, s2, m, n, res) {
//     if (!m || !n) return res;
//     if (s1[m - 1] === s2[n - 1]) {
//       res = helper(s1, s2, m - 1, n - 1, res + 1);
//     }
//     return Math.max(
//       res,
//       helper(s1, s2, m - 1, n, 0),
//       helper(s1, s2, m, n - 1, 0)
//     );
//   }
// }

// console.log(s2("race", "ace"), 3);

function s(s1, s2) {
  // longest common subsequence
  const m = s1.length;
  const n = s2.length;

  const dp = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    dp.push(row);
  }

  // fill out first col and row
  for (let i = 0; i < m; i++) {
    if (s1[i] === s2[0]) dp[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    if (s1[0] === s2[i]) dp[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (s1[i] === s2[j]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp;
}

function s2(s1, s2) {
  return helper(s1, s2, s1.length, s2.length);

  function helper(s1, s2, m, n) {
    if (!m || !n) return 0;
    if (s1[m - 1] === s2[n - 1]) {
      return 1 + helper(s1, s2, m - 1, n - 1);
    }
    return Math.max(helper(s1, s2, m - 1, n), helper(s1, s2, m, n - 1));
  }
}

console.log(s("abcdaf", "zbcdf"), 4);
console.log(s2("abcdaf", "zbcdf"), 4);
