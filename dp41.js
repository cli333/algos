// given a string s, find all palindromic permutations

// 'aabb' => ['abba', 'baab']

function sol(s) {
  const res = new Set();
  helper(0, [], Array(s.length).fill(false));
  return [...res];

  function helper(idx, curString, used) {
    console.log(curString);
    if (idx === s.length && isPal(curString)) {
      res.add(curString.join(""));
      return;
    }

    for (let i = 0; i < s.length; i++) {
      if (!used[i]) {
        used[i] = true;
        curString.push(s[i]);
        helper(idx + 1, curString, used);
        curString.pop();
        used[i] = false;
      }
    }
  }

  function isPal(s) {
    let a = 0;
    let b = s.length - 1;

    while (a < b) {
      if (s[a] !== s[b]) return false;
      a++;
      b--;
    }
    return true;
  }
}

console.log(sol("aabb"));
console.log(sol("catac"));
