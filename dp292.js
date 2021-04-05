// 17. Letter Combinations of a Phone Number
// Medium

// 5537

// 500

// Add to List

// Share
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

function s(digits) {
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const res = [];
  helper(0);
  return res;

  function helper(idx, list = []) {
    if (idx === digits.length) {
      res.push(list.join(""));
      return;
    }
    for (let i = idx; i < digits.length; i++) {
      for (let c of map[digits[i]].split("")) {
        list.push(c);
        helper(i + 1, list);
        list.pop();
      }
    }
  }
}

console.log(s("23"));
