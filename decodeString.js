// given a string, decode the string
// 3[a]2[bc] = aaabcbc
// 3[a2[c]] = accaccacc
// 2[abc]3[cd]ef = abcabaccdcdcdef

const decode = string => {
  // 2 stacks
  // one of the counts, one of the strings
  const counts = [];
  const strings = [];
  let res = "";
  let i = 0;

  while (i < string.length) {
    if (/\d/.test(string[i])) {
      let count = 0;
      while (/\d/.test(string[i])) {
        count = 10 * count + Number(string[i]);
        i++;
      }
      counts.push(count);
    } else if (/\[/.test(string[i])) {
      // strings.push(res);
      // res = "";
      i++;
    } else if (/\]/.test(string[i])) {
      // let temp = strings.pop();
      // let count = counts.pop();
      // while (count) {
      //   temp += temp;
      //   count--;
      // }
      // res += temp;
      i++;
    } else if (/[a-z]/.test(string[i])) {
      // res += string[i];
      i++;
    }
  }
  console.log({ counts });
  return res;
};

console.log(decode("3[a]2[bc]"));
console.log(decode("3[a2[c]]"));
