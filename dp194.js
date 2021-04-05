// shortest palindrome
// find shortest palindrome that we can get from adding letters in front of str

// eg. the longest palindrome would be the whole reversed of the string!!
// to get shortest find the longest palindrome from the beginning and add the remaining letters reversed

function l(s, a = 0, b = s.length - 1, len = 0) {
  // find longest palindrome from beginning!!!!
  // return len
  if (a > b) return len;
  if (a === b) return len + 1;
  if (s[a] === s[b]) {
    // take, advance a and b
    // dont take, advance only b
    return Math.max(l(s, a + 1, b - 1, len + 2), l(s, a, b - 1, 0));
  }
  // advance only b
  return l(s, a, b - 1, 0);
}

function s(str) {
  // find longest palindromic prefix
  // take the remaining letters reversed and add to str
  const n = str.length;
  let startIdx = l(str);
  let out = str;
  while (startIdx < n) {
    out = str[startIdx] + out;
    startIdx++;
  }
  return out;
}

// console.log(l("doodcoooooooooooooc"));
console.log(s("doodbcd"));
console.log(l("afbaddracecaradfdracecar"));
