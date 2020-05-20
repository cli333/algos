// Given 2 strings target and source, find the minimum number of steps to make target a substring of source.In 1 step you can take a substring of source and append it at the end of source.

//   Example 1:

// Input: target = "abcd", source = "dbcfda"
// Output: 2
// Explanation:
// The target string can be constracted as follow "dbcfda" + "bc" + "d" = "dbcfdabcd"
// So the minimum number of steps is 2.
// Example 2:

// Input: target = "abc", source = "abdabb"
// Output: -1
// Example 3:

// Input: target = "abcd", source = "fabcda"
// Output: 0

const solve = (source, target) => {
  // N source, M target
  // oN*M runtime, oM space

  let numSequences = 0;
  let remaining = target;

  while (remaining.length > 0) {
    let subsequence = "";
    // src pointer
    let s = 0;
    // remaining pointer
    let r = 0;
    while (s < source.length && r < remaining.length) {
      if (source[s] === remaining[r]) {
        subsequence += remaining[r];
        r++;
      }
      s++;
    }

    // cannot generate a subsequence using the current first letter of remaining
    if (subsequence.length === 0) return -1;
    // increment the num of subsequcnes / num of moves
    numSequences++;
    // slice the remaining string
    remaining = remaining.substring(subsequence.length);
  }

  return numSequences;
};

console.log(solve("xyz", "xzyxz")); // 'xz' + 'y' + 'xz', 3
console.log(solve("abc", "abcdb")); // -1
console.log(solve("abc", "abcbc")); // 'abc' + 'bc', 2
