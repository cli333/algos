// given a 2d array
// an island is a group of 1s connected horizontall or vertically
// find max area of island
// if no island, max = 0

const findMaxIsland = grid => {
  let max = 0;
  let rows = grid.length;
  let cols = grid[0].length;
  let visited = [...Array(rows)].map(row => Array(cols));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        // search adjacent cells
        // reset max
        max = Math.max(max, maxArea(i, j, grid));
      }
    }
  }

  return max;

  function maxArea(i, j, grid) {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[i].length ||
      grid[i][j] === 0 ||
      visited[i][j] // need to check if already visited, else stack overflow
    )
      return 0;

    // set visited to true
    visited[i][j] = true;

    return (
      1 +
      maxArea(i + 1, j, grid) +
      maxArea(i - 1, j, grid) +
      maxArea(i, j + 1, grid) +
      maxArea(i, j - 1, grid)
    );
  }
};

let grid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1]
];

console.log(findMaxIsland(grid));
