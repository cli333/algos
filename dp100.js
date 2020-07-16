// Given two sentences words1, words2(each represented as an array of strings), and a list of similar word pairs pairs, determine if two sentences are similar.

// For example, words1 = ["great", "acting", "skills"] and words2 = ["fine", "drama", "talent"] are similar, if the similar word pairs are pairs = [["great", "good"], ["fine", "good"], ["acting", "drama"], ["skills", "talent"]].

// Note that the similarity relation is transitive.For example, if “great” and “good” are similar, and “fine” and “good” are similar, then “great” and “fine” are similar.

// Similarity is also symmetric.For example, “great” and “fine” being similar is the same as “fine” and “great” being similar.

//   Also, a word is always similar with itself.For example, the sentences words1 = ["great"], words2 = ["great"], pairs = [] are similar, even though there are no specified similar word pairs.

//     Finally, sentences can only be similar if they have the same number of words.So a sentence like words1 = ["great"] can never be similar to words2 = ["doubleplus", "good"].

function sol(words1, words2, pairs) {
  if (words1.length !== words2.length) return false;

  const graph = {};
  const used = {};
  for (let p of pairs) {
    const [w1, w2] = p;
    graph[w1] ? graph[w1].push(w2) : (graph[w1] = [w2]);
    graph[w2] ? graph[w2].push(w1) : (graph[w2] = [w1]);
    used[w1] = false;
    used[w2] = false;
  }

  for (let i = 0; i < words1.length; i++) {
    if (words1[i] === words2[i]) continue;
    if (!helper(words1[i], words2[i])) return false;
  }

  return true;

  function helper(curWord, target) {
    if (curWord === target) return true;

    for (let nextWord of graph[curWord]) {
      if (!used[nextWord]) {
        used[nextWord] = true;
        if (helper(nextWord, target)) return true;
        used[nextWord] = false;
      }
    }

    return false;
  }
}

console.log(
  sol(
    ["great", "acting", "skills"],
    ["fine", "drama", "talent"],
    [
      ["great", "good"],
      ["fine", "good"],
      ["acting", "drama"],
      ["skills", "talent"],
    ]
  )
); // true
