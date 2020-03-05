// given a 2d array of 1 and 0
// find permieter of island
// only 1 island, no lakes

let grid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0]
];

const perimeter = grid => {
  let rows = grid.length;
  let cols = grid[0].length;

  let p = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // traverse
      // if see a 1 add 4
      // but if see an adjacent subtract 2
      if (grid[i][j] === 1) {
        p += 4;
        check(i, j, grid);
      }
    }
  }

  return p;

  function check(i, j, grid) {
    // only check left and top or subtract too much
    if (grid[i - 1] && grid[i - 1][j] === 1) p -= 2;
    if (grid[i][j - 1] && grid[i][j - 1] === 1) p -= 2;
  }
};

console.log(perimeter(grid));
