// On an 8x8 chessboard, there can be multiple Black Queens and one White King.

// Given an array of integer coordinates queens that represents the positions of the Black Queens, and a pair of coordinates
// king that represent the position of the White King, return the coordinates of all the queens (in any order) that can attack the King.

// Example 1:

// Input: queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]
// Output: [[0,1],[1,0],[3,3]]
// Explanation:
// The queen at [0,1] can attack the king cause they're in the same row.
// The queen at [1,0] can attack the king cause they're in the same column.
// The queen at [3,3] can attack the king cause they're in the same diagnal.
// The queen at [0,4] can't attack the king cause it's blocked by the queen at [0,1].
// The queen at [4,0] can't attack the king cause it's blocked by the queen at [1,0].
// The queen at [2,4] can't attack the king cause it's not in the same row/column/diagnal as the king.

/*
[
  [K, Q, _, _, Q, _, _, _],
  [Q, _, _, _, _, _, _, _],
  [_, _, _, _, Q, _, _, _],
  [_, _, _, Q, _, _, _, _],
  [Q, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _]
]
*/

const solve = (queens, king) => {
  const out = [];
  const board = [];

  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      row.push("");
    }
    board.push(row);
  }

  // expand from king in all directions and find queen
  // when hit a queen break

  board[king[0]][king[1]] = "K";

  for (let q of queens) {
    const [row, col] = q;
    board[row][col] = "Q";
  }

  // console.log({ board });

  travVert(board, king[0], king[1], 1);
  travVert(board, king[0], king[1], -1);
  travHoriz(board, king[0], king[1], 1);
  travHoriz(board, king[0], king[1], -1);
  travDiagDown(board, king[0], king[1], 1);
  travDiagDown(board, king[0], king[1], -1);
  travDiagUp(board, king[0], king[1], 1);
  travDiagUp(board, king[0], king[1], -1);

  function travVert(board, row, col, direction) {
    if (!board[row] || !board[row][col]) {
      return;
    }
    if (board[row][col] === "Q") {
      board[row][col] = "X";
      out.push([[row, col]]);
      return;
    }

    if (direction === 1) {
      // go up
      travVert(board, row + 1, col, direction);
    } else {
      // go down
      travVert(board, row - 1, col, direction);
    }
  }

  function travHoriz(board, row, col, direction) {
    if (!board[row] || !board[row][col]) {
      return;
    }
    if (board[row][col] === "Q") {
      board[row][col] = "X";
      out.push([[row, col]]);
      return;
    }

    if (direction === 1) {
      // go to right
      travHoriz(board, row, col + 1, direction);
    } else {
      // go to left
      travHoriz(board, row, col - 1, direction);
    }
  }

  function travDiagUp(board, row, col, direction) {
    if (!board[row] || !board[row][col]) {
      return;
    }
    if (board[row][col] === "Q") {
      board[row][col] = "X";
      out.push([[row, col]]);
      return;
    }

    if (direction === 1) {
      // go to right
      travDiagUp(board, row - 1, col + 1, direction);
    } else {
      // go to left
      travDiagUp(board, row + 1, col - 1, direction);
    }
  }

  function travDiagDown(board, row, col, direction) {
    if (!board[row] || !board[row][col]) {
      return;
    }
    if (board[row][col] === "Q") {
      board[row][col] = "X";
      out.push([[row, col]]);
      return;
    }

    if (direction === 1) {
      // go to right
      travDiagDown(board, row + 1, col + 1, direction);
    } else {
      // go to left
      travDiagDown(board, row - 1, col - 1, direction);
    }
  }

  return { out, board };
};

console.log(
  solve(
    [
      [0, 1],
      [1, 0],
      [4, 0],
      [0, 4],
      [3, 3],
      [2, 4],
    ],
    [0, 0]
  )
); // [[0,1],[1,0],[3,3]]

console.log(
  solve(
    [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 4],
      [3, 5],
      [4, 4],
      [4, 5],
    ],
    [3, 3]
  )
); // [[2,2],[3,4],[4,4]]

console.log(
  solve(
    [
      [5, 6],
      [7, 7],
      [2, 1],
      [0, 7],
      [1, 6],
      [5, 1],
      [3, 7],
      [0, 3],
      [4, 0],
      [1, 2],
      [6, 3],
      [5, 0],
      [0, 4],
      [2, 2],
      [1, 1],
      [6, 4],
      [5, 4],
      [0, 0],
      [2, 6],
      [4, 5],
      [5, 2],
      [1, 4],
      [7, 5],
      [2, 3],
      [0, 5],
      [4, 2],
      [1, 0],
      [2, 7],
      [0, 1],
      [4, 6],
      [6, 1],
      [0, 6],
      [4, 3],
      [1, 7],
    ],
    [3, 4]
  )
); // [[2,3],[1,4],[1,6],[3,7],[4,3],[5,4],[4,5]]
