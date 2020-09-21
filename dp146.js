// longest substring with m unique chars

function sol(s, m) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      if (helper(i, j).length > res.length) {
        res = helper(i, j);
      }
    }
  }
  return res;

  function helper(i, j) {
    const sub = s.substring(i, j);
    if (mapper(sub)) {
      return sub;
    } else {
      return "";
    }
  }

  function mapper(s) {
    const map = s
      .split("")
      .reduce((a, b) => ({ ...a, [b]: a[b] + 1 || 1 }), {});
    if (Object.keys(map).length === m) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(sol("karappa", 2), "appa");
console.log(sol("karappa", 3), "arapp");

function sol2(s, m) {
  // window approach
  let i = 0;
  let j = 1;
  let curStr;
  let res = "";
  while (j < s.length && i < s.length) {
    curStr = s.substring(i, j + 1);
    if (mapper(curStr)) {
      if (curStr.length > res.length) {
        res = curStr;
      }
      j++;
    } else {
      i++;
    }
  }
  return curStr;

  function mapper(s) {
    const map = s
      .split("")
      .reduce((a, b) => ({ ...a, [b]: a[b] + 1 || 1 }), {});
    if (Object.keys(map).length === m) {
      return true;
    } else {
      return false;
    }
  }

  // can also create one map
  // when i++, remove char at i from the map
}

console.log(sol2("karappa", 2), "appa");
console.log(sol2("karappa", 3), "arapp");
