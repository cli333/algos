// 44. Wildcard Matching
// Hard

// 2820

// 138

// Add to List

// Share
// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "*"
// Output: true
// Explanation: '*' matches any sequence.
// Example 3:

// Input: s = "cb", p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
// Example 4:

// Input: s = "adceb", p = "*a*b"
// Output: true
// Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".

function s(text, pattern) {
  const dp = [];
  for (let i = 0; i <= text.length; i++) {
    dp.push(Array(pattern.length + 1).fill(0));
  }
  dp[0][0] = 1;
  for (let p = 1; p <= pattern.length; p++) {
    if (pattern[p - 1] === "*") {
      dp[0][p] = dp[0][p - 1];
    }
  }
  for (let t = 1; t <= text.length; t++) {
    for (let p = 1; p <= pattern.length; p++) {
      if (text[t - 1] === pattern[p - 1] || pattern[p - 1] === "?") {
        dp[t][p] = dp[t - 1][p - 1];
      } else if (pattern[p - 1] === "*") {
        // move up or move left
        // ignore the * or ignore the t
        dp[t][p] = Math.max(dp[t][p - 1], dp[t - 1][p]);
      }
    }
  }
  return dp[text.length][pattern.length] === 1;
}

console.log(s("aa", "a"), false);
console.log(s("aa", "*"), true);
console.log(s("cb", "?a"), false);
console.log(s("adceb", "*a*b"), true);
console.log(s("abcabczzzde", "*abc???de*"), true);
