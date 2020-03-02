// given two arrays of words, all lowercase
// A= [amazon, apple, facebook, google], B=[e, o]
// => [facebook, google]
// return a list of all universal words in A, 'wrr' is not a subset of 'world', but is a subset of 'warrior'

// brute force method is o(A*B), NOT GOOD
// find o(A + B) solution?

const sub = (A, B) => {
  let res = [];
  let mapB = map(B);

  for (let a of A) {
    const mapA = m(a);

    let isSubset = true;
    for (let char in mapB) {
      if (!mapA[char] || mapA[char] < mapB[char]) {
        isSubset = false;
        break;
      }
    }
    if (isSubset) res.push(a);
  }
  return res;

  function map(words) {
    let map = {};
    for (let word of words) {
      const minMap = m(word);
      for (let char in minMap) {
        if (char in map) {
          map[char] = Math.max(minMap[char], map[char]);
        } else {
          map[char] = minMap[char];
        }
      }
    }
    return map;
  }

  function m(string) {
    return [...string].reduce((a, b) => {
      a[b] = a[b] + 1 || 1;
      return a;
    }, {});
  }
};

console.log(sub(["amazon", "apple", "facebook", "leetcode"], ["le", "o"]));
