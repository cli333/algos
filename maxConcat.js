// Given an array of strings arr.String s is a concatenation of a sub - sequence of arr which have unique characters.

// Return the maximum possible length of s.

//   Example 1:

// Input: arr = ["un", "iq", "ue"]
// Output: 4
// Explanation: All possible concatenations are "", "un", "iq", "ue", "uniq" and "ique".
// Maximum length is 4.
// Example 2:

// Input: arr = ["cha", "r", "act", "ers"]
// Output: 6
// Explanation: Possible solutions are "chaers" and "acters".
//   Example 3:

// Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
// Output: 26

function solve(arr) {
  let res = 0;
  maxUnique(arr, 0, "");
  return res;

  function maxUnique(arr, idx, current) {
    if (idx > arr.length && uniqueCharCount(current) > res) {
      res = current.length;
      return;
    }
    if (idx > arr.length) return;

    // simulate not adding the char
    maxUnique(arr, idx + 1, current);
    // simulate adding the char
    maxUnique(arr, idx + 1, current + arr[idx]);
  }

  function uniqueCharCount(s) {
    const map = {};
    for (let char of s.split("")) {
      if (char in map) return -1;
      map[char] = true;
    }
    return s.length;
  }
}

console.log(solve(["un", "iq", "ue"]));
