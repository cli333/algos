// 131. Palindrome Partitioning
// Medium

// 3011

// 96

// Add to List

// Share
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// A palindrome string is a string that reads the same backward as forward.

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]

function s(str) {
  const res = [];
  helper(str, []);
  return res;

  function helper(str, list) {
    if (!str.length) {
      res.push(list.slice());
      return;
    }

    for (let i = 1; i <= str.length; i++) {
      const left = str.substring(0, i);
      const right = str.substring(i);
      if (isPal(left)) {
        list.push(left);
        helper(right, list);
        list.pop();
      }
    }
  }

  function isPal(str) {
    let a = 0;
    let b = str.length - 1;
    while (a < b) {
      if (str[a] !== str[b]) return false;
      a++;
      b--;
    }
    return true;
  }
}

console.log(s("aab"));
