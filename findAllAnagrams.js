// Given a string s and a non - empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20, 100.

// The order of output does not matter.

//   Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
//   Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

const solve = (s, p) => {
  // create map of p
  // loop through s, with window of p length
  // if the current window has all characters as 'map' of p, add the start index of window
  const mapP = map(p);
  const out = [];

  for (let i = 0; i <= s.length - p.length; i++) {
    let window = s.substring(i, i + p.length);
    let mapWindow = map(window);
    if (compare(mapWindow, mapP)) out.push(i);
  }

  return out;
};

function map(s) {
  return s.split("").reduce((a, b) => ({ ...a, [b]: a[b] + 1 || 1 }), {});
}

function compare(map1, map2) {
  for (let char in map1) {
    if (map1[char] !== map2[char]) return false;
  }
  return true;
}

// function perm(s) {
//   if (s.length === 1) return [s];
//   let out = [];
//   for (let i = 0; i < s.length; i++) {
//     let firstLetter = s[i];
//     let rest = s.substring(0, i) + s.substring(i + 1);
//     let inner = perm(rest);

//     for (let p of inner) {
//       out.push(firstLetter + p);
//     }
//   }
//   return out;
// }

console.log(solve("cbaebabacd", "abc"));
console.log(solve("abab", "ab"));
