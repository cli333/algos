// [cat, bt, hat, tree], chars = 'atach'
// good strings = 'cat' and 'hat'

// find strings that are good (can be made using from chars in a string 'chars')

let s = ["cat", "bt", "hat", "tree", "caaaaaat"];
let c = "atach";

const goodStrings = (strings, chars) => {
  let charMap = mapper(chars);
  let out = [];

  for (let string of strings) {
    let stringMap = mapper(string);
    let isGood = true;
    for (let char in stringMap) {
      if (!charMap[char] || stringMap[char] > charMap[char]) {
        isGood = false;
      }
    }
    if (isGood) out.push(string);
  }

  return out;
};

function mapper(string) {
  return [...string].reduce((a, b) => {
    a[b] = a[b] + 1 || 1;
    return a;
  }, {});
}

console.log(goodStrings(s, c));
