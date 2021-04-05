// return first index where we can find str2 in str1

function sol(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  for (let i = 0; i < n + m; i++) {
    if (s1[i] === s2[0]) {
      if (isValid(s1.slice(i, i + s2.length), s2)) return i;
    }
  }

  return -1;

  function isValid(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
}

console.log(sol("zdaecar534", "car"));

function s(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  // preprocess s1
  // store lengths
  /* 
    abcdababcdma
    000012123401

    aaabaabaaaababa
    012012012334501
  */
  const c = Array(m).fill(0);
  let len = 0;
  for (let i = 0; i < m; i++) {
    if (s1[i] === s1[len]) {
      len++;
    } else {
      while (s1[i] !== s2[len]) {
        if (len === 0) break;
        len--;
      }
    }
    c[i] = len;
  }
  return c;
}

console.log(s("aaabaabaaaababa", "aaba"));
