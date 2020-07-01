// palindromic permutations
// return all pal permutations for a given string

function sol(s) {
  let odds = 0;
  let map = {};
  const res = [];
  for (let c of s) {
    map[c] = map[c] + 1 || 1;
    if (map[c] % 2 !== 0) {
      odds++;
    } else {
      odds--;
    }
  }

  if (odds > 1) return res;
  let temp = "";
  // place odd numbered char in center
  for (let c in map) {
    if (map[c] % 2 !== 0) {
      temp += c;
      map[c]--;
      break;
    }
  }

  helper(temp);
  return res;

  function helper(cur) {
    if (cur.length === s.length) {
      res.push(cur);
      return;
    }

    for (let c in map) {
      if (map[c] >= 2) {
        let temp = cur;
        cur = c + cur + c;
        map[c] -= 2;
        helper(cur);
        map[c] += 2;
        cur = temp;
      } else if (map[c] === 1) {
        let a = cur.substring(0, Math.floor(cur.length));
        let b = cur.substring(Math.floor(cur.length) + 1);
        map[c]--;
        helper(a + c + b);
      }
    }
  }

  // function helper(cur = "") {
  //   if (cur.length === s.length) {
  //     res.push(cur);
  //     return;
  //   }

  //   for (let c in map) {
  //     if (map[c] >= 2) {
  //       let temp = cur;
  //       cur = c + cur + c;
  //       map[c] -= 2;
  //       helper(cur);
  //       map[c] += 2;
  //       cur = temp;
  //     } else if (map[c] === 1) {
  //       let a = cur.substring(0, Math.floor(cur.length / 2));
  //       let b = cur.substring(Math.floor(cur.length / 2) + 1);
  //       map[c]--;
  //       helper(a + c + b);
  //     }
  //   }
  // }
}

console.log(sol("abba")); // abba baab
console.log(sol("abbcc"));
console.log(sol("abc"));
