// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return all possible palindrome partitioning of s.

//   Example:

// Input: "aab"
// Output:
// [
//   ["aa", "b"],
//   ["a", "a", "b"]
// ]

function solve(s) {
  const out = [];
  if (!s.length) return out;
  helper([], s, 0);
  return out;

  // lo === start pointer

  function helper(curList, str, lo) {
    if (lo === str.length) {
      out.push(curList.slice());
      return;
    }

    for (let hi = lo; hi < str.length; hi++) {
      if (isPal(str, lo, hi)) {
        // if palindromic, add current substring to the curList
        curList.push(str.substring(lo, hi + 1));
        // recurse for the leftover substring
        helper(curList, str, hi + 1);
        // backtrack, remove items
        curList.pop();
      }
    }
  }

  function isPal(str, lo, hi) {
    while (lo < hi) {
      if (str[lo] !== str[hi]) return false;
      lo++;
      hi--;
    }
    return true;
  }
}

console.log(solve("aab"));
