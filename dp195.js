// longest palindromic substring

function s(str, start = 0, end = str.length - 1, res = 0) {
  if (start > end) return res;
  // reached a 'center'
  if (start === end) return res + 1;
  if (str[start] === str[end]) {
    // match, take the letters
    // match, don't take, move right
    // match, don't take, move left
    return Math.max(
      s(str, start + 1, end - 1, res + 2),
      s(str, start + 1, end, 0),
      s(str, start, end - 1, 0)
    );
  }
  // don't match, move right
  // don't match, move left
  return Math.max(s(str, start + 1, end, 0), s(str, start, end - 1, 0));
}

console.log(s("cdabbac"), 4);
console.log(s("racecar"), 7);
console.log(s("abcda"), 1);
console.log(s("abcdabcd"));

function s2(str) {
  const n = str.length;
  const dp = [];
  let len = 1;
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(null);
    }
    dp.push(row);
  }
  // substring len = 1
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }
  // substring len = 2
  for (let i = 0; i < n - 1; i++) {
    if (str[i] === str[i + 1]) {
      dp[i][i + 1] = true;
      len = 2;
    } else {
      dp[i][i + 1] = false;
    }
  }
  // k is length of substring
  for (let k = 3; k <= n; k++) {
    // fix starting index
    for (let i = 0; i < n - k + 1; i++) {
      // get starting index of substring from
      // index i and length k
      let j = i + k - 1;
      // check for substring from i to j
      // if s[i+1] to s[j-1] is a palindrome
      if (dp[i + 1][j - 1] === true && str[i] === str[j]) {
        dp[i][j] = true;
        len = Math.max(len, k);
      } else {
        dp[i][j] = false;
      }
    }
  }
  return len;
}

console.log(s2("racecar"), 7);
console.log(s2("abcda"), 1);
