// remove adjacent duplicates

// 'abbaca' => 'ca'
// remove bb
// then aaca
// remove aa

const remove = s => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      s = s.slice(0, i) + s.slice(i + 2);
      return remove(s);
    }
  }

  return s;
};

console.log(remove("abbaca"));
console.log(remove("acaaabbbaacdddd"));
