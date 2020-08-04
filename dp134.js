// Given two words(beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:

// Only one letter can be changed at a time
// Each transformed word must exist in the word list.Note that beginWord is not a transformed word.
//   Note:

// Return an empty list if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non - empty and are not the same.
//   Example 1:

// Input:
// beginWord = "hit",
//   endWord = "cog",
//   wordList = ["hot", "dot", "dog", "lot", "log", "cog"]

// Output:
// [
//   ["hit", "hot", "dot", "dog", "cog"],
//   ["hit", "hot", "lot", "log", "cog"]
// ]
// Example 2:

// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot", "dot", "dog", "lot", "log"]

// Output: []

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

function sol(
  beginWord = "hit",
  endWord = "cog",
  wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
) {
  // build adjacency list of words, one letter away
  const map = {};
  const set = new Set();
  set.add(beginWord);
  build(beginWord);
  for (let word of wordList) {
    build(word);
  }
  // try to get to end word
  const res = [];
  helper(beginWord, [beginWord]);
  return res
    .sort((a, b) => (a.length < b.length ? -1 : 1))
    .reduce((a, b) => {
      if (!a.length || a[a.length - 1].length === b.length) a.push(b);
      return a;
    }, []);

  function helper(curWord, list) {
    if (curWord === endWord) {
      res.push(list.slice());
      return;
    }

    for (let nextWord of map[curWord]) {
      if (!set.has(nextWord)) {
        set.add(nextWord);
        list.push(nextWord);
        helper(nextWord, list);
        list.pop();
        set.delete(nextWord);
      }
    }
  }

  function build(word) {
    for (let word2 of wordList) {
      let skips = 1;
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== word2[i]) skips--;
        if (skips < 0) break;
      }
      if (skips >= 0 && word2 !== word)
        map[word] ? map[word].push(word2) : (map[word] = [word2]);
    }
  }
}

console.log(sol(), [
  ["hit", "hot", "dot", "dog", "cog"],
  ["hit", "hot", "lot", "log", "cog"],
]);
