// permute a string

function sol(str) {
  const out = [];
  generate(str, 0, str.length);
  return out;

  function generate(str, l, r) {
    if (l === r) {
      out.push(str);
    } else {
      for (let i = l; i < r; i++) {
        str = swap(str, l, i);
        generate(str, l + 1, r);
        str = swap(str, l, i);
      }
    }
  }

  function swap(str, i, j) {
    const newStr = str.split("");
    let temp = newStr[i];
    newStr[i] = newStr[j];
    newStr[j] = temp;
    return newStr.reduce((acc, val) => acc + val, "");
  }
}

console.log(sol("abc"));
