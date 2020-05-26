// Given two strings, find the number of common characters between them.

//   Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

//   Hints

// split()
// hasOwnProperty()

// Input / Output

// [time limit]4000ms(js)
// [input] string s1

// A string consisting of lowercase latin letters a - z.

// Guaranteed constraints:

// 1 ≤ s1.length ≤ 15.

// [input] string s2

// A string consisting of lowercase latin letters a - z.

// Guaranteed constraints:

// 1 ≤ s2.length ≤ 15.

// [output] integer

function solve(s1, s2) {
  const map1 = s1
    .split("")
    .reduce((acc, val) => ({ ...acc, [val]: acc[val] + 1 || 1 }), {});
  const map2 = s2
    .split("")
    .reduce((acc, val) => ({ ...acc, [val]: acc[val] + 1 || 1 }), {});

  let count = 0;
  for (let char in map1) {
    if (map2[char]) {
      count += map1[char] < map2[char] ? map1[char] : map2[char];
    }
  }

  return count;
}

console.log(solve("aabcc", "adcaa")); // 3
