// 140. Word Break II
// Hard

// 2912

// 441

// Add to List

// Share
// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input:
// s = "catsanddog"
// wordDict = ["cat", "cats", "and", "sand", "dog"]
// Output:
// [
//   "cats and dog",
//   "cat sand dog"
// ]
// Example 2:

// Input:
// s = "pineapplepenapple"
// wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
// Output:
// [
//   "pine apple pen apple",
//   "pineapple pen apple",
//   "pine applepen apple"
// ]
// Explanation: Note that you are allowed to reuse a dictionary word.

function s(str, wordDict) {
  const memo = {};
  return helper(str);

  function helper(word) {
    if (!word.length) {
      return [""];
    }
    if (memo[word]) return memo[word];

    const res = [];
    for (let w of wordDict) {
      if (word.substring(0, w.length) === w) {
        const substrings = helper(word.substring(w.length));
        memo[word.substring(w.length)] = substrings;
        for (let substring of substrings) {
          res.push(`${w}${substring.length ? " " + substring : substring}`);
        }
      }
    }
    return res;
  }
}

console.log(s("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
console.log(
  s("pineapplepenpineapple", ["apple", "pen", "applepen", "pine", "pineapple"])
);
console.log(s("catsandog", ["cats", "dog", "sand", "and", "cat"]));
