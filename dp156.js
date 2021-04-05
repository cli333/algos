// You are given n strings a1,a2,…,an: all of them have the same length m. The strings consist of lowercase English letters.

// Find any string s of length m such that each of the given n strings differs from s in at most one position. Formally, for each given string ai, there is no more than one position j such that ai[j]≠s[j].

// Note that the desired string s may be equal to one of the given strings ai, or it may differ from all the given strings.

// For example, if you have the strings abac and zbab, then the answer to the problem might be the string abab, which differs from the first only by the last character, and from the second only by the first.

function sol(n, m, strings) {
  // find string of same length that differs by at most one char

  // n = number of strings
  // m = length of string

  // take first string
  // modify until the diff between all other strings is valid

  let ans = strings[0].split("");

  for (let i = 0; i < m; i++) {
    const curAns = ans.slice();
    for (let char of "abcdefghijklmnopqrstuvwxyz".split("")) {
      curAns[i] = char;
      if (isValid(curAns)) {
        ans = curAns;
        break;
      }
    }
  }

  return isValid(ans) ? ans.join("") : null;

  function isValid(curAns) {
    for (let i = 0; i < n; i++) {
      let count = 0;
      for (let j = 0; j < m; j++) {
        if (curAns[j] !== strings[i][j]) count++;
      }
      if (count > 1) return false;
    }
    return true;
  }
}

console.log(sol(2, 4, ["abac", "zbab"]), "zbac");

console.log(sol(2, 4, ["aaaa", "bbbb"]), null);

console.log(sol(3, 3, ["baa", "aaa", "aab"]), "aaa");

console.log(sol(2, 2, ["ab", "bb"]), "ab");
