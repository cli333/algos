// Given a string s of '(', ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses('(' or ')', in any positions) so that the resulting parentheses string is valid and return any valid string.

//   Formally, a parentheses string is valid if and only if:

//     It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

//   Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)", "lee(t(c)ode)" would also be accepted.
//   Example 2:

// Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Example 3:

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.
//   Example 4:

// Input: s = "(a(b(c)d)"
// Output: "a(b(c)d)"

const solve = (s) => {
  // loop forwards => take care of extra ")"
  // loop backwards => take care of extra "("
  // use "open" to keep track of opening parens
  // "open" should always equal zero
  // forwards => if encounter ")" and open > 0, dont add the ")" onto the string
  // backwards => if encounter "(" and open > 0, don't add the "(" on the the string

  // first string
  let first = "";
  // open parens
  let open = 0;

  for (let char of s.split("")) {
    if (char === "(") {
      open++;
    } else if (char === ")") {
      // number of open parens is zero, don't add the closing parens onto the string
      // skip this loop
      if (open === 0) continue;
      // only decrement if there are "(" to balance out the ")"
      open--;
    }

    first += char;
  }

  // second string
  let second = "";
  // loop backwards
  // need to take care of any leftover opening parens
  for (let i = first.length - 1; i >= 0; i--) {
    // if chars is open parens, and number of open parens > 0
    // don't add onto the string
    if (first[i] === "(" && open > 0) {
      open--;
      continue;
    }
    second = first[i] + second;
  }

  return second;
};

console.log(solve("lee(t(c)o)de)"));
console.log(solve("a)b(c)d"));
console.log(solve("))()((("));
