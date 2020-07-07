// A string S represents a list of words.

// Each letter in the word has 1 or more options.If there is one option, the letter is represented as is.If there is more than one option, then curly braces delimit the options.For example, "{a,b,c}" represents options["a", "b", "c"].

// For example, "{a,b,c}d{e,f}" represents the list["ade", "adf", "bde", "bdf", "cde", "cdf"].

// Return all words that can be formed in this manner, in lexicographical order.

//   Example 1:

// Input: "{a,b}c{d,e}f"
// Output: ["acdf", "acef", "bcdf", "bcef"]
// Example 2:

// Input: "abcd"
// Output: ["abcd"]

function sol(s) {
  const strings = [];
  for (let char of s) {
    if (char === "{") {
      strings.push("");
    } else if (char === "}") {
      strings.push("");
    } else if (char !== ",") {
      strings[strings.length - 1] += char;
    }
  }

  const res = [];
  helper(0, []);
  return res;

  function helper(idx, cur) {
    if (idx === strings.length) {
      res.push(cur.join(""));
      return;
    }

    for (let c of strings[idx]) {
      cur.push(c);
      helper(idx + 1, cur);
      cur.pop();
    }
  }
}

console.log(sol("{a,b}c{d,e}f"));
