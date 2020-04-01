// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order.The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

//   Example 1:

// Input: words = ["hello", "leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
//   Example 2:

// Input: words = ["word", "world", "row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

const verify = (words, order) => {
  const charArr = {};
  for (let i = 0; i < order.length; i++) {
    charArr[order[i]] = i;
  }
  for (let i = 1; i < words.length; i++) {
    if (!compare(words[i - 1], words[i], charArr)) return false;
  }
  return true;
};

function compare(word1, word2, map) {
  let i = 0;
  let j = 0;

  while (i < word1.length && j < word2.length) {
    let firstChar = word1[i];
    let secondChar = word2[j];
    if (map[firstChar] < map[secondChar]) break;
    if (map[firstChar] > map[secondChar]) return false;
    i++;
    j++;
  }

  return true;
}

console.log(verify(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")); // true
console.log(verify(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")); // false
