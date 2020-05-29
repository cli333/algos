// Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

// If possible, output any possible result.If not possible, return the empty string.

//   Example 1:

// Input: S = "aab"
// Output: "aba"
// Example 2:

// Input: S = "aaab"
// Output: ""

function solve(s) {
  const map = s
    .split("")
    .reduce((acc, val) => ({ ...acc, [val]: acc[val] + 1 || 1 }), {});
  const q = [];

  for (let char in map) {
    q.push([char, map[char]]);
  }

  q.sort((a, b) => (a[1] < b[1] ? 1 : -1));

  let out = "";
  while (q.length > 1) {
    let first = q.shift();
    let second = q.shift();
    out += first[0];
    out += second[0];
    first[1]--;
    second[1]--;
    if (first[1]) q.push(first);
    if (second[1]) q.push(second);
    q.sort((a, b) => (a[1] < b[1] || a[0] < b[0] ? 1 : -1));
  }

  if (!q.length) {
    return out;
  } else if (q[0][1] > 1) {
    return "nothing here";
  } else {
    return out + q[0][0];
  }
}

console.log(solve("aab"));
console.log(solve("aabaabaabaabaabaabaab"));
console.log(solve("aaaabbbb"));
