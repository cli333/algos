/* 
generate all palindromic decompositions
  ab => a, b
  aab => a, a, b
        aa, b
*/

function sol(str) {
  // time = o(n * 2^n), o(n) * o(2^n), (isPal) * (gen)
  let out = [];
  gen(str, 0, []);
  return out;

  function gen(str, start, curList) {
    if (start === str.length) {
      out.push(curList.slice());
      return;
    } else {
      for (let i = start; i < str.length; i++) {
        if (isPal(str, start, i)) {
          curList.push(str.substring(start, i + 1));
          gen(str, i + 1, curList);
          curList.pop();
        }
      }
    }
  }

  function isPal(str, start, end) {
    while (start < end) {
      if (str[start] !== str[end]) return false;
      start++;
      end--;
    }
    return true;
  }
}

console.log(sol("aabac"));
