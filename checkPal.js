// Given the string, check if it is a palindrome.

//   Example

// For inputString = "aabaa", the output should be checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be checkPalindrome(inputString) = false;
// For inputString = "a", the output should be checkPalindrome(inputString) = true.

//   Hints

// toLowerCase()
// split()
// reverse()
// join()

// Input / Output

// [time limit]4000ms(js)
// [input] string inputString

// A non - empty string consisting of lowercase characters.

// Guaranteed constraints:

// 1 ≤ inputString.length ≤ 105.

// [output] boolean

// true if inputString is a palindrome, false otherwise.

function solve(word) {
  if (word.length <= 1) return true;
  if (word[0] === word[word.length - 1]) {
    return solve(word.substring(1, word.length - 1));
  }
  return false;
}

console.log(solve("racecar"));
console.log(solve("racecar2"));
console.log(solve("abba"));
console.log(solve("aabba"));
