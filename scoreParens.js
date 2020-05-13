// Given a balanced parentheses string S, compute the score of the string based on the following rule:

// () has score 1
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.

//   Example 1:

// Input: "()"
// Output: 1
// Example 2:

// Input: "(())"
// Output: 2
// Example 3:

// Input: "()()"
// Output: 2
// Example 4:

// Input: "(()(()))"
// Output: 6

const solve = (S) => {
  const stack = [];
  let score = 0;

  for (let c of S.split("")) {
    if (c === "(") {
      // if open parens
      // push current score onto stack
      // reset the score
      stack.push(score);
      score = 0;
    } else {
      // if close parens
      // set score to (stack.pop()) + max(current score * 2, 1)
      score = stack.pop() + Math.max(score * 2, 1);
    }
  }

  return score;
};

console.log(solve("()"));
console.log(solve("()()"));
console.log(solve("(())"));
/*
  [0]
  [0, 0]
  [0, 0] => [0] => score = 0 + max(0*2, 1) = 1
  [0] => [] => score = 0 + max(1 * 2, 1) = 2
*/
console.log(solve("(()(()))"));
