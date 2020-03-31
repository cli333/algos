// Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.
// In one operation, you can choose any character of the string and change it to any other uppercase English character.
// Find the length of the longest sub - string containing all repeating letters you can get after performing the above operations.

//   Note:
// Both the string's length and k will not exceed 104.

// Example 1:
// Input:
// s = "ABAB", k = 2
// Output:
// 4

// Explanation:
// Replace the two 'A's with two 'B's or vice versa.

//   Example 2:
// Input:
// s = "AABABBA", k = 1
// Output:
// 4

// Explanation:
// Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

const solve = (s, k) => {
  let N = s.length;
  const charCount = {}; // keep track of letter count
  let start = 0;
  let maxLength = 0;
  let maxCount = 0; // the max count

  // while k > 0, window expands
  // if k < 0, move the start pointer along

  for (let end = 0; end < N; end++) {
    // add to map
    charCount[s[end]] = charCount[s[end]] + 1 || 1;
    // update the max count
    maxCount = Math.max(maxCount, charCount[s[end]]);

    // while the (window size) - (the longest repeating character) > (k, the number of replacement operations allowed)
    // 'pop' off the start of window
    // window size - the number of similar characters = the number of character that have to change
    // add 1, because adding a letter for each loop
    while (end - start - maxCount + 1 > k) {
      // decrement the character at the front of the window
      charCount[s[start]]++;
      // move the window
      start++;
    }
    // reset max length
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

console.log(solve("ABAB", 2)); // 4
console.log(solve("AABABBA", 1)); // 5
