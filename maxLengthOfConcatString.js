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

const solve = (strings) => {
  if (strings.length <= 1) return strings[0].length || 0;

  // build obj containing map of all strings
  const obj = {};

  for (let s of strings) {
    obj[s] = map(s);
  }

  let max = 0;

  // loop through each string and concat all
  for (let s of strings) {
    maxUnique(strings, 0, s);
  }

  return max;

  // UTILS

  function maxUnique(strings, idx, builtString) {
    if (idx > strings.length - 1) return;

    // if current string contains same letters as built string, skip
    // else concat onto the built string, reset the max if necessary

    if (isUnique(builtString, obj[strings[idx]])) {
      builtString += strings[idx];
      max = Math.max(builtString.length, max);
    }

    maxUnique(strings, idx + 1, builtString);
  }

  function map(string) {
    return string.split("").reduce((acc, val) => ({ ...acc, [val]: true }), {});
  }

  function isUnique(string, map) {
    for (let char of string.split("")) {
      if (char in map) return false;
    }
    return true;
  }
};

console.log(solve(["un", "iq", "ue"]));
console.log(solve(["cha", "r", "act", "ers"]));
console.log(solve(["abcdefghijklmnopqrstuvwxyz"]));
