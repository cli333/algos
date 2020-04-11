// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

//   Example 1:

// Input: ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

// Input: ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longest = (words) => {
  // set first word as the prefix
  // loop through other words and remove letters

  let prefix = words[0];

  for (let i = 1; i < words.length; i++) {
    while (words[i].indexOf(prefix) < 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
};

console.log(longest(["flower", "flow", "flight"]));
console.log(longest(["dog", "racecar", "car"]));
