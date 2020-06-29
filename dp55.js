// longest palindromic subseq
function sol(a, m = 0, n = a.length) {
  if (n <= 1) return n;
  if (a[m] === a[m + n - 1]) {
    return 2 + sol(a, m + 1, n - 2);
  }
  return Math.max(sol(a, m + 1, n), sol(a, m, n - 1));
}

console.log(sol("abbaa"));
