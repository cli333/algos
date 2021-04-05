// 14. Longest Common Prefix
// Easy

// 3830

// 2161

// Add to List

// Share
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function s(strs) {
  if (!strs.length) return null;
  return helper(0, strs.length - 1);

  function helper(l, r) {
    // only one el, so return it
    if (l === r) return strs[l];
    // split array in two, and find for both halves
    const m = Math.floor((l + r) / 2);
    const left = helper(l, m);
    const right = helper(m + 1, r);
    // compare the results for left and right halves
    return commonPrefix(left, right);
  }

  function commonPrefix(left, right) {
    // find the shorter, the min length
    // traverse either one until the min
    // when there is a difference, return that substring
    // else return the left/right.substring(0, min)
    const min = Math.min(left.length, right.length);
    for (let i = 0; i < min; i++) {
      if (left[i] !== right[i]) {
        return left.substring(0, i);
      }
    }
    return left.substring(0, min);
  }
}

console.log(s(["flower", "flow", "flight"]), "fl");

function s2(strs) {
  let prefix = "";
  let idx = 0;
  // loop through chars of first el in strs
  for (let char of strs[0].split("")) {
    // loop through rest of els in strs
    for (let i = 1; i < strs.length; i++) {
      // if idx is greater than length of current string OR current char doesnt equal to char of the string being compared against
      // return prefix
      if (idx >= strs[i].length || char !== strs[i][idx]) {
        return prefix;
      }
    }
    // add the char to prefix
    // increment
    prefix += char;
    idx++;
  }
  return prefix;
}

console.log(s2(["flower", "flow", "flight"]), "fl");

function s3(strs) {
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return prefix;
      }
    }
    prefix += strs[0][i];
  }
  return prefix;
}

console.log(s3(["flower", "flow", "flight"]), "fl");
