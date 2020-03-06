// in a 2d array
// each value indicates the height of a building
// can increase the height of any building
// the skyline (maximum row or column value) must stay the same
// increase the height of the other buildings as much as possible

// return the maximum that the buildings can be increased

const max = grid => {
  let result = 0;
  let rows = grid.length;
  let cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const { maxColVal, maxRowVal } = findMax(i, j, grid);
      result += Math.min(maxColVal, maxRowVal) - grid[i][j]; // height increase = min of (row vs col) - the original height
    }
  }

  return result;

  function findMax(i, j, grid) {
    let maxColVal = 0;
    let maxRowVal = 0;
    // find max rows
    for (let b of grid[i]) {
      maxRowVal = Math.max(maxRowVal, b);
    }
    // find max cols
    for (let row of grid) {
      maxColVal = Math.max(maxColVal, row[j]);
    }
    return { maxColVal, maxRowVal };
  }
};

console.log(
  max([
    [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0]
  ])
);

// 35

// let result = [
//   [8, 4, 8, 7],
//   [7, 4, 7, 7],
//   [9, 4, 8, 7],
//   [3, 3, 3, 3]
// ];
