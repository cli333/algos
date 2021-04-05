// 126. Word Ladder II
// Hard

// 2293

// 278

// Add to List

// Share
// Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:

// Only one letter can be changed at a time
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
// Note:

// Return an empty list if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
// Example 1:

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output:
// [
//   ["hit","hot","dot","dog","cog"],
//   ["hit","hot","lot","log","cog"]
// ]

function s(beginWord, endWord, wordList) {
  const map = {};
  for (let word of wordList) {
    if (diff(beginWord, word)) {
      map[beginWord] ? map[beginWord].push(word) : (map[beginWord] = [word]);
    }
  }

  for (let word of wordList) {
    for (let nextWord of wordList) {
      if (word === endWord) continue;
      if (word !== nextWord && diff(word, nextWord)) {
        map[word] ? map[word].push(nextWord) : (map[word] = [nextWord]);
      }
    }
  }

  const set = new Set();
  set.add(beginWord);
  const res = [];
  helper(beginWord);
  return res;

  function helper(word, list = [beginWord]) {
    if (word === endWord) {
      res.push(list.slice());
      return;
    }

    for (let nextWord of map[word]) {
      if (!set.has(nextWord)) {
        set.add(nextWord);
        list.push(nextWord);
        helper(nextWord, list);
        set.delete(nextWord);
        list.pop();
      }
    }
  }

  function diff(word1, word2) {
    let diffs = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) diffs++;
    }
    return diffs <= 1;
  }
}

console.log(s("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(s("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));

// find shortest transformations

function s2(beginWord, endWord, wordList) {
  const map = {};
  for (let word of wordList) {
    if (diff(beginWord, word)) {
      map[beginWord] ? map[beginWord].push(word) : (map[beginWord] = [word]);
    }
  }

  for (let word of wordList) {
    for (let nextWord of wordList) {
      if (word === endWord) continue;
      if (word !== nextWord && diff(word, nextWord)) {
        map[word] ? map[word].push(nextWord) : (map[word] = [nextWord]);
      }
    }
  }

  // bfs, find the min depth/levels x
  // dfs for depth x

  const x = bfs(beginWord);
  const res = [];
  dfs(beginWord, [beginWord], 0);
  return res;

  function dfs(word, list, depth) {
    if (depth > x) return;
    if (word === endWord) {
      res.push(list.slice());
      return;
    }

    for (let nextWord of map[word]) {
      list.push(nextWord);
      depth++;
      dfs(nextWord, list, depth);
      depth--;
      list.pop();
    }
  }

  function bfs(word) {
    const set = new Set();
    const q = [{ word, lvl: 0 }];
    while (q.length) {
      const nextWord = q.shift();
      if (nextWord.word === endWord) return nextWord.lvl;
      for (let w of map[nextWord.word]) {
        if (set.has(w)) continue;
        set.add(w);
        q.push({ word: w, lvl: nextWord.lvl + 1 });
      }
    }
  }

  function diff(word1, word2) {
    let diffs = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) diffs++;
    }
    return diffs <= 1;
  }
}

console.log(s2("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
