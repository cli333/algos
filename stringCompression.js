// Given an array of characters, compress it in -place.

// The length after compression must always be smaller than or equal to the original array.

// Every element of the array should be a character(not int) of length 1.

// After you are done modifying the input array in -place, return the new length of the array.

// Follow up:
// Could you solve it using only O(1) extra space ?

//   Example 1:

// Input:
// ["a", "a", "b", "b", "c", "c", "c"]

// Output:
// Return 6, and the first 6 characters of the input array should be: ["a", "2", "b", "2", "c", "3"]

// Explanation:
// "aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".

// Example 2:

// Input:
// ["a"]

// Output:
// Return 1, and the first 1 characters of the input array should be: ["a"]

// Explanation:
// Nothing is replaced.

//   Example 3:

// Input:
// ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]

// Output:
// Return 4, and the first 4 characters of the input array should be: ["a", "b", "1", "2"].

//   Explanation:
// Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
// Notice each digit has it's own entry in the array.

const solve = (chars) => {
  // two pointers
  // only compress if the sequence i to j > 1
  // i and j are pointers
  // index is where we change the chars arr/ length of the compressed array
  let index = 0;
  let i = 0;

  while (i < chars.length) {
    let j = i;
    while (j < chars.length && chars[i] === chars[j]) {
      // if i and j are same char, keep increment j
      // by end chars[j] !== chars[i]
      j++;
    }

    // increase the index, after j has gone forward
    index++;

    // check if i-j is greater than 1
    // for the 'string' of j - 1, replace the char @ index with the characters of String(j-1)
    if (j - i > 1) {
      let count = String(j - i);
      for (let c of count.split("")) {
        chars[index] = c;
        index++;
      }
    }

    // switch i to the new char in the chars arr
    i = j;
  }

  return index;
};

function solve2(chars) {
  let idx = 0;
  let i = 0;
  while (i < chars.length) {
    let j = i;
    while (j < chars.length && chars[j] !== chars[i]) {
      j++;
    }
    idx++;
    if (j - i > 1) {
      let count = "" + j - i;
      for (let c of count.split("")) {
        chars[idx] = c;
        idx++;
      }
    }
    i = j;
  }

  return idx;
}

console.log(solve(["a", "a", "b", "b", "c", "c", "c"]));
console.log(solve(["a"]));
console.log(
  solve(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
);
