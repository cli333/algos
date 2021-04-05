// 139. Word Break
// Medium

// 6084

// 288

// Add to List

// Share
// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

function s(str, wordDict) {
  const set = new Set();
  for (let word of wordDict) set.add(word);
  return helper(str);

  function helper(word) {
    if (set.has(word)) return true;
    for (let i = 1; i <= word.length; i++) {
      const left = word.substring(0, i);
      const right = word.substring(i);
      if (set.has(left) && helper(right)) {
        return true;
      }
    }
    return false;
  }
}

function s2(str, wordDict) {
  const n = str.length;
  const set = new Set();
  for (let word of wordDict) set.add(word);
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (set.has(str.substring(j, i)) && dp[j]) {
        dp[i] = 1;
      }
    }
  }
  return !!dp[n];
}

console.log(s("leetcode", ["leet", "code"]), true);
console.log(s("applepenapple", ["apple", "pen"]), true);
console.log(s("catsandog", ["cats", "dog", "sand", "and", "cat"]), false);
console.log(s("goalspecial", ["go", "goal", "goals", "special"]), true);
console.log(s2("leetcode", ["leet", "code"]), true);
console.log(s2("applepnapple", ["apple", "pen"]), false);
console.log(s2("catsandog", ["cats", "dog", "sand", "and", "cat"]), false);
console.log(s2("goalspecial", ["go", "goal", "goals", "special"]), true);
console.log(s2("abcdef", ["ab", "cd", "ef"]), true);
