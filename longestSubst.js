// Question

// Given a string s, find the length of the longest substring T that contains at most two distinct characters.

// For example, Given s = “eceba”, T is`"ece" which its length is 3.

// Solution

// First, we could simplify the problem by assuming that S contains two or more distinct characters, which means
// T must contain exactly two distinct characters. The brute force approach is O(n3) where n is the length of S.
// We can form every possible substring, and for each substring insert all characters into a Set which the Set’s
// size indicating the number of distinct characters. This could be easily improved to O(n2) by reusing the same Set when adding a character to form a new substring.

// The trick is to maintain a sliding window that always satisfies the invariant where there are always at most
// two distinct characters in it. When we add a new character that breaks this invariant, how can we move the
// begin pointer to satisfy the invariant? Using the above example, our first window is the substring “abba”.
// When we add the character ‘c’ into the sliding window, it breaks the invariant. Therefore, we have to readjust
// the window to satisfy the invariant again. The question is which starting point to choose so the invariant is satisfied.

// Let’s look at another example where S = “abaac”. We found our first window “abaa”. When we add ‘c’ to the window,
// the next sliding window should be “aac”. This method iterates n times and therefore its runtime complexity is O(n). We use three pointers: i, j, and k.

function solve(s) {
  let i = 0;
  let j = -1;
  let maxLen = 0;
  for (let k = 1; k < s.length; k++) {
    // prev char === cur char, skip
    if (s[k] === s[k - 1]) continue;

    if (j >= 0 && s[j] !== s[k]) {
      maxLen = Math.max(maxLen, k - i);
      i = j + 1;
    }
    j = k - 1;
  }

  return Math.max(s.length - i, maxLen);
}

console.log(solve("eceba")); // ece
