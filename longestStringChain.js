// Given a list of words, each word consists of English lowercase letters.

//   Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2.  For example, "abc" is a predecessor of "abac".

// A word chain is a sequence of words[word_1, word_2, ..., word_k]with k >= 1, where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.

// Return the longest possible length of a word chain with words chosen from the given list of words.

//   Example 1:

// Input: ["a", "b", "ba", "bca", "bda", "bdca"]
// Output: 4
// Explanation: one of the longest word chain is "a", "ba", "bda", "bdca".

//   Note:

// 1 <= words.length <= 1000
// 1 <= words[i].length <= 16
// words[i] only consists of English lowercase letters.

function solve(words) {
  const map = {};
  const wordList = [];
  for (let word of words) {
    let len = word.length;
    if (!wordList[len]) {
      wordList[len] = [];
    }

    wordList[len].push(word);
    map[word] = 1;
  }

  let max = 1;
  for (let len = 1; len < 17; len++) {
    if (!wordList[len]) continue;
    for (let word of wordList[len]) {
      let preLen = len - 1;
      if (!wordList[preLen]) continue;
      for (let preWord of wordList[preLen]) {
        if (isPre(preWord, word)) {
          map[word] = Math.max(map[word], map[preWord] + 1);
          max = Math.max(max, map[word]);
        }
      }
    }
  }

  return max;

  function isPre(w1, w2) {
    let p1 = 0;
    let p2 = 0;
    let found = false;
    while (p1 < w1.length && p2 < w2.length) {
      if (w1[p1] === w2[p2]) {
        p1++;
        p2++;
      } else if (found) {
        return false;
      } else {
        found = true;
        p2++;
      }
    }
    return true;
  }
}

console.log(solve(["a", "b", "ba", "bca", "bda", "bdca"])); // 4
