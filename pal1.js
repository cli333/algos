// Question 1

// Given a string, determine if a permutation of the string could form a palindrome.

// For example,
//   "code" -> False, "aab" -> True, "carerac" -> True.

//     Hint:

// Consider the palindromes of odd vs even length.What difference do you notice ?
//   Count the frequency of each character.
// If each character occurs even number of times, then it must be a palindrome.How about character which occurs odd number of times ?
//   Solution

// count number of chars, and odd char can only be one

function solve(str) {
  // convert to map of chars
  // loop through chars
  const map = {};
  for (let char of [...str]) {
    map[char] = map[char] + 1 || 1;
  }

  let out = 0;
  for (let char in map) {
    out += map[char] % 2;
  }
  return out <= 1;
}

console.log(solve("code"));
console.log(solve("aab"));
console.log(solve("racecar"));
