// Check whether the given string is a subsequence of the plaintext alphabet.

//   Example

// For s = "effg" or s = "cdce", the output should be alphabetSubsequence(s) = false

// For s = "ace" or s = "bxz", the output should be alphabetSubsequence(s) = true.

//   Hints

// size property
// charCodeAt()

// Input / Output

// [execution time limit]5 seconds(ts)
// [input] string s

// Guaranteed constraints:

// 2 ≤ s.length ≤ 15.

// [output] boolean

// true if the given string is a subsequence of the alphabet, false otherwise.

function solve(s) {
  const abc = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .reduce((acc, val, idx) => ({ ...acc, [val]: idx }), {});

  for (let i = 1; i < s.length; i++) {
    if (abc[s[i - 1]] >= abc[s[i]]) return false;
  }

  return true;
}

console.log(solve("ace"));
console.log(solve("bxz"));
console.log(solve("effg"));
