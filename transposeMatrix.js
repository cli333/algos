// flip a 2d array across its diagonal axis
// axis => top left to bottom right
// ROWS BECOME COLUMNS

const trans = matrix => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const out = [...Array(cols)].map(row => Array(rows).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      out[j][i] = matrix[i][j];
    }
  }

  return out;
};

console.log(
  trans([
    [1, 4],
    [2, 5],
    [3, 6]
  ])
);

// [[1, 2, 3], [4, 5, 6]]

console.log(
  trans([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);
