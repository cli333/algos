// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non - empty word in str.

//   Example 1:

// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true

// Example 2:

// Input: pattern = "abba", str = "dog cat cat fish"
// Output: false

// Example 3:

// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false

const solve = (pattern, str) => {
  const map = {};
  const words = str.split(" ");

  if (words.length !== pattern.length) return false;

  for (let i = 0; i < words.length; i++) {
    let key = pattern[i];
    let value = words[i];

    if (!map[key]) {
      map[key] = value;
    }

    if (map[key] && map[key] !== value) {
      return false;
    }
  }

  return true;
};

console.log(solve("abba", "dog cat cat dog")); // true
console.log(solve("abba", "dog cat cat fish")); // false
