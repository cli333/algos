// Given a string, find the length of the longest substring without repeating characters.

//   Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

function sol(s) {
  const chars = new Set();
  let lo = 0;
  let hi = 0;
  let maxLen = 1;

  for (hi; hi < s.length; hi++) {
    const char = s[hi];
    if (chars.has(char)) {
      while (lo < hi && s[lo] !== char) {
        chars.delete(s[lo]);
        lo++;
      }
      lo++;
    } else {
      chars.add(char);
    }
    maxLen = Math.max(maxLen, hi - lo + 1);
  }

  return maxLen;
}

console.log(sol("abcabcbb"));
