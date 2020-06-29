// palindrome partitioning
// partition string so every substring is a palindrome
// all possibilities

function sol(s) {
  const res = [];
  helper(0, []);
  return res;

  function helper(idx, list) {
    if (idx === s.length) {
      res.push(list.slice());
      return;
    }

    for (let i = idx; i < s.length; i++) {
      if (isPal(s.substring(idx, i + 1))) {
        list.push(s.substring(idx, i + 1));
        helper(i + 1, list);
        list.pop();
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

console.log(sol("aab"));
/* 
  [
    [aa, b],
    [a, a, b]
  ]
*/
