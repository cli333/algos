// Given a string, replace each its character by the next one in the English alphabet(z would be replaced by a).

//   Example

// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

//   Hints

// split()
// indexOf()
// join()

// Input / Output

// [time limit]4000ms(js)
// [input] string inputString

// Non - empty string consisting of lowercase English characters.

// Guaranteed constraints:

// 1 ≤ inputString.length ≤ 10.

// [output] string

// The result string after replacing all of its characters.

function solve(s) {
  const abc = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  const map = abc.split("").reduce((acc, val, idx, arr) => {
    if (idx > 26) return acc;
    acc[val] = arr[idx + 1];
    return acc;
  }, {});

  return s.split("").reduce((acc, val) => acc + map[val], "");
}

console.log(solve("crazy"));
