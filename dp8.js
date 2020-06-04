// given a sequence, find the longest palindromic subsequence in it

function solve(s, start = 0, end = s.length - 1) {
  // s is one character, or they've arrived at the same char
  if (start === end) {
    return 1;
  }
  // s is two characters
  if (s[start] === s[end] && start + 1 === end) {
    return 2;
  }

  // char at start === char at end
  if (s[start] === s[end]) {
    return 2 + solve(s, start + 1, end - 1);
  }

  // if first and last char do not match, check start+1, and end-1
  return Math.max(solve(s, start + 1, end), solve(s, start, end - 1));
}

function solve2(s) {
  const dp = [];
  for (let r = 0; r <= s.length; r++) {
    const row = [];
    for (let c = 0; c <= s.length; c++) {
      row.push(0);
    }
    dp.push(row);
  }

  for (let r = 0; r < s.length; r++) {
    dp[r][r] = 1;
  }

  // bottom left matrix unused
  // if i === j, 2 + diagonal left
  // else max(left, bottom)

  for (let l = 2; l <= s.length; l++) {
    for (let i = 0; i < s.length; i++) {
      // j === char at end of substr
      let j = l + i - 1;
      if (l === 2 && s[i] === s[j]) {
        dp[i][j] = 2;
      } else if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  // backtrack from end of row 0 to find the sequence
  // if s[r] === s[c], move diagonal left
  // if (left === s[r]) move left
  // if (bottom === s[r]) move bottom

  let len = dp[0][s.length - 1];
  let r = 0;
  let c = s.length - 1;
  let out = "";

  //   while (len) {
  //     if (s[r] === s[c]) {
  //       out += s[r];
  //       len--;
  //     } else if (dp[r][c - 1] === dp[r][c]) {
  //       c--;
  //     } else {
  //       r--;
  //     }
  //   }

  return dp[0][s.length - 1];
}

console.log(solve("babcbab"));
console.log(solve("zaxbrzbda"));
console.log(solve2("babcbab"));
console.log(solve2("zaxbrzbda"));
