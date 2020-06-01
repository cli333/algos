// Problem description: Given two strings S and T, return if they are equal when both are typed into empty text editors.# means a backspace character.

//   Example 1:
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".

//   Example 2:
// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".

//   Example 3:
// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".

//   Example 4:
// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".

//   Note:
// 1. S.length will be between 1 and 200 inclusive
// 2. T.length will be between 1 and 200 inclusive
// 3. S and T only contain lowercase letters and '#' characters.

// Follow up:
// Can you solve it in O(N) time and O(1) space ?

function solve(S, T) {
  const stackA = [];
  for (let c of S.split("")) {
    if (c !== "#") {
      stackA.push(c);
    } else if (stackA.length) {
      stackA.pop();
    }
  }

  const stackB = [];
  for (let c of T.split("")) {
    if (c !== "#") {
      stackB.push(c);
    } else if (stackB.length) {
      stackB.pop();
    }
  }

  while (stackA.length) {
    let char = stackA.pop();
    if (!stackB.length || stackB.pop() !== char) return false;
  }

  return !stackA.length && !stackB.length;
}

console.log(solve("ab#c", "ad#c")); // true
console.log(solve("ab##", "c#d#")); // true
console.log(solve("a##c", "#a#c")); // true
console.log(solve("a#c", "b")); // false
