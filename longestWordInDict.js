// Given a list of strings words representing an English Dictionary, find the longest word in words that can be
// built one character at a time by other words in words.If there is more than one possible answer, return the longest word with the smallest lexicographical order.

// If there is no answer, return the empty string.
//   Example 1:
// Input:
// words = ["w", "wo", "wor", "worl", "world"]
// Output: "world"
// Explanation:
// The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
//   Example 2:
// Input:
// words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
// Output: "apple"
// Explanation:
// Both "apply" and "apple" can be built from other words in the dictionary.However, "apple" is lexicographically smaller than "apply".

const solve = (words) => {
  // sort the array
  words.sort((a, b) => (a < b ? -1 : 1));

  let res = ""; // result string
  const builtWords = {};
  for (let w of words) {
    // update built words
    // and update the result string
    // if first word is length 1
    // or built words contains the substring of the current word (everything up to the last letter)
    if (w.length === 1 || builtWords[w.substring(0, w.length - 1)]) {
      if (w.length > res.length) {
        res = w;
      }
      builtWords[w] = true;
    }
  }

  return res;
};

console.log(solve(["w", "wo", "wor", "worl", "world"]));
console.log(solve(["a", "banana", "app", "appl", "ap", "apply", "apple"]));
