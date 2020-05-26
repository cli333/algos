// Given an array of strings, group anagrams together.

//   Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
//   Output:
// [
//   ["ate", "eat", "tea"],
//   ["nat", "tan"],
//   ["bat"]
// ]

function solve(words) {
  const map = {};
  const out = [];
  let idx = 0;

  for (let word of words) {
    const sortedWord = word.split("").sort().join("");

    // have to use 'blank' in 'blank', not map[sortedWord] because first word is indexed at 0, which is coerced to false
    if (sortedWord in map) {
      out[map[sortedWord]].push(word);
    } else {
      map[sortedWord] = idx;
      out[idx] = [word];
      idx++;
    }
  }

  return out;
}

console.log(solve(["eat", "tea", "tan", "ate", "nat", "bat"]));
