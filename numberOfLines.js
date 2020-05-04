// We are to write the letters of a given string S, from left to right into lines.Each line has maximum width 100 units, and if writing a letter would cause the width of the line to exceed 100 units, it is written on the next line.We are given an array widths, an array where widths[0] is the width of 'a', widths[1] is the width of 'b', ..., and widths[25] is the width of 'z'.

// Now answer two questions: how many lines have at least one character from S, and what is the width used by the last such line ? Return your answer as an integer list of length 2.

// Example:
// Input:
let widths = [
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10
];
let S = "abcdefghijklmnopqrstuvwxyz";
// Output: [3, 60]
// Explanation:
// All letters have the same length of 10. To write all 26 letters,
//   we need two full lines and one line with 60 units.
//     Example :
// Input:
// widths = [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
// S = "bbbcccdddaaa"
// Output: [2, 4]
// Explanation:
// All letters except 'a' have the same length of 10, and
// "bbbcccdddaa" will cover 9 * 10 + 2 * 4 = 98 units.
// For the last 'a', it is written on the second line because
// there is only 2 units left in the first line.
// So the answer is 2 lines, plus 4 units in the second line.

const number = (widths, S) => {
  let result = [null, null];
  let numLines = 1;
  let width = 0;

  for (let i = 0; i < S.split("").length; i++) {
    let charWidth = widths[i];
    if (charWidth + width > 100) {
      numLines + 1;
      width = 0;
    }
    width += charWidth;
  }

  result[0] = numLines;
  result[1] = width;
  return result;
};

console.log(number(widths, S));