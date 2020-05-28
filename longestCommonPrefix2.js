// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

//   Example 1:

// Input: ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

// Input: ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function solve(words) {
  let prefix = words[0];

  for (let word of words) {
    while (word.indexOf(prefix) < 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
}

console.log(solve(["flower", "flow", "flight"])); // fl
console.log(solve(["dog", "racecar", "car"])); // ''
