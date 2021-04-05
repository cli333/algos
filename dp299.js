function s(word, k) {
  // find longest substring with 2 unique chars
  // THIS IS CORRECT
  const map = {};
  let l = 0;
  let r = 0;
  let len = 0;
  let start = 0;
  for (; r < word.length; r++) {
    // found uniq, subtract from k
    if (!map[word[r]]) k--;
    map[word[r]] ? map[word[r]]++ : (map[word[r]] = 1);

    // if k < 0, have found more than the required number of unique chars
    // advance l
    while (k < 0) {
      map[word[l]]--;
      if (!map[word[l]]) k++;
      l++;
    }

    // compare
    if (r - l > len) {
      start = l;
      len = r - l + 1;
    }
  }

  return word.substring(start, start + len);
}

console.log(s("assdeeeddffha", 2), "deeedd");
console.log(s("karappa", 3), "arappa");
