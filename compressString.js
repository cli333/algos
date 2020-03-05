// compress a string
// aabbbcd => a2b3c1d1

const comp = string => {
  let out = "";
  let count = 0;
  let i = 0;

  while (i < string.length) {
    out += string[i];
    count++;
    while (string[i] === string[i + 1]) {
      count++;
      i++;
    }
    out += count;
    count = 0;
    i++;
  }

  return out;
};

console.log(comp("aabbbcd"));
