// longest palindromic substring

function sol(s) {
  const dp = [];
  const n = s.length;
  let maxLen = 1;
  let start = 0;

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(null);
    }
    dp.push(row);
  }

  // fill for substrings of len 1 and 2
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      maxLen = 2;
      start = i;
    } else {
      dp[i][i + 1] = false;
    }
  }

  for (let k = 3; k <= n; k++) {
    for (let i = 0; i < n - k + 1; i++) {
      let j = i + k - 1;
      if (dp[i + 1][j - 1] === true && s[i] === s[j]) {
        dp[i][j] = true;
        if (k > maxLen) {
          maxLen = k;
          start = i;
        }
      } else {
        dp[i][j] = false;
      }
    }
  }

  let res = "";
  while (maxLen > 0) {
    res += s[start];
    start++;
    maxLen--;
  }

  return { res, dp };
}

console.log(sol("babad"));
console.log(sol("cbbd"));
