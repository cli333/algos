// 76. Minimum Window Substring
// Hard

// 6110

// 414

// Add to List

// Share
// Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

function s(s, t) {
  const map = {};
  const set = new Set(t.split(""));
  let remaining = t.length;
  let lo = 0;
  let hi = 0;
  let len = Infinity;
  let start = 0;
  while (hi < s.length) {
    const char = s[hi];
    if (set.has(char)) {
      map[char] ? map[char]++ : (map[char] = 1);
      if (map[char] === 1) {
        remaining--;
      }
    }
    hi++;

    while (!remaining) {
      const char = s[lo];
      if (hi - lo < len) {
        len = hi - lo;
        start = lo;
      }
      if (set.has(char)) {
        map[char]--;
        if (map[char] === 0) {
          remaining++;
        }
      }
      lo++;
    }
  }

  return {
    map,
    remaining,
    lo,
    hi,
    start,
    out: s.substring(start, start + len),
  };
}

console.log(s("ADOBECODEBANC", "ABC"), "BANC");
console.log(s("a", "aa"), "BANC");
