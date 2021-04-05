// // find longest palindromic substring

// The time complexity can be reduced by storing results of subproblems.The idea is similar to this post.We maintain a boolean table[n][n] that is filled in bottom up manner.The value of table[i][j] is true, if the substring is palindrome, otherwise false.To calculate table[i][j], we first check the value of table[i + 1][j - 1], if the value is true and str[i] is same as str[j], then we make table[i][j] true.Otherwise, the value of table[i][j] is made false.

function solve(str) {
  const dp = [...new Array(str.length)];

  for (let i = 0; i < dp.length; i++) {
    const row = [...new Array(str.length)].fill(false);
    dp[i] = row;
  }

  // all substrings of length 1 are palindromes/ true
  for (let i = 0; i < dp.length; i++) {
    dp[i][i] = true;
  }

  let start = 0;
  let maxLen = 0;
  // check substrings of length 2
  for (let i = 0; i < dp.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLen = 2;
    }
  }

  // check all lengths greather than 2
  for (let k = 2; k < dp.length; k++) {
    for (let i = 0; i < dp.length - k + 1; i++) {
      let j = i + k - 1;
      if (dp[i + 1][j - 1] && str[i] === str[j]) {
        dp[i][j] = true;
        if (k > maxLen) {
          start = i;
          maxLen = k;
        }
      }
    }
  }

  let res = str[start];
  start++;
  maxLen--;
  while (maxLen) {
    res += str[start];
    start++;
    maxLen--;
  }

  console.log(dp);
  return res;
}

console.log(solve("baac"));
console.log(solve("forgeeksskeegfor")); // geeksskeeg
