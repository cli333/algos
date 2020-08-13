// Remove the minimum number of invalid parentheses in order to make the input string valid.Return all possible results.

//   Note: The input string may contain letters other than the parentheses(and).

//     Example 1:

// Input: "()())()"
// Output: ["()()()", "(())()"]
// Example 2:

// Input: "(a)())()"
// Output: ["(a)()()", "(a())()"]
// Example 3:

// Input: ")("
// Output: [""]

function sol(s) {
  const res = [];
  helper(s, 0, 0);
  return res;

  function helper(s, left, right, parens = ["(", ")"]) {
    // balance is number of "(" - number of ")"
    let balance = 0;
    for (; right < s.length; right++) {
      const char = s[right];
      if (char === parens[0]) {
        balance++;
      } else if (char === parens[1]) {
        balance--;
      }

      // found invalid closing parens
      if (balance < 0) break;
    }

    if (balance < 0) {
      for (; left <= right; left++) {
        const char = s[left];
        // continue, if the char is not the close parens
        if (char !== parens[1]) continue;
        // avoid duplicates, '())' => '(_)' or '()_'
        if (left > 1 && s[left] === s[left - 1]) continue;
        helper(s.substring(0, left) + s.substring(left + 1), left, right);
      }
    } else if (balance > 0) {
      helper(s.split("").reverse().join(""), 0, 0, parens.reverse());
    } else {
      // balance is zero
      // check if working with reversed string
      if (s.length) {
        res.push(parens[0] === "(" ? s : s.split("").reverse().join(""));
      }
    }
  }
}

console.log(sol("()())()"), ["()()()", "(())()"]);
console.log(sol("(a)())()"), ["(a)()()", "(a())()"]);
console.log(sol(")("), []);
