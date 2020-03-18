// given a string s and a character c, return an array of ints representing the shortest distance from the character c in the stirng
// closest instance of the char
// there are multiple e's in below example

// 'loveleetcode', c = 'e'
// [3, 2, 1, 0, 1....]

const shortest = (string, char) => {
  const out = [...Array(string.length)];
  // loop from the left
  // keep track of last instance of the char (from the left)
  // set the output

  // loop from the right
  // keep track of the last instane of the char (from the left)
  // set the output (MIN distance of the last char on the LEFT and last char on the RIGHT)
  let last_position = -string.length; // set to the last position, doesn't matter will correct on the last loop
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      last_position = i;
    }
    out[i] = Math.abs(i - last_position);
  }

  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === char) {
      last_position = i;
    }
    out[i] = Math.min(Math.abs(i - last_position), out[i]);
  }

  console.log(string.split(""));
  return out;
};

console.log(shortest("loveleetcode", "e"));
