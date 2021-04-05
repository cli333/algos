// 741. Cherry Pickup
// Hard

// 1540

// 93

// Add to List

// Share
// You are given an n x n grid representing a field of cherries, each cell is one of three possible integers.

// 0 means the cell is empty, so you can pass through,
// 1 means the cell contains a cherry that you can pick up and pass through, or
// -1 means the cell contains a thorn that blocks your way.
// Return the maximum number of cherries you can collect by following the rules below:

// Starting at the position (0, 0) and reaching (n - 1, n - 1) by moving right or down through valid path cells (cells with value 0 or 1).
// After reaching (n - 1, n - 1), returning to (0, 0) by moving left or up through valid path cells.
// When passing through a path cell containing a cherry, you pick it up, and the cell becomes an empty cell 0.
// If there is no valid path between (0, 0) and (n - 1, n - 1), then no cherries can be collected.

// Example 1:

// Input: grid = [[0,1,-1],[1,0,-1],[1,1,1]]
// Output: 5
// Explanation: The player started at (0, 0) and went down, down, right right to reach (2, 2).
// 4 cherries were picked up during this single trip, and the matrix becomes [[0,1,-1],[0,0,-1],[0,0,0]].
// Then, the player went left, up, up, left to return home, picking up one more cherry.
// The total number of cherries picked up is 5, and this is the maximum possible.

function s(grid) {
  const memo = {};
  const n = grid.length;
  const res = helper(0, 0, 0, 0);
  return res > 0 ? res : 0;

  function helper(r1, c1, r2, c2) {
    if (memo[`${r1}-${c1}-${r2}-${c2}`]) {
      return memo[`${r1}-${c1}-${r2}-${c2}`];
    }
    // out of bounds or position of one of players is -1
    if (
      r1 > n - 1 ||
      c1 > n - 1 ||
      r2 > n - 1 ||
      c2 > n - 1 ||
      grid[r1][c1] === -1 ||
      grid[r2][c2] === -1
    ) {
      return -Infinity;
    }
    // reached the end, return the value here
    // should both reach here at same time
    // so one player picks and returns this cherry
    if (r1 === n - 1 && c1 === n - 1) {
      return grid[r1][c1];
    }
    // if reached same cell, one player picks,
    // else both player can pick
    let curCherries = 0;
    if (r1 === r2 && c1 === c2) {
      curCherries = grid[r1][c1];
    } else {
      curCherries = grid[r1][c1] + grid[r2][c2];
    }

    let nextCherries = -Infinity;
    const directions = [
      [0, 1],
      [1, 0],
    ];
    for (let d1 of directions) {
      for (let d2 of directions) {
        const nr1 = r1 + d1[0];
        const nc1 = c1 + d1[1];
        const nr2 = r2 + d2[0];
        const nc2 = c2 + d2[1];
        nextCherries = Math.max(nextCherries, helper(nr1, nc1, nr2, nc2));
      }
    }
    curCherries += nextCherries;
    memo[`${r1}-${c1}-${r2}-${c2}`] = curCherries;
    return curCherries;
  }
}

console.log(
  s([
    [0, 1, -1],
    [1, 0, -1],
    [1, 1, 1],
  ]),
  5
);
console.log(
  s([
    [1, 1, -1],
    [1, -1, 1],
    [-1, 1, 1],
  ]),
  0
);
console.log(
  s([
    [1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1],
  ]),
  15
);

// dp solution
function s2(grid) {
  const n = grid.length;
  const dp = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      const cell = [];
      for (let k = 0; k < n; k++) {
        cell.push(-Infinity);
      }
      row.push(cell);
    }
    dp.push(row);
  }
  return Math.max(0, helper(0, 0, 0));

  function helper(r1, c1, c2) {
    const r2 = r1 + c1 - c2;
    if (
      r1 > n - 1 ||
      c1 > n - 1 ||
      r2 > n - 1 ||
      c2 > n - 1 ||
      grid[r1][c1] === -1 ||
      grid[r2][c2] === -1
    ) {
      return -Infinity;
    } else if (r1 === n - 1 && c1 === n - 1) {
      return grid[r1][c1];
    } else if (dp[r1][c1][c2] !== -Infinity) {
      return dp[r1][c1][c2];
    } else {
      let cherries = grid[r1][c1];
      if (r1 !== r2 && c1 !== c2) cherries += grid[r2][c2];
      cherries += Math.max(
        helper(r1, c1 + 1, c2 + 1),
        helper(r1 + 1, c1, c2 + 1),
        helper(r1, c1 + 1, c2),
        helper(r1 + 1, c1, c2)
      );
      dp[r1][c1][c2] = cherries;
      return cherries;
    }
  }
}

console.log(
  s2([
    [0, 1, -1],
    [1, 0, -1],
    [1, 1, 1],
  ]),
  5
);
console.log(
  s2([
    [1, 1, -1],
    [1, -1, 1],
    [-1, 1, 1],
  ]),
  0
);
console.log(
  s2([
    [1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1],
  ]),
  15
);
