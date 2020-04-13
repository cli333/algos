// Given two strings s and t, write a function to determine if t is an anagram of s.

//   Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

const valid = (s, t) => {
  if (s.length !== t.length) return false;

  const map = {};

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];
    // increment in map from s
    // decrement in map from t

    if (map[charS]) {
      map[charS]++;
    } else {
      map[charS] = 1;
    }

    if (map[charT]) {
      map[charT]--;
    } else {
      map[charT] = -1;
    }
  }

  for (let key in map) {
    if (map[key] !== 0) return false;
  }

  return true;
};

console.log(valid("anagram", "nagaram"));
console.log(valid("rat", "car"));
