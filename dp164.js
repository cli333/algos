// find length of longest palindrome string

function sol(str) {
  let map = str
    .split("")
    .reduce((acc, val) => ({ ...acc, [val]: acc[val] + 1 || 1 }), {});

  let len = 0;
  for (let char in map) {
    if (map[char] % 2 === 0) {
      // even numbered chars
      len += map[char];
    } else {
      // odd numbered chars
      len += map[char] - 1;
    }
  }

  // if length is shorter than str, there are still some odd letters that weren't used, so take 1
  return len < str.length ? len + 1 : len;
}

console.log(sol("abbaba"), "baaab is 5");
console.log(sol("abbabab"), "bbaaabb is 7");
console.log(sol("abbaaa"), "baaaab is 6");
console.log(sol("abdccdceeeebebc"), "eedccbabccdee is 13");

function s(str) {
  const map = str.split("").reduce((acc, val) => {
    if (val in acc) {
      acc[val]++;
    } else {
      acc[val] = 1;
    }
    return acc;
  }, {});
  let out = 0;
  for (let char in map) {
    while (map[char] >= 2) {
      map[char] -= 2;
      out += 2;
    }
  }
  if (out < str.length) {
    return out + 1;
  } else {
    return out;
  }
}

function s2(str) {
  const map = str
    .split("")
    .reduce((acc, val) => ({ ...acc, [val]: acc[val] + 1 || 1 }), {});
  let out = "";
  for (let char in map) {
    while (map[char] >= 2) {
      out += char;
      map[char] -= 2;
    }
  }
  for (let char in map) {
    if (map[char] === 1) {
      out += char;
      break;
    }
  }
  return (
    out +
    out
      .split("")
      .slice(0, out.length - 1)
      .reverse()
      .join("")
  );
}

console.log(s("abbaba"), 5);
console.log(s2("abbaba"));
console.log(s("abdccdceeebebc"), 13);
console.log(s2("abdccdceeebebc"));
