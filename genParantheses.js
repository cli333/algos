// Given n pairs of parentheses, write a function to generate all combinations of well - formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

const solve = (n) => {
  const out = [];
  backtrack(out, "", 0, 0, n);
  return out;

  function backtrack(out, curString, open, close, max) {
    if (curString.length === max * 2) {
      out.push(curString);
      return;
    }

    // if # of open paren < max sets of parens, add a open paren
    // won't get to the next "if statement", until has added all open parens
    if (open < max) backtrack(out, curString + "(", open + 1, close, max);
    // if # of close paren < # of open paren, add an close paren
    if (close < open) backtrack(out, curString + ")", open, close + 1, max);
  }
};

console.log(solve(3));
console.log(solve(2));
