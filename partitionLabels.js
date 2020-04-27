// A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part,
// and return a list of integers representing the size of these parts.

// Example 1:
// Input: S = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
// Note:

// S will have length in range [1, 500].
// S will consist of lowercase letters ('a' to 'z') only.

const solve = (S) => {
  const out = [];

  // loop twice
  // map all the indices
  // sliding window

  // keep map of last indices of each character
  const map = {};

  for (let i = 0; i < S.length; i++) {
    map[S[i]] = i;
  }

  let start = 0;
  let end = 0;
  for (let i = 0; i < S.length; i++) {
    // find the last seen index of the current character
    // if haven't reached it, keep looking
    // if i === the last seen index of the current character, we've reached the end of the partition, reset the start
    end = Math.max(end, map[S[i]]);
    if (i === end) {
      out.push(end - start + 1);
      start = end + 1;
    }
  }

  return out;
};

console.log(solve("ababcbacadefegdehijhklij")); // [9,7,8]
