// Given a list of words(without duplicates), please write a program that returns all concatenated words in the given list of words.
// A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

//   Example:
// Input: ["cat", "cats", "catsdogcats", "dog", "dogcatsdog", "hippopotamuses", "rat", "ratcatdogcat"]

// Output: ["catsdogcats", "dogcatsdog", "ratcatdogcat"]

// Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats";
// "dogcatsdog" can be concatenated by "dog", "cats" and "dog";
// "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

function sol(words) {
  // o(n^2 * m^2) time, n = words.length, m = set.length
  const res = [];
  const set = new Set();
  for (let w of words) {
    set.add(w);
  }
  for (let w of words) {
    // remove the word, so can check against all other words, otherwise will always return true
    set.delete(w);
    if (canBreak(w)) {
      res.push(w);
    }
    // add back
    set.add(w);
  }
  return res;

  function canBreak(word) {
    if (set.size === 0) return false;
    const n = word.length;
    if (n === 0) return false;
    const dp = Array(n + 1).fill(false);
    // word length 0 = true
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        if (!dp[j]) continue;
        if (set.has(word.substring(j, i))) {
          dp[i] = true;
        }
      }
    }

    return dp[n];
  }
}

console.log(
  sol([
    "cat",
    "cats",
    "catsdogcats",
    "dog",
    "dogcatsdog",
    "hippopotamuses",
    "rat",
    "ratcatdogcat",
  ]),
  ["catsdogcats", "dogcatsdog", "ratcatdogcat"]
);
