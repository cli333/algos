// 1463. Cherry Pickup II
// Hard

// 726

// 9

// Add to List

// Share
// Given a rows x cols matrix grid representing a field of cherries. Each cell in grid represents the number of cherries that you can collect.

// You have two robots that can collect cherries for you, Robot #1 is located at the top-left corner (0,0) , and Robot #2 is located at the top-right corner (0, cols-1) of the grid.

// Return the maximum number of cherries collection using both robots  by following the rules below:

// From a cell (i,j), robots can move to cell (i+1, j-1) , (i+1, j) or (i+1, j+1).
// When any robot is passing through a cell, It picks it up all cherries, and the cell becomes an empty cell (0).
// When both robots stay on the same cell, only one of them takes the cherries.
// Both robots cannot move outside of the grid at any moment.
// Both robots should reach the bottom row in the grid.

// Example 1:

// Input: grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]]
// Output: 24
// Explanation: Path of robot #1 and #2 are described in color green and blue respectively.
// Cherries taken by Robot #1, (3 + 2 + 5 + 2) = 12.
// Cherries taken by Robot #2, (1 + 5 + 5 + 1) = 12.
// Total of cherries: 12 + 12 = 24.

function s(grid) {
  // robot 1, (0, 0)
  // robot 2, (0, cols)
  const rows = grid.length - 1;
  const cols = grid[0].length - 1;
  const memo = {};
  const res = helper(0, 0, cols);
  return res;

  function helper(row, c1, c2) {
    if (memo[`${row}-${c1}-${c2}`]) {
      return memo[`${row}-${c1}-${c2}`];
    }

    if (row > rows) return 0;

    if (c1 < 0 || c1 > cols || c2 < 0 || c2 > cols) {
      return -Infinity;
    }

    let cherries;
    if (c1 === c2) {
      cherries = grid[row][c1];
    } else {
      cherries = grid[row][c1] + grid[row][c2];
    }

    let nextCherries = -Infinity;
    const directions = [-1, 0, 1];
    for (let d1 of directions) {
      for (let d2 of directions) {
        const nc1 = c1 + d1;
        const nc2 = c2 + d2;
        nextCherries = Math.max(nextCherries, helper(row + 1, nc1, nc2));
      }
    }
    cherries += nextCherries;
    memo[`${row}-${c1}-${c2}`] = cherries;
    return cherries;
  }
}

console.log(
  s([
    [3, 1, 1],
    [2, 5, 1],
    [1, 5, 5],
    [2, 1, 1],
  ]),
  24
);
