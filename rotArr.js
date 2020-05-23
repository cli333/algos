function solve(matrix) {
  // rotate 90 degrees clockwise
  // new arr
  const out = [];

  for (let i = 0; i < matrix.length; i++) {
    out.push([]);
  }

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      out[c][r] = matrix[r][c];
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    out[i] = out[i].reverse();
  }

  return out;
}

function solve2(matrix) {
  // in place
  // reverse all sub arrs
  // flip diagonally

  // for (let row of matrix) {
  //   row = row.reverse();
  // }

  // let len = matrix.length;

  // const seen = {};

  // for (let r = 0; r < matrix.length; r++) {
  //   for (let c = 0; c < matrix[r].length; c++) {
  //     // coords of cell to swap with
  //     // are the # of rows - (row index + col index) - 1
  //     // add this to the current row index and col
  //     let add = len - (r + c) - 1;
  //     let s = `${r}-${c}`;
  //     let s2 = `${r + add}-${c + add}`;
  //     if (
  //       matrix[r + add] &&
  //       matrix[r + add][c + add] &&
  //       !seen[s] &&
  //       !seen[s2]
  //     ) {
  //       [matrix[r][c], matrix[r + add][c + add]] = [
  //         matrix[r + add][c + add],
  //         matrix[r][c],
  //       ];
  //       seen[s] = true;
  //       seen[s2] = true;
  //     }
  //   }
  // }

  // flip diagonally, bottom left to top right
  for (let r = 0; r < matrix.length; r++) {
    for (let c = r; c < matrix[r].length; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }

  // flip horizontally

  for (let row of matrix) {
    row = row.reverse();
  }

  return matrix;
}

console.log(
  solve([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

/*
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];
*/

console.log(
  solve2([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

/*
[
  [ 13, 9, 5, 1 ],
  [ 14, 10, 6, 2 ],
  [ 15, 11, 7, 3 ],
  [ 16, 12, 8, 4 ]
]
*/
