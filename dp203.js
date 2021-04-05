// minimum window subtring

// Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

// Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"

function s(a, b) {
  const map = b
    .split("")
    .reduce((acc, val) => ({ ...acc, [val]: acc[val] + 1 || 1 }), {});

  // ALL windows
  //   function compare(a) {
  //     const mapA = a
  //       .split("")
  //       .reduce((acc, val) => ({ ...acc, [val]: acc[val] + 1 || 1 }), {});
  //     for (let char in map) {
  //       if (!mapA[char]) return false;
  //     }
  //     return true;
  //   }

  //   let left = 0;
  //   let right = 0;
  //   let min = Infinity;
  //   let res = a;

  //   for (left; left < a.length; left++) {
  //     while (right <= a.length) {
  //       const curString = a.substring(left, right + 1);
  //       if (compare(curString) && curString.length < min) {
  //         min = curString.length;
  //         res = curString;
  //       }
  //       right++;
  //     }
  //     right = left;
  //   }

  //   return { min, res };

  // move right until window has all letters
  // when it does, move left
  // when windows doesn't, move right again

  let remaining = b.length;
  let left = 0;
  let right = 0;
  let start = 0;
  let minLen = Infinity;
  // move right pointer to end
  while (right < a.length) {
    // if char exists in map b, decrease 'remaining' letters needed
    if (map[a[right]] > 0) remaining--;

    // decrease the letter count in map
    map[a[right]] ? map[a[right]]-- : (map[a[right]] = -1);
    right++;

    // if window valid or all letters found, decrease the current window
    while (remaining === 0) {
      if (right - left < minLen) {
        minLen = right - left;
        start = left;
      }

      // increase letter count in map
      map[a[left]]++;
      // if letter exists in map, increase remaining / make the window invalid
      if (map[a[left]] > 0) remaining++;
      left++;
    }
  }

  return minLen === Infinity ? "" : a.substr(start, minLen);
}

console.log(s("ADOBECODEBANC", "ABC"));
console.log(s("AAT", "T"));
console.log(s("donutsandwafflemakemehungry", "flea"));
console.log(s("whoopiepiesmakemyscalegroan", "roam"));
console.log(s("a", "aa"));
// https://leetcode.com/problems/minimum-window-substring/discuss/26808/Here-is-a-10-line-template-that-can-solve-most-'substring'-problems
