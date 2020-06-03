// Given a non - empty string s and a dictionary wordDict containing a list of non - empty words, determine if s can be segmented into a space - separated sequence of one or more dictionary words.

//   Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
//   Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
//   Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

function solve(s, wordDict) {
  // array of idxs, 0,1-s.length
  const dp = new Array(s.length + 1).fill(false);
  // at idx = 0, assume that can be segmented into some elements in the wordDict
  dp[0] = true;
  const wordSet = wordDict.reduce((acc, val) => ({ ...acc, [val]: true }), {});

  for (let len = 1; len <= s.length; len++) {
    for (let i = 0; i < len; i++) {
      let sub = s.substring(i, len);
      if (dp[i] && wordSet[sub]) {
        dp[len] = true;
        break;
      }
    }
  }

  return dp[s.length];

  // // runtime, o(2^n-1)
  // const wordSet = wordDict.reduce((acc, val) => ({ ...acc, [val]: true }), {});
  //
  // return dfs(s, wordSet);
  // function dfs(s, set, memo = {}) {
  //   if (!s.length) return true;
  //   if (memo[s]) return memo[s];
  //   for (let i = 0; i < s.length; i++) {
  //     let sub = s.substring(0, i + 1);
  //     if (sub in set && dfs(s.substring(i + 1), set, memo)) {
  //       memo[sub] = true;
  //       return true;
  //     }
  //   }
  //   memo[s] = false;
  //   return false;
  // }
}

console.log(solve("leetcode", ["leet", "code"]));
console.log(solve("applepenapple", ["apple", "pen"]));
console.log(solve("catsandog", ["cats", "dog", "sand", "and", "cat"]));
