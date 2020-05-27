// Question 1

// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

// For example, Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = "coding", word2 = "practice", return 3. Given word1 = "makes", word2 = "coding", return 1.

// Note

// You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

function solve(words, word1, word2) {
  let dist = Infinity;
  let a = -1;
  let b = -1;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) a = i;
    if (words[i] === word2) b = i;
    if (a !== -1 && b !== -1) {
      dist = Math.min(dist, Math.abs(a - b));
    }
  }

  return dist;
}

console.log(
  solve(
    ["practice", "makes", "perfect", "coding", "makes"],
    "coding",
    "practice"
  )
); // 3

console.log(
  solve(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding")
); // 1
