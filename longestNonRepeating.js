// find the longest substring without repeating characters

const longest = string => {
  let start = 0;
  let end = 0;
  let max = 0;

  const hash = {};

  while (end < string.length) {
    if (!hash[string[end]]) {
      hash[string[end]] = true;
      end++;
      max = Math.max(Object.keys(hash).length, max); // compare against the max size of the hash, which should be all unique
    } else {
      delete hash[string[start]]; // remove from the hash set
      start++;
    }
  }
  return max;
};

console.log(longest("abcabcbb"));
console.log(longest("bbbbbbb"));
