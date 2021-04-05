// 150. Evaluate Reverse Polish Notation
// Medium

// 1466

// 513

// Add to List

// Share
// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

// Note that division between two integers should truncate toward zero.

// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

function s(tokens) {
  const stack = [];
  for (let token of tokens) {
    if (token === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (token === "-") {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a - b);
    } else if (token === "/") {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(Math.trunc(a / b));
    } else if (token === "+") {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(a + b);
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack[0];
}

console.log(s(["2", "1", "+", "3", "*"]));
console.log(s(["4", "13", "5", "/", "+"]), 6);
