// Question: Write a program that takes as input a number n in and returns all the strings with n matched pairs of parens.

//   Examples:

// n = 1
// ["()"]

// n = 2
// ["(())", "()()"]

// n = 3
// ["((()))", "(()())", "(())()", "()(())", "()()()"]

function sol(n) {
  // n pairs

  // space, call stack as deep as number of placements eg(n = 3, stack = n * 2 ) = o(2 * n) === o(n)
  const out = [];
  gen(0, 0, "");
  return out;

  function gen(lefts, rights, res = "") {
    // after n * 2 placements, return
    if (res.length === n * 2) {
      out.push(res);
      return;
    }

    if (lefts < n) gen(lefts + 1, rights, res + "(");
    if (lefts > rights) gen(lefts, rights + 1, res + ")");
  }
}

console.log(sol(2));
console.log(sol(3));
