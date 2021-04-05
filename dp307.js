// 22. Generate Parentheses
// Medium

// 7414

// 319

// Add to List

// Share
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

function s(n) {
  const res = [];
  helper(0, 0, "");
  return res;

  function helper(open, close, cur) {
    if (open === n && close === n) {
      res.push(cur);
      return;
    }
    if (open < n) helper(open + 1, close, cur + "(");
    if (open > close) helper(open, close + 1, cur + ")");
  }
}

console.log(s(3));
