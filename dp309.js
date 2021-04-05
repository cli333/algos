// 32. Longest Valid Parentheses
// Hard

// 4623

// 171

// Add to List

// Share
// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Example 1:

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Example 2:

// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
// Example 3:

// Input: s = ""
// Output: 0

function longest(s) {
  const stack = [-1];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")" && s[stack[stack.length - 1]] === "(") {
      stack.pop();
      max = Math.max(max, i - stack[stack.length - 1]);
    } else {
      stack.push(i);
    }
  }
  return { max, stack };
}

console.log(longest(")()())"));
