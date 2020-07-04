// Given a 2D grid, each cell is either a wall 'W', an enemy 'E' or empty '0' (the number zero), return the maximum enemies you can kill using one bomb.
// The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since the wall is too strong to be destroyed.
// Note that you can only put the bomb at an empty cell.
// Example:
// For the given grid
// 0 E 0 0
// E 0 W E
// 0 E 0 0
// return 3. (Placing a bomb at (1,1) kills 3 enemies)

function sol(grid) {
  let res = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 0) {
        res = Math.max(res, helper(r, c));
      }
    }
  }
  return res;

  function helper(row, col) {
    let max = 0;
    top(row - 1, col);
    bottom(row + 1, col);
    left(row, col - 1);
    right(row, col + 1);
    return max;

    function top(row, col) {
      if (!grid[row] || !grid[row][col] || grid[row][col] === "W") return;
      if (grid[row][col] === "E") max++;
      top(row - 1, col);
    }

    function bottom(row, col) {
      if (!grid[row] || !grid[row][col] || grid[row][col] === "W") return;
      if (grid[row][col] === "E") max++;
      bottom(row + 1, col);
    }

    function left(row, col) {
      if (!grid[row] || !grid[row][col] || grid[row][col] === "W") return;
      if (grid[row][col] === "E") max++;
      left(row, col - 1);
    }

    function right(row, col) {
      if (!grid[row] || !grid[row][col] || grid[row][col] === "W") return;
      if (grid[row][col] === "E") max++;
      right(row, col + 1);
    }
  }
}

console.log(
  sol([
    [0, "E", 0, 0],
    ["E", 0, "W", "E"],
    [0, "E", 0, 0],
  ])
);
