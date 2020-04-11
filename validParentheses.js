// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//   Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

//   Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false

const valid = (string) => {
  // if the string length isn't even, it's invalid
  // use stack
  // if next char is a ")", the top of the stack has to be a "("
  // return stack length, if empty, valid else invalid

  if (string.length % 2 !== 0) return false;
  let stack = [];

  for (let char of string.split("")) {
    if (char === "[" || char === "{" || char === "(") {
      stack.push(char);
    } else if (
      char === "]" &&
      stack.length > 0 &&
      stack[stack.length - 1] === "["
    ) {
      stack.pop();
    } else if (
      char === "}" &&
      stack.length > 0 &&
      stack[stack.length - 1] === "{"
    ) {
      stack.pop();
    } else if (
      char === ")" &&
      stack.length > 0 &&
      stack[stack.length - 1] === "("
    ) {
      stack.pop();
    }
  }

  return stack.length === 0;
};

console.log(valid("()")); // true
console.log(valid("()[]{}")); // true
console.log(valid("(]")); // false
