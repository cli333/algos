// Given two words(beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list.
//   Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non - empty and are not the same.
//   Example 1:

// Input:
// beginWord = "hit",
//   endWord = "cog",
//   wordList = ["hot", "dot", "dog", "lot", "log", "cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.
// Example 2:

// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot", "dot", "dog", "lot", "log"]

// Output: 0

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

const solve = (beginWord, endWord, wordList) => {
  // bfs
  const wordMap = wordList.reduce((a, b) => ({ ...a, [b]: true }), {});
  // word list doesnt contain the ending word
  if (!wordMap[endWord]) return 0;

  const q = [beginWord];
  let level = 1;

  while (q.length) {
    // shift from q
    // look at words in wordMap that are one letter away
    // push that word on the q
    for (let i = 0; i < q.length; i++) {
      let curWord = q.shift();
      const charArr = curWord.split("");
      for (let j = 0; j < charArr.length; j++) {
        let originalChar = charArr[j];
        for (let k = 0; k < 26; k++) {
          // loop through alphabet
          // compare the originalChar to the letter in alphabet
          const abc = String.fromCharCode(97 + k);
          if (originalChar === abc) continue;
          charArr[j] = abc;
          const newWord = charArr.join("");
          if (newWord === endWord) return level + 1;
          if (wordMap[newWord]) {
            q.push(newWord);
            wordMap[newWord] = false;
          }
        }
        charArr[j] = originalChar;
      }
    }
    level++;
  }

  return 0;
};

console.log(solve("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solve("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
