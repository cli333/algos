// can A string become B string after some number of left shifts
// abcde => ? cdeab
// true

// abcde => abced
// false

const rotateString = (a, b) => {
  // add a onto itself
  // will contain all possible shifts
  return (a + a).includes(b);
};

console.log(rotateString("abcde", "abced"));
console.log(rotateString("abcde", "cdeab"));
