// Given a string s, find the longest palindromic substring in s.You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
//   Example 2:

// Input: "cbbd"
// Output: "bb"

const solve = (s) => {
  if (!s || s.length < 1) return "";

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    // check for two conditions
    // odd length palindrome
    // expand from same i
    let len1 = expandFromMiddle(s, i, i);
    // even length palindrome
    // expand from i and i + 1
    let len2 = expandFromMiddle(s, i, i + 1);
    // compare lengths
    let len = Math.max(len1, len2);
    // len > end - start, reset boundaries
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);

  function expandFromMiddle(s, left, right) {
    if (!s || left > right) return 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }
};

console.log(solve("babad"));
console.log(solve("cbbd"));
