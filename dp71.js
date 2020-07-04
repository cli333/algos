// According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// Given a board with m by n cells, each cell has an initial state live(1) or dead(0).Each cell interacts with its eight neighbors(horizontal, vertical, diagonal) using the following four rules(taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies, as if caused by under - population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over - population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// Write a function to compute the next state(after one update) of the board given its current state.The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

//   Example:

// Input:
// [
//   [0, 1, 0],
//   [0, 0, 1],
//   [1, 1, 1],
//   [0, 0, 0]
// ]
// Output:
// [
//   [0, 0, 0],
//   [1, 0, 1],
//   [0, 1, 1],
//   [0, 1, 0]
// ]
// Follow up:

// Could you solve it in -place ? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
// In this question, we represent the board using a 2D array.In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array.How would you address these problems ?

function sol(board) {
  // 0, dead
  // 1, live
  // -1, dead -> live
  // 2, live -> dead

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        const liveNeighbors = count(i, j);
        if (liveNeighbors === 3) board[i][j] = -1;
      }

      if (board[i][j] === 1) {
        const liveNeighbors = count(i, j);
        if (liveNeighbors < 2 || liveNeighbors > 3) board[i][j] = 2;
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === -1) board[i][j] = 1;
      if (board[i][j] === 2) board[i][j] = 0;
    }
  }

  return board;

  function count(r, c) {
    let res = 0;
    if (board[r + 1] && board[r + 1][c] && board[r + 1][c] > 0) res++;
    if (board[r - 1] && board[r - 1][c] && board[r - 1][c] > 0) res++;
    if (board[r] && board[r][c - 1] && board[r][c - 1] > 0) res++;
    if (board[r] && board[r][c + 1] && board[r][c + 1] > 0) res++;
    if (board[r + 1] && board[r + 1][c + 1] && board[r + 1][c + 1] > 0) res++;
    if (board[r + 1] && board[r + 1][c - 1] && board[r + 1][c - 1] > 0) res++;
    if (board[r - 1] && board[r - 1][c + 1] && board[r - 1][c + 1] > 0) res++;
    if (board[r - 1] && board[r - 1][c - 1] && board[r - 1][c - 1] > 0) res++;
    return res;
  }
}

console.log(
  sol([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
);
// [
//   [0, 0, 0],
//   [1, 0, 1],
//   [0, 1, 1],
//   [0, 1, 0]
// ]
