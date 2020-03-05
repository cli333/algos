// given a 2d array, if element is a 1 convert all in row and column to 1

const grid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

const zero = grid => {
  let rows = grid.length;
  let cols = grid[0].length;
  let out = [...Array(rows)].map(row => Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        helper(i, j, out);
      }
    }
  }

  return out;

  function helper(i, j, out) {
    // convert row
    out[i].forEach((_, index, array) => (array[index] = 1));
    // convert column
    for (let row of out) {
      row[j] = 1;
    }
  }
};

console.log(zero(grid));

// let result = [
//   [0, 1, 0, 1, 0, 0, 0],
//   [0, 1, 0, 1, 0, 0, 0],
//   [0, 1, 0, 1, 0, 0, 0],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [0, 1, 0, 1, 0, 0, 0],
//   [0, 1, 0, 1, 0, 0, 0]
// ];
