/*
given a matrix of n*m that contains on 0s and 1s,
where 0 is empty and 1 is a wall,
find the number of paths from top left cell to the bottom right cell,
can only move to bottom or right
*/

function s(matrix, r = 0, c = 0) {
  // time o(2^(n*m))
  // space o(n + m)
  const rows = matrix.length;
  const cols = matrix.length;
  // if (r > rows || c > cols || matrix[r][c] === 1) {
  //   return 0;
  // } else if (r === rows && c === cols) {
  //   return 1;
  // } else {
  //   return s(matrix, r + 1, c) + s(matrix, r, c + 1);
  // }

  if (r === rows - 1 && c === cols - 1) {
    return 1;
  } else if (r === rows || c === cols || matrix[r][c] === 1) {
    return 0;
  } else {
    return s(matrix, r + 1, c) + s(matrix, r, c + 1);
  }
}

console.log(
  s([
    [0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0],
  ])
);

console.log(
  s([
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);

function s2(matrix, r = 0, c = 0) {
  const rows = matrix.length;
  const cols = matrix.length;
  const dp = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(0);
    }
    dp.push(row);
  }
  dp[rows - 1][cols - 1] = 1;
  for (let i = rows - 1; i >= r; i--) {
    for (let j = cols - 1; j >= c; j--) {
      if (matrix[i][j] === 1) continue;
      if (i + 1 < rows && matrix[i + 1][j] !== 1) {
        dp[i][j] += dp[i + 1][j];
      }
      if (j + 1 < cols && matrix[i][j + 1] !== 1) {
        dp[i][j] += dp[i][j + 1];
      }
    }
  }
  return dp[0][0];
}

console.log(
  s2([
    [0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0],
  ])
);

console.log(
  s2([
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);

console.log(
  s2([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);

console.log(
  s2([
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
);
