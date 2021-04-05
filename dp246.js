// longest palindromic substring

function s(str) {
  const n = str.length;
  const dp = [];
  let maxLen = 1;
  let palindromeBeginsAt = 0;
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    dp.push(row);
  }

  // build table of palindromes

  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  for (let i = 0; i < n - 1; i++) {
    if (str[i] === str[i + 1]) {
      dp[i][i + 1] = 1;
      palindromeBeginsAt = i;
      maxLen = 2;
    }
  }

  for (let len = 3; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      const j = i + len - 1;
      // begin and end letters match && substring between begin and end is a palindrome
      if (str[i] === str[j] && dp[i + 1][j - 1]) {
        dp[i][j] = 1;
        maxLen = len;
        palindromeBeginsAt = i;
      }
    }
  }

  return str.substring(palindromeBeginsAt, palindromeBeginsAt + maxLen);
}

console.log(s("bananas"), "anana");
console.log(s("racecar"), "racecar");
