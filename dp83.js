// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; No extra white spaces, square brackets are well - formed, etc.

//   Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.For example, there won't be input like 3a or 2[4].

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"

function sol(s) {
  const numStack = [];
  const strStack = [];
  const n = s.length;
  let tail = "";

  for (let i = 0; i < n; i++) {
    let char = s[i];
    if (/\d/.test(char)) {
      // check if digit > 9
      while (i + 1 < n && /\d/.test(s[i + 1])) {
        char = char * 10 + Number(s[i + 1]);
        i++;
      }
      numStack.push(char);
    } else if (char === "[") {
      strStack.push(tail);
      tail = "";
    } else if (char === "]") {
      const repeats = numStack.pop();
      let tmp = strStack.pop();
      tmp += tail.repeat(repeats);
      tail = tmp;
    } else {
      tail += char;
    }
  }

  return tail;
}

console.log(sol("3[a]2[bc]"));
console.log(sol("3[a2[c]]"));
console.log(sol("2[abc]3[cd]ef"));
