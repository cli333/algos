// 3. Longest Substring Without Repeating Characters
// Medium

// 13463

// 697

// Add to List

// Share
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

function s(str) {
  // two pointers
  // window
  const map = {};
  let lo = 0;
  let hi = 0;
  let len = 0;
  let maxLen = 0;
  while (hi < str.length) {
    const char = str[hi];
    map[char] ? map[char]++ : (map[char] = 1);
    hi++;
    len++;

    while (map[char] > 1 && lo < hi) {
      map[str[lo]]--;
      lo++;
      len--;
    }

    // if (map[char] > 1) {
    //   while (lo < hi && str[lo] !== char) {
    //     map[str[lo]]--;
    //     lo++;
    //     len--;
    //   }
    //   map[str[lo]]--;
    //   lo++;
    //   len--;
    // }

    maxLen = Math.max(maxLen, len);
  }

  return maxLen;
}

console.log(s("abcabcbb"));
console.log(s("bbbbb"));
