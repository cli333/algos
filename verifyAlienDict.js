const solve = (words, order) => {
  const abc = order
    .split("")
    .reduce((acc, val, idx) => ({ ...acc, [val]: idx }), {});

  for (let i = 1; i < words.length; i++) {
    let curWord = words[i - 1];
    let nextWord = words[i];
    if (!check(curWord, nextWord, abc)) return false;
  }

  return true;

  function check(curWord, nextWord, abc) {
    let c = 0;
    let n = 0;
    console.log({ curWord, nextWord, abc });
    while (c < curWord.length && n < nextWord.length) {
      let charCurWord = curWord[c];
      let charNextWord = curWord[n];
      if (abc[charCurWord] < abc[charNextWord]) break;
      if (abc[charCurWord] > abc[charNextWord]) return false;
      c++;
      n++;
    }

    return true;
  }
};

// solve(["hello", "leetcode"], "hlabcdefghijk"); // true

// solve(["word", "world", "row"], "worldabcedefadsf"); // false

// solve(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"); // false, shorter strings should come first after following the lexigraphical order
