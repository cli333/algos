// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

//   Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
//   Example 2:

// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
//   Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".

function solve(s) {
  let balancedCount = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    // l = negative
    // r = positive
    if (cur === "L") {
      count--;
    } else if (cur === "R") {
      count++;
    }
    console.log({ count });

    if (count === 0) balancedCount++;
  }

  return balancedCount;
}

console.log(solve("RLRRLLRLRL")); // 4
console.log(solve("RLLLLRRRLR")); // 3
