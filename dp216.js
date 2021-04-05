// 91. Decode Ways
// Medium

// 3939

// 3373

// Add to List

// Share
// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

// Given a string s containing only digits, return the number of ways to decode it.

// The answer is guaranteed to fit in a 32-bit integer.

// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: s = "226"
// Output: 3
// Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

function s(s) {
  //   const map = "$abcdefghijklmnopqrstuvwxyz"
  //     .split("")
  //     .reduce((acc, char, idx) => ({ ...acc, [char]: idx }), {});

  return helper(0);

  function helper(i) {
    if (i >= s.length) {
      return 1;
    }
    if (s[i] === "0") {
      return 0;
    }

    let ways = helper(s, i + 1);
    if (i + 2 <= s.length && Number(s.substring(i, i + 2)) <= 26) {
      ways += helper(i + 2);
    }
    return ways;
  }
}

console.log(s("12"), 2);
console.log(s("226"), 3);

function s2(s) {
  const dp = Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] === "0" ? 0 : 1;
  for (let i = 2; i <= s.length; i++) {
    if (s[i - 1] !== 0) {
      dp[i] += dp[i - 1];
    }

    if (Number(s.substring(i - 2, i)) <= 26) {
      dp[i] += dp[i - 2];
    }

    // if (s[i - 2] === "1" || (s[i - 2] === "2" && s[i - 1] <= 6)) {
    //   dp[i] += dp[i - 2];
    // }
  }
  return dp;
}

console.log(s2("12"), 2);
console.log(s2("226"), 3);
