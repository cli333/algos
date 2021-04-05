// word break

function s(s, wordDict) {
  const n = s.length;
  const dp = Array(n + 1).fill(0);
  const set = new Set(wordDict);
  dp[0] = 1;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (set.has(s.substring(i, j)) && dp[i]) {
        dp[j] = 1;
      }
    }
  }

  return !!dp[n - 1];
}

console.log(s("leetcode", ["leet", "code"]), true);
console.log(s("applepenapple", ["apple", "pen"]), true);
console.log(s("catsandog", ["cats", "dog", "sand", "and", "cat"]), false);
console.log(s("ab", ["a", "b"]), true);
console.log(s("aaaaaaa", ["aaaa", "aaa"]), false);
