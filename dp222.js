// 97. Interleaving String
// Hard

// 1851

// 103

// Add to List

// Share
// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// An interleaving of two strings s and t is a configuration where they are divided into non-empty substrings such that:

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.

// Example 1:

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true
// Example 2:

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// Output: false

function s(s1, s2, s3) {
  // must alternate between s1 and s2
  const l1 = s1.length;
  const l2 = s2.length;
  const l3 = s3.length;

  const memo = {};
  return helper(0, 0, 0);

  function helper(p1, p2, p3) {
    if (p3 === l3) {
      return p1 === l1 && p2 === l2 ? true : false;
    }

    const key = `${p1}-${p2}-${p3}`;
    if (memo[key]) return memo[key];

    if (p1 === l1) {
      return (memo[key] =
        s2[p2] === s3[p3] ? helper(p1, p2 + 1, p3 + 1) : false);
    }
    if (p2 === l1) {
      return (memo[key] =
        s1[p1] === s3[p3] ? helper(p1 + 1, p2, p3 + 1) : false);
    }

    let one = false;
    let two = false;
    if (s1[p1] === s3[p3]) {
      one = helper(p1 + 1, p2, p3 + 1);
    }
    if (s2[p2] === s3[p3]) {
      two = helper(p1, p2 + 1, p3 + 1);
    }

    return (memo[key] = one || two);
  }
}

console.log(s("aabcc", "dbbca", "aadbbcbcac"), true);
console.log(s("aabcc", "dbbca", "aadbbbaccc"), false);

function s2(s1, s2, s3) {
  const dp = [];
  for (let i = 0; i <= s1.length; i++) {
    const row = [];
    for (let j = 0; j <= s2.length; j++) {
      row.push(false);
    }
    dp.push(row);
  }

  // two empty strings can interleave to an empty string
  dp[0][0] = true;

  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      const l = i + j - 1;
      if (!i && !j) {
        continue;
      } else if (!i) {
        if (s3[l] === s2[j - 1]) {
          dp[i][j] = dp[i][j - 1];
        }
      } else if (!j) {
        if (s1[i - 1] === s3[l]) {
          dp[i][j] = dp[i - 1][j];
        }
      } else {
        dp[i][j] =
          (s1[i - 1] === s3[l] ? dp[i - 1][j] : false) ||
          (s2[j - 1] === s3[l] ? dp[i][j - 1] : false);
      }
    }
  }

  return dp[dp.length - 1][dp[0].length - 1];
}

console.log(s2("aabcc", "dbbca", "aadbbcbcac"), true);
console.log(s2("aabcc", "dbbca", "aadbbbaccc"), false);
console.log(s2("aab", "axy", "aaxaby"), true);
console.log(s2("aab", "axy", "abaaxy"), false);
