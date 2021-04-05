// longest palindrome recursion

function s(str, memo = {}) {
  if (str.length === 1) return str;
  if (memo[str]) return memo[str];
  // set to str
  // if escape comparison in for loop
  // it means that str is a palindrome
  // else, set pal1 and pal2 by compare substrings cut by 1 from beginning and end
  let pal1 = str;
  let pal2 = str;
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      pal1 = s(str.substring(0, str.length - 1), memo);
      memo[str.substring(0, str.length - 1)] = pal1;
      pal2 = s(str.substring(1), memo);
      memo[str.substring(1)] = pal2;
      break;
    }
  }
  return pal1.length > pal2.length ? pal1 : pal2;
}

function s2(str, lo = 0, hi = str.length - 1, res = 0) {
  if (lo > hi) return res;
  if (lo === hi) return res + 1;
  if (str[lo] === str[hi]) {
    res = s2(str, lo + 1, hi - 1, res + 2);
    return Math.max(res, s2(str, lo + 1, hi, 0), s2(str, lo, hi - 1, 0));
  }
  return Math.max(s2(str, lo + 1, hi, 0), s2(str, lo, hi - 1, 0));
}

console.log(s("babradecar"));
console.log(s2("babradecar"));
