// find all subsequences of str

function s(str) {
  const n = str.length;
  const out = [];
  helper(0);
  return out;

  function helper(i, cur = "") {
    out.push(cur);
    for (i; i < n; i++) {
      cur = str[i] + cur;
      helper(i + 1, cur);
      cur = cur.substring(1);
    }
  }
}

console.log(s("abcd"));

function s2(str) {
  const out = [];
  const n = str.length;
  helper(0);
  return out;

  function helper(i, cur = "") {
    if (i === n) {
      out.push(cur);
      return;
    }
    helper(i + 1, cur + str[i]);
    helper(i + 1, cur);
  }
}

console.log(s2("abcd"));

// combos

// function c(str) {
//   const out = [];

//   if (str.length < 2) {
//     return [...str];
//   }

//   for (let i = 0; i < str.length; i++) {
//     const rest = str.substring(0, i) + str.substring(i + 1);
//     const c2 = c(rest);
//     for (let p of c2) {
//       out.push(str[i] + p);
//     }
//   }

//   return out;
// }

// console.log(c("abcd"));
