// sometimes when pushing a character (c) a key is long pressed, check if a character was long pressed on keyboard
// 'alex', 'aaleex', true
// 'saeed', 'ssaaedd', false
// 'leelee', 'lleeellee', true

// basically, looking for EXTRAS not MISSING

const long = (name, typed) => {
  if (name.length === typed.length) return true;
  if (name.length > typed.length) return false;

  let i = 0; // name pointer
  let j = 0; // typed pointer

  // loop through the longer string, typed
  // loop thorugh i while the name[i] = typed[j]
  // if j=0 / first character of typed not equal to first char of name => false
  // j and j-1 not equal, not long pressed => false

  // return if i has reached the end OR equals the name.length

  while (j < typed.length) {
    if (i < name.length && name[i] === typed[j]) {
      i++;
    } else if (j === 0 || typed[j] !== typed[j - 1]) {
      return false;
    }
    j++;
  }
  return i === name.length;
};

console.log(long("alex", "aaleex")); // true
console.log(long("saeed", "ssaaedd")); // false
console.log(long("leelee", "lleeellee")); // true
