// In a given grid, each cell can have one of three values:

// the value 0 representing an empty cell;
// the value 1 representing a fresh orange;
// the value 2 representing a rotten orange.
// Every minute, any fresh orange that is adjacent(4 - directionally) to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange.If this is impossible, return -1 instead.

//   Example 2:

// Input: [[2, 1, 1], [0, 1, 1], [1, 0, 1]]
// Output: -1
// Explanation: The orange in the bottom left corner(row 2, column 0) is never rotten, because rotting only happens 4 - directionally.
//   Example 3:

// Input: [[0, 2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

function solve(grid) {
  let minutes = 0;
  const goodOranges = {};
  const rottenOranges = {};
  // fruit rots in waves
  const waves = {};

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 2) rottenOranges[`${r}-${c}`] = { r, c };
      if (grid[r][c] === 1) goodOranges[`${r}-${c}`] = { r, c };
    }
  }

  for (let rotten in rottenOranges) {
    const { r, c } = rottenOranges[rotten];
    makeRotten(r + 1, c, grid, 0);
    makeRotten(r - 1, c, grid, 0);
    makeRotten(r, c + 1, grid, 0);
    makeRotten(r, c - 1, grid, 0);
  }

  // find leftover good oranges
  for (let good in goodOranges) {
    const { r, c } = goodOranges[good];
    if (grid[r][c] === 1) return -1;
  }

  console.log({ waves });
  return minutes;

  function makeRotten(r, c, grid, wave) {
    if (!grid[r] || !grid[r][c] || grid[r][c] === 2 || grid[r][c] === 0) return;
    if (grid[r][c] === 1) {
      console.log({ wave, r, c, grid });
      if (!waves[wave]) {
        minutes++;
        waves[wave] = true;
      }

      grid[r][c] = 2;
      makeRotten(r + 1, c, grid, wave + 1);
      makeRotten(r - 1, c, grid, wave + 1);
      makeRotten(r, c + 1, grid, wave + 1);
      makeRotten(r, c - 1, grid, wave + 1);
    }
  }
}

console.log(
  solve([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
); // 4
console.log(
  solve([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
); // -1, left corner orange never rots
console.log(solve([[0, 2]])); // 0, no good oranges to rot
console.log(
  solve([
    [2, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ])
);
