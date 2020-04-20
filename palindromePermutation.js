// Given a string, determine if a permutation of the string could form a palindrome.

//   Example 1:

// Input: "code"
// Output: false
// Example 2:

// Input: "aab"
// Output: true
// Example 3:

// Input: "carerac"
// Output: true

const solve = (text) => {
  const map = text.split("").reduce((a, b) => {
    a[b] = a[b] + 1 || 1;
    return a;
  }, {});

  let out = 0;
  for (let val of Object.values(map)) {
    out += val % 2;
  }

  return out === 0 || out === 1;
};

console.log(solve("code"));
console.log(solve("aab"));
console.log(solve("carerac"));
console.log(solve("racecar"));
console.log(solve("obob"));
console.log(solve("raccar"));
console.log(solve("maasefas;difhlaishdflia maasefas;difhlaishdflia"));
