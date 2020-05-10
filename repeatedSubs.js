// Given a non - empty string check if it can be constructed by taking a substring of it and appending multiple
// copies of the substring together.You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

// Example 1:

// Input: "abab"
// Output: True
// Explanation: It's the substring "ab" twice.
// Example 2:

// Input: "aba"
// Output: False
// Example 3:

// Input: "abcabcabcabc"
// Output: True
// Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

const solve = (s) => {
  let len = s.length;

  for (let i = 0; i < len; i++) {
    let sub = s.substring(0, i);
    // check if sub evenly 'divides' into s
    // check if sub * (multiple) === s
    let rem = s.length % i;
    let mult = s.length / i;
    if (rem === 0 && sub.repeat(mult) === s) {
      return true;
    }
  }
  return false;
};

console.log(solve("abab"));
console.log(solve("aba"));
console.log(solve("abcabcabcabc"));
