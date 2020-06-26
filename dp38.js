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
// Example 2:

// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// Output: []

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

function sol(beginWord, endWord, wordList) {
  // do bfs to find the next transformations of each word, all words that are one char away (CREATE GRAPH structure)
  // do dfs, to find the next transformation

  const dict = new Set();
  wordList.forEach((word) => dict.add(word));
  if (!dict.has(endWord)) return res;
  // map contains word : arr of all other words that are one distance away
  const map = {};
  const startSet = new Set();
  startSet.add(beginWord);
  bfs(startSet);

  // for (let char in map) {
  //   map[char] = map[char].filter((w) => w !== char);
  // }

  console.log(map);

  const res = [];
  dfs(beginWord, [beginWord]);
  return res;

  function dfs(curWord, curList, used) {
    if (curWord === endWord) {
      res.push(curList.slice());
      return;
    }

    if (!map[curWord]) return;

    for (let nextWord of map[curWord]) {
      curList.push(nextWord);
      dfs(nextWord, curList);
      curList.pop();
    }
  }

  function bfs(startSet) {
    if (startSet.size === 0) return;
    const temp = new Set();
    // remove starting word from dict
    dict.delete(...startSet);
    let finish = false;

    for (let s of startSet) {
      const charArr = s.split("");
      for (let i = 0; i < charArr.length; i++) {
        let oldChar = charArr[i];
        for (let c of "abcdefghijklmnopqrstuvwxyz".split("")) {
          charArr[i] = c;
          let word = charArr.join("");
          if (dict.has(word)) {
            if (word === endWord) {
              finish = true;
            } else {
              temp.add(word);
            }

            if (!map[s]) {
              map[s] = [];
            }

            map[s] = [...map[s], word];
          }
        }
        charArr[i] = oldChar;
      }
    }

    if (!finish) {
      bfs(temp);
    }
  }
}
//---------------------------------------------------

function sol2(begin, end, words) {
  const map = {};
  // generate all words one edit distance away
  for (let word of words) {
    if (helper1(begin, word) === 1) {
      if (!map[begin]) {
        map[begin] = [word];
      } else {
        map[begin].push(word);
      }
    }
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (words[i] !== end && helper1(words[i], words[j]) === 1) {
        if (!map[words[i]]) {
          map[words[i]] = [words[j]];
        } else {
          map[words[i]].push(words[j]);
        }
      }
    }
  }

  const res = [];
  const used = words.reduce((acc, val) => ({ ...acc, [val]: false }), {});
  helper2(begin, [begin], used);
  return res;

  function helper1(a, b, m = a.length, n = b.length) {
    if (!m) return n;
    if (!n) return m;
    if (a[m - 1] === b[n - 1]) {
      return helper1(a, b, m - 1, n - 1);
    }

    return (
      1 +
      Math.min(
        helper1(a, b, m - 1, n),
        helper1(a, b, m, n - 1),
        helper1(a, b, m - 1, n - 1)
      )
    );
  }

  function helper2(curWord, list, used) {
    if (curWord === end) {
      res.push(list.slice());
      return;
    }

    for (let nextWord of map[curWord]) {
      if (used[nextWord] === false) {
        used[nextWord] = true;
        list.push(nextWord);
        helper2(nextWord, list, used);
        list.pop();
        used[nextWord] = false;
      }
    }
  }
}

// console.log(sol("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(sol2("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
