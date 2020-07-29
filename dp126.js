// Given a m * n grid, where each cell is either 0(empty) or 1(obstacle).In one step, you can move up, down, left or right from and to an empty cell.

// Return the minimum number of steps to walk from the upper left corner(0, 0) to the lower right corner(m - 1, n - 1) given that you can eliminate at most k obstacles.If it is not possible to find such walk return -1.

// Example 1:

// Input:
// grid =
//   [[0, 0, 0],
//   [1, 1, 0],
//   [0, 0, 0],
//   [0, 1, 1],
//   [0, 0, 0]],
//   k = 1
// Output: 6
// Explanation:
// The shortest path without eliminating any obstacle is 10.
// The shortest path with one obstacle elimination at position(3, 2) is 6. Such path is(0, 0) -> (0, 1) -> (0, 2) -> (1, 2) -> (2, 2) -> (3, 2) -> (4, 2).

//   Example 2:

// Input:
// grid =
//   [[0, 1, 1],
//   [1, 1, 1],
//   [1, 0, 0]],
//   k = 1
// Output: -1
// Explanation:
// We need to eliminate at least two obstacles to find such a walk.

function sol(grid, k) {
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  // 0 is empty
  // 1 is obstacle
  // k is max number of obstacles to remove
  // start = 0,0
  // end = m-1, n-1
  const m = grid.length;
  const n = grid[0].length;
  const seen = JSON.parse(JSON.stringify(grid));
  for (let row of seen) {
    row.fill(Infinity);
  }
  seen[0][0] = 0;
  const q = [[0, 0, 0]];

  let steps = 0;
  while (q.length) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      const [row, col, o] = q.shift();
      if (row === m - 1 && col === n - 1) return steps;

      for (let d of dirs) {
        const r = row + d[0];
        const c = col + d[1];
        if (r >= 0 && r < m && c >= 0 && c < n) {
          const O = o + grid[r][c];
          if (O >= seen[r][c] || O > k) continue;
          seen[r][c] = O;
          q.push([r, c, O]);
        }
      }
    }
    steps++;
  }

  return -1;
}

console.log(
  sol(
    [
      [0, 0, 0],
      [1, 1, 0],
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    1
  ),
  6
);
console.log(
  sol(
    [
      [0, 1, 1],
      [1, 1, 1],
      [1, 0, 0],
    ],
    1
  ),
  -1
);
