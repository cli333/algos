// given smaller string s and bigger string S
// find all permutations of s in S
// return the indexes

// brute force, BAD
// find all permutations of s
// loop through S and match against permutations of s

// below only o(s * S)!!!
// hash s
// loop thourhg S and compare the current substring to the hash of s

const map = string => {
  return [...string].reduce((a, b) => {
    a[b] = a[b] + 1 || 1;
    return a;
  }, {});
};

const find = (a, b) => {
  // a is the smaller
  // use a sliding window
  // o (a * b)
  const mapA = map(a);
  const window = a.length;
  let out = [];

  for (let i = 0; i < b.length - window; i++) {
    let mapB = map(b.slice(i, window + i));
    let same = true;
    for (let char in mapA) {
      if (mapA[char] !== mapB[char]) {
        same = false;
        break;
      }
    }
    if (same) out.push({ i, string: b.slice(i, window + i) });
  }

  return out;
};

find("abe", "asdfaiebasdfaebsdf");
