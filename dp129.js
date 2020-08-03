// Given an array A of strings, find any smallest string that contains each string in A as a substring.

// We may assume that no string in A is substring of another string in A.

//   Example 1:

// Input: ["alex", "loves", "leetcode"]
// Output: "alexlovesleetcode"
// Explanation: All permutations of "alex", "loves", "leetcode" would also be accepted.
//   Example 2:

// Input: ["catg", "ctaagt", "gcta", "ttca", "atgcatc"]
// Output: "gctaagttcatgcatc"

function sol(A) {
  const list = [...A];

  while (true) {
    let n = list.length;
    if (n === 1) break;

    let maxLength = -1;
    let index1 = 0;
    let index2 = 0;
    let newString = "";

    for (let i = 0; i <= n - 1; i++) {
      for (let j = i + 1; j <= n - 1; j++) {
        let s1 = list[i];
        let s2 = list[j];
        const merged = merge(s1, s2);

        const saved = s1.length + s2.length - merged.length;
        if (saved > maxLength) {
          maxLength = saved;
          index1 = i;
          index2 = j;
          newString = merged;
        }
      }
    }

    list.splice(index2, 1);
    list.splice(index1, 1);
    list.push(newString);
  }

  return list;

  function merge(s1, s2) {
    let len1 = s1.length;
    let len2 = s2.length;
    // s1 end overlap over s2 start
    let overlap1 = 0;
    // s2 end overlap over s1 start
    let overlap2 = 0;

    for (let len = 1; len <= len2; len++) {
      if (s1.substring(len1 - len) === s2.substring(0, len)) {
        overlap1 = len;
      }
    }

    for (let len = 1; len <= len1; len++) {
      if (s2.substring(len2 - len) === s1.substring(0, len)) {
        overlap2 = len;
      }
    }

    if (overlap1 >= overlap2) {
      return s1.substring(0, len1 - overlap1) + s2;
    } else {
      return s2.substring(0, len2 - overlap2) + s1;
    }
  }
}

console.log(sol(["alex", "loves", "leetcode"]));
console.log(sol(["catg", "ctaagt", "gcta", "ttca", "atgcatc"]));
console.log(sol(["hello", "cat"]));

function sol2(words) {
  let res = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < words.length; i++) {
    const used = Array(words.length).fill(false);
    used[i] = true;
    helper(words[i], used);
  }
  return res;

  function helper(curWord, used) {
    if (used.every((word) => word === true)) {
      if (curWord.length < res.length) {
        res = curWord;
      }
    }

    for (let i = 0; i < words.length; i++) {
      if (!used[i]) {
        used[i] = true;
        helper(merge(curWord, words[i]), used);
        used[i] = false;
      }
    }
  }

  function merge(s1, s2) {
    const len1 = s1.length;
    const len2 = s2.length;
    let o1 = 0;
    let o2 = 0;
    for (let i = 1; i < len1; i++) {
      if (s1.substring(len1 - i) === s2.substring(0, i)) {
        o1 = i;
      }
    }
    for (let i = 1; i < len2; i++) {
      if (s2.substring(len2 - i) === s1.substring(0, i)) {
        o2 = i;
      }
    }
    if (o1 > o2) {
      return s1.substring(0, len1 - o1) + s2;
    } else {
      return s2.substring(0, len2 - o2) + s1;
    }
  }
}

console.log(sol2(["alex", "loves", "leetcode"]));
console.log(sol2(["catg", "ctaagt", "gcta", "ttca", "atgcatc"]));
console.log(sol2(["hello", "cat"]));
