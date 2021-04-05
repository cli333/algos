// Leetcode: 340. Longest Substring with At Most K Distinct Characters
// Given a string, find the length of the longest substring T that contains at most k distinct characters.
// For example, Given s = “eceba” and k = 2,
// T is "ece" which its length is 3.

function s(str, k) {
  let l = 0;
  let r = 0;
  let distinct = 0;
  const map = {};
  let len = 0;
  let start = 0;
  while (r < str.length) {
    if (!(str[r] in map)) distinct++;
    map[str[r]] = map[map[str]] + 1 || 1;
    r++;

    // shrink l, while distinct chars > k
    while (l < r && distinct > k) {
      if (map[str[l]] === 0) {
        distinct--;
      } else {
        map[str[l]]--;
      }
      l++;
    }

    // there are only k distinct chars now, so calculate max
    if (r - l > len) {
      len = r - l;
      start = l;
    }
  }
  return str.substring(start, start + len);
}

console.log(s("eceba", 2));
