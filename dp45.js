// Given an input string(s) and a pattern(p), implement regular expression matching with support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string(not partial).

//   Note:

// s could be empty and contains only lowercase letters a - z.
// p could be empty and contains only lowercase letters a - z, and characters like.or *.
//   Example 1:

// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
//   Example 2:

// Input:
// s = "aa"
// p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'.Therefore, by repeating 'a' once, it becomes "aa".
//   Example 3:

// Input:
// s = "ab"
// p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

function sol(s, p) {
  // s=string, p=pattern
  // if pattern is '' check if the string is '', if not then cannot match
  if (p.length === 0 && s.length === 0) return true;
  // bool for first char of s and p
  let firstMatch = s[0] === p[0] || p[0] === ".";

  // if second char of p is *
  // skip that char and the asterisk, sol(s, p.substring(2))
  // OR
  // dont skip, check the next char of s, sol(s.substring(1))
  if (p.length >= 2 && p[1] === "*") {
    return sol(s, p.substring(2)) || (firstMatch && sol(s.substring(1), p));
  } else {
    // check next chars of s and p
    return firstMatch && sol(s.substring(1), p.substring(1));
  }
}

function sol2(s, p) {
  const dp = [];
  for (let i = 0; i <= s.length; i++) {
    const row = [];
    for (let j = 0; j <= p.length; j++) {
      row.push(false);
    }
    dp.push(row);
  }

  // empty pattern and empty string are a match
  dp[0][0] = true;

  for (let i = 1; i < dp[0].length; i++) {
    if (p[i - 1] === "*") {
      dp[0][i] = dp[0][i - 2];
    }
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (p[j - 1] === "." || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 2];
        if (p[j - 2] === "." || p[j - 2] === s[i - 1]) {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      } else {
        dp[i][j] = false;
      }
    }
  }

  return dp[s.length][p.length];
}

console.log(sol("a", "."), sol2("a", ".")); // true
console.log(sol("aa", "a"), sol2("aa", "a")); // false
console.log(sol("aa", "a*"), sol2("aa", "a*")); // true
console.log(sol("aa", ".*"), sol2("aa", ".*")); // true
console.log(sol("ab", ".*"), sol2("ab", ".*")); // true
console.log(sol("aab", "c*a*b*"), sol2("aab", "c*a*b*")); // true
