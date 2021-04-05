// 10. Regular Expression Matching
// Hard

// 5480

// 833

// Add to List

// Share
// Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

function s(text, pattern) {
  const dp = [];
  for (let i = 0; i <= text.length; i++) {
    dp.push(Array(pattern.length + 1).fill(0));
  }
  // empty pattern matches empty text
  dp[0][0] = 1;
  // fill first row, empty string vs pattern
  for (let i = 1; i <= dp[0].length; i++) {
    if (pattern[i - 1] === "*") {
      dp[0][i] = dp[0][i - 2];
    }
  }
  for (let i = 1; i <= text.length; i++) {
    for (let j = 1; j <= pattern.length; j++) {
      if (text[i - 1] === pattern[j - 1] || pattern[j - 1] === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (pattern[j - 1] === "*") {
        // eg. skip 'ba*' => 'b'
        dp[i][j] = dp[i][j - 2];
        if (pattern[j - 2] === "." || text[i - 1] === pattern[j - 2]) {
          // if char text matches char pattern 'a*' OR char pattern '.*'
          // check row above
          dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
        }
      }
    }
  }

  return dp[text.length][pattern.length] === 1;
}

console.log(s("aa", "a"), false);
console.log(s("aab", "c*a*b"), true);
console.log(s("ab", ".*"), true);
console.log(s("xaabyc", "xa*b.c"), true);

// function s2(str, pattern) {
//   return helper(str, pattern, 0, 0);

//   function helper(text, pattern, pos1, pos2) {
//     if (pos2 === pattern.length) {
//       return pos1 === text.length;
//     }

//     if (pos2 === pattern.length - 1 || pattern[pos2 + 1] !== "*") {
//       return (
//         pos1 < text.length &&
//         (text[pos1] === pattern[pos2] || pattern[pos2] === ".") &&
//         helper(text, pattern, pos1 + 1, pos2 + 1)
//       );
//     }

//     if (helper(text, pattern, pos1, pos2 + 2)) {
//       return true;
//     }

//     while (
//       pos1 < text.length &&
//       (text[pos1] === pattern[pos2] || pattern[pos2] === ".")
//     ) {
//       if (helper(text, pattern, pos1 + 1, pos2 + 2)) {
//         return true;
//       }
//       pos1++;
//     }
//     return false;
//   }
// }

// console.log(s2("xaabyc", "xa*b.c"));
