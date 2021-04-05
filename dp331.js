// 76. Minimum Window Substring
// Hard

// 6306

// 424

// Add to List

// Share
// Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

// Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"

function s(text, str) {
  const map = str
    .split("")
    .reduce((acc, val) => ({ ...acc, [val]: acc[val] + 1 || 1 }), {});
  let remaining = str.length;
  let l = 0;
  let r = 0;
  let start = 0;
  let len = Infinity;
  while (r < text.length) {
    if (map[text[r]] > 0) remaining--;
    map[text[r]]--;
    r++;
    while (l < r && !remaining) {
      if (r - l < len) {
        len = r - l;
        start = l;
      }
      map[text[l]]++;
      if (map[text[l]] > 0) remaining++;
      l++;
    }
  }
  return len === Infinity ? "" : text.substring(start, start + len);
}

console.log(s("adobecodebanc", "abc"), "banc");
console.log(s("a", "aa"), "");
