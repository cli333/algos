// longest common subsequence

function s(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  const dp = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    dp.push(row);
  }
  // for pointers if trimming s1, pick s2 || if trimming s2, pick s1
  // if both (chars MATCH), pick either

  //   const pointers = JSON.parse(JSON.stringify(dp));

  // chars match, add 1, trim both
  // chars dont match, trim 1 at a time, take max

  // fill first col and first row
  for (let i = 0; i < n; i++) {
    if (s1[0] === s2[i]) {
      dp[0][i] = 1;
    } else {
      dp[0][i] = dp[0][i - 1] ? dp[0][i - 1] : 0;
    }
  }

  for (let i = 1; i < m; i++) {
    if (s1[i] === s2[0]) {
      dp[i][0] = 1;
    } else {
      dp[i][0] = dp[i - 1][0] ? dp[i - 1][0] : 0;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (s2[i] === s1[j]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp;
}

console.log(s("xacbea", "adca"));
