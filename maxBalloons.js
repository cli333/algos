// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once.Return the maximum number of instances that can be formed.

//   Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "leetcode"
// Output: 0

const solve = (text) => {
  const balloon = "balloon";
  const map = {};

  for (let char of text.split("")) {
    map[char] = map[char] + 1 || 1;
  }

  let min = map["b"];

  // cannot find 'b' return 0
  if (!min) return 0;

  // the min is equal
  for (let char in map) {
    min = Math.min(min, map[char]);
  }

  return min;
};

console.log(solve("nlaebolko")); // 1
console.log(solve("loonbalxballpoon")); // 2
console.log(solve("leetcode")); // 0
console.log(solve("blalonoblalonoblalono")); // 3
