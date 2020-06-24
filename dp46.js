// A string S represents a list of words.

// Each letter in the word has 1 or more options.If there is one option, the letter is represented as is.If there is more than one option, then curly braces delimit the options.For example, “{ a, b, c } ” represents options["a", "b", "c"].

// For example, “{ a, b, c } d{ e, f } ” represents the list["ade", "adf", "bde", "bdf", "cde", "cdf"].

// Return all words that can be formed in this manner, in lexicographical order.

//   Example 1:
// Input: "{a,b}c{d,e}f"
// Output: ["acdf", "acef", "bcdf", "bcef"]
// Example 2:
// Input: "abcd"
// Output: ["abcd"]

function sol(S) {
  const arr = toArr(S);
  const res = [];
  helper(0, "");
  return res;

  function helper(idx, curString) {
    if (curString === arr.length) {
      res.push(curString);
      return;
    }

    for (let i = idx; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        for (let char of arr[i]) {
          curString += char;
          helper(i + 1, curString);
          curString = curString.substring(0, curString.length - 1);
        }
      } else {
        curString += arr[i];
        if (curString.length === arr.length) {
          res.push(curString);
          return;
        }
      }
    }
  }

  function toArr(S) {
    S = S.replace(/,/g, "").split("");
    const out = [];
    while (S.length) {
      let c = S.shift();
      if (c === "{") {
        out.push([]);
        while (S[0] !== "}") {
          out[out.length - 1].push(S.shift());
        }
        S.shift();
      } else {
        out.push(c);
      }
    }
    return out;
  }
}

function sol2(S) {
  const list = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "{") {
      let j = i + 1;
      let cur = "";
      while (j < S.length && S[j] !== "}") {
        if (S[j] !== ",") {
          cur += S[j];
        }
        j++;
      }
      list.push(cur);
      i = j;
    } else {
      list.push(S[i]);
    }
  }

  const res = [];
  dfs(0, "");
  return res;

  function dfs(idx, curString) {
    if (curString.length === list.length) {
      res.push(curString);
      return;
    }

    for (let i = idx; i < list.length; i++) {
      for (let c of list[i].split("")) {
        curString += c;
        dfs(i + 1, curString);
        curString = curString.substring(0, curString.length - 1);
      }
    }
  }
}

// console.log(sol("{a,b}c{d,e}f"));
// console.log(sol("{a,b}c{d,e}"));
console.log(sol2("{a,b}c{d,e}f"));
console.log(sol2("{a,b}c{d,e}"));
