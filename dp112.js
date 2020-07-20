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

//   Example 2:

// Input:
// ["a"]

// Output:
// Return 1, and the first 1 characters of the input array should be: ["a"]

// Explanation:
// Nothing is replaced.

function sol(chars) {
  let indexRes = 0;
  let index = 0;
  while (index < chars.length) {
    const cur = chars[index];
    let count = 1;
    while (index + 1 < chars.length && chars[index + 1] === cur) {
      index++;
      count++;
    }
    chars[indexRes] = cur;
    indexRes++;
    index++;
    if (count === 1) continue;
    for (let c of String(count).split("")) {
      chars[indexRes] = c;
      indexRes++;
    }
  }
  return indexRes;
}

console.log(sol(["a", "a", "b", "b", "c", "c", "c"]), [
  "a",
  "2",
  "b",
  "2",
  "c",
  "3",
]);
console.log(
  sol(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]),
  ["a", "b", "1", "2"]
);
