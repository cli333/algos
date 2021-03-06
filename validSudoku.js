// Determine if a 9x9 Sudoku board is valid.Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1 - 9 without repetition.
// Each column must contain the digits 1 - 9 without repetition.
// Each of the 9 3x3 sub - boxes of the grid must contain the digits 1 - 9 without repetition.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

//   Example 1:

// Input:
// [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ]
// Output: true
// Example 2:

// Input:
// [
//   ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being
// modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
// Note:

// A Sudoku board(partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// The given board contain only digits 1 - 9 and the character '.'.
// The given board size is always 9x9.

const solve = (board) => {
  const seen = new Set();

  // create Set of strings
  // loop through the board
  // if current val is not a number
  // if the set doesn't have the string, add the strings 'found in row/col/box' to the set
  // if the set has the string, return false

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let curVal = board[i][j];

      if (curVal !== ".") {
        // check the row
        if (!seen.has(`${curVal} found in row ${i}`)) {
          seen.add(`${curVal} found in row ${i}`);
        } else {
          return false;
        }
        // check the column
        if (!seen.has(`${curVal} found in col ${j}`)) {
          seen.add(`${curVal} found in col ${j}`);
        } else {
          return false;
        }
        // check the box
        if (
          !seen.has(
            `${curVal} found in box ${Math.floor(i / 3)}-${Math.floor(j / 3)}`
          )
        ) {
          seen.add(
            `${curVal} found in box ${Math.floor(i / 3)}-${Math.floor(j / 3)}`
          );
        } else {
          return false;
        }
      }
    }
  }

  return true;
};

console.log(
  solve([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
); // true
