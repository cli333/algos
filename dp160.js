// longest substring without repeating characters

// given a string str made of alphabetical letters, find the length of the longest substring without repeating characters

function sol(str) {
  const map = {};
  const n = str.length;
  let a = 0;
  let b = 0;
  let max = 0;
  let curMax = 0;
  while (b < n) {
    const curChar = str[b];
    if (!map[curChar]) {
      map[curChar] = true;
      b++;
      curMax++;
    } else {
      while (str[a] !== curChar) {
        clearMap(str[a]);
        a++;
        curMax--;
      }
      clearMap(str[a]);
      a++;
      curMax--;
    }

    max = Math.max(max, curMax);
  }

  return { a, b, max, curMax, map };

  function clearMap(char) {
    delete map[char];
  }
}

console.log(sol("aefabcdeffabdef"));
console.log(sol("abcdbeghef"));
