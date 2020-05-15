// Given a 2D board containing 'X' and 'O'(the letter O), capture all regions surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

//   Example:

// X X X X
// X O O X
// X X O X
// X O X X
// After running your function, the board should be:

// X X X X
// X X X X
// X X X X
// X O X X
// Explanation:

// Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not
// flipped to 'X'.Any 'O' that is not on the border and it is not connected to an 'O' on the border will be
// flipped to 'X'.Two cells are connected if they are adjacent cells connected horizontally or vertically.

const solve = (board) => {
  const newBoard = JSON.parse(JSON.stringify(board));

  const rows = newBoard.length;
  const cols = newBoard[0].length;

  // find all "O" on row boundaries
  // explore that region and flag all those "O"s
  for (let i = 0; i < rows; i++) {
    if (newBoard[i][0] === "O") flag(i, 0, newBoard);
    if (newBoard[i][cols - 1] === "O") flag(i, cols - 1, newBoard);
  }

  // find all "O" on col boundaries
  // explore that region and flag all those "O"s
  for (let i = 0; i < cols; i++) {
    if (newBoard[0][i] === "O") flag(0, i, newBoard);
    if (newBoard[cols - 1][i] === "O") flag(rows - 1, i, newBoard);
  }

  // loop through switch remaining "O"s to "X"
  // and flip "*"s to "O"s
  for (let i = 0; i < newBoard.length; i++) {
    for (let j = 0; j < newBoard[i].length; j++) {
      if (newBoard[i][j] === "O") {
        newBoard[i][j] = "X";
      }
      if (newBoard[i][j] === "*") {
        newBoard[i][j] = "O";
      }
    }
  }

  function flag(row, col, newBoard) {
    if (!newBoard[row] || !newBoard[row][col]) return;

    if (newBoard[row][col] === "O") newBoard[row][col] = "*";

    if (newBoard[row + 1] && newBoard[row + 1][col] === "O") {
      flag(row + 1, col, newBoard);
    }
    if (newBoard[row - 1] && newBoard[row - 1][col] === "O") {
      flag(row - 1, col, newBoard);
    }
    if (newBoard[row] && newBoard[row][col + 1] === "O") {
      flag(row, col + 1, newBoard);
    }
    if (newBoard[row] && newBoard[row][col - 1] === "O") {
      flag(row, col - 1, newBoard);
    }
  }

  return newBoard;
};

console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);

// [
//   ["X", "X", "X", "X"],
//   ["X", "X", "X", "X"],
//   ["X", "X", "X", "X"],
//   ["X", "O", "X", "X"],
// ]
