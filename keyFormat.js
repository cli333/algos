// given an S, and k
// format S such that each group of chars in S is k length
// except for first group which can be shorter than k, but must contain atleast one char
// must be dashes between groups

// SBed-df-8-9 => SBed-df89, k=4

// 2-5g-3-j, => 2-5g-3j, k=2

const format = (s, k) => {
  let arr = s.replace(/-/g, "").split("");
  // go backwards through string and insert '-'
  for (let i = arr.length - k; i > 0; i -= k) {
    // index, how many to replace, the replacement
    arr.splice(i, 0, "-");
  }

  return arr.join("");
};

console.log(format("SBed-df-8-9", 4));
console.log(format("2-5g-3-j", 2));
