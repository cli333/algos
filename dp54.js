// longest palindromic subsequence

function sol(s, start = 0, end = s.length) {
  if (end === 1) return 1;
  if (end === 0) return 0;
  if (s[start] === s[start + end - 1]) {
    return 2 + sol(s, start + 1, end - 2);
  }
  return Math.max(sol(s, start + 1, end - 1), sol(s, start, end - 1));
}

function sol2(s) {
  const dp = [];
  for (let i = 0; i <= s.length; i++) {
    const row = [];
    for (let j = 0; j <= s.length; j++) {
      row.push(0);
    }
    dp.push(row);
  }

  // all subsequences of length 1 are palindromes and have a length of 1
  for (let i = 0; i <= s.length; i++) {
    dp[i][i] = 1;
  }

  for (let l = 2; l <= s.length; l++) {
    for (let i = 0; i <= s.length - l + 1; i++) {
      let j = i + l - 1;
      if (l === 2 && s[i] === s[j]) {
        dp[i][j] = 2;
      } else if (s[i] === s[j]) {
        // left bottom diagonal
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        // left vs bottom
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp;
}

console.log(sol("bbbab"), sol("racecar"), sol("helloll"));
console.log(sol2("bbbab"));
