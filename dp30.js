// Question: Given a string, return all decompositions of the string that consist of only palindromes.

//   Example:

// Input: "aab"
// Output: [["aa", "b"], ["a", "a", "b"]]

function sol(str) {
  // time, o(n * 2^n)
  // space, o(n)

  const out = [];
  generate(str, 0, []);
  return out;

  function generate(str, start, curList) {
    if (start === str.length) {
      out.push(curList.slice());
    } else {
      for (let i = start; i < str.length; i++) {
        if (isPal(str, start, i)) {
          curList.push(str.substring(start, i + 1));
          generate(str, i + 1, curList);
          curList.pop();
        }
      }
    }
  }

  function isPal(str, start, end) {
    while (start < end) {
      if (str[start] !== str[end]) return false;
      start++;
      end--;
    }
    return true;
  }
}

console.log(sol("aab"));
console.log(sol("aabaa"));
