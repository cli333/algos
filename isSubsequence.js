// Given sPointer string s and a string t, check if s is subsequence of t.

// You may assume that there is only lower case English letters in both s and t.t is potentially a very long(length ~= 500, 000) string, and s is a short string(<= 100).

// A subsequence of a string is a new string which is formed from the original string by deleting some(can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// s = "abc", t = "ahbgdc"

// Return true.

//   Example 2:
// s = "axc", t = "ahbgdc"

// Return false.

const solve = (s, t) => {
  if (!s.length) return true;

  let sPointer = 0;
  let tPointer = 0;

  while (tPointer < t.length) {
    // if s char = t char, increment s pointer
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
      // reached end of s ? => true
      if (sPointer === s.length - 1) return true;
    }

    tPointer++;
  }

  return false;
};

console.log(solve("abc", "ahbgdceee"));
console.log(solve("axc", "ahbgdc"));
