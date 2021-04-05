function s(str, m = 0, n = str.length - 1, res = 0) {
  // longest palindrome
  if (m > n) return res;
  if (m === n) return res + 1;
  if (str[m] === str[n]) {
    return Math.max(
      s(str, m + 1, n - 1, res + 2),
      s(str, m + 1, n, 0),
      s(str, m, n - 1, 0)
    );
  }
  return Math.max(s(str, m + 1, n, 0), s(str, m, n - 1, 0));
}

console.log(s("abcdracecarabcd"), 7);

// function s2(str, a = 0, b = str.length - 1, res = 0) {
//   // longest palindromic prefix
//   if (a > b) return res;
//   if (a === b) return res + 1;
//   if (str[a] === str[b]) {
//     return Math.max(s2(str, a + 1, b - 1, res + 2), s2(str, 0, b - 1, 0));
//   }
//   return s2(str, 0, b - 1, 0);
// }

// console.log(s2("afbaddracecaradfdracecar"));

function s3(a, b, m = a.length, n = b.length, res = 0) {
  // longest common substring
  if (!m || !n) return res;
  if (a[m - 1] === b[n - 1]) {
    res = s3(a, b, m - 1, n - 1, res + 1);
  }
  return Math.max(res, s3(a, b, m - 1, n, 0), s3(a, b, m, n - 1, 0));
}

console.log(s3("zzzxabcdaccc", "efdzzzabcdrcc"), 4);

function s4(a, b, m = a.length, n = b.length) {
  // longest common subsequence
  if (!m || !n) return 0;
  if (a[m - 1] === b[n - 1]) {
    return 1 + s4(a, b, m - 1, n - 1);
  }
  return Math.max(s4(a, b, m - 1, n), s4(a, b, m, n - 1));
}

console.log(s4("zzzxabcdaccc", "efdzzzabxcdr"));
console.log(s4("ABCDGH", "AEDFHR"));
console.log(s4("AGGTAB", "GXTXAYB"));
