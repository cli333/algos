// find min cost
// moving from top left to bottom right of a matrix
// can only move down or right

function s(n, m, matrix) {
  // time o( 2^(n * m) )
  // space o( n + m )

  return helper(0, 0);

  function helper(row, col) {
    if (row === n - 1 && col === m - 1) return matrix[row][col];
    if (row === n - 1) return matrix[row][col] + helper(row, col + 1);
    if (col === m - 1) return matrix[row][col] + helper(row + 1, col);
    return (
      matrix[row][col] + Math.min(helper(row + 1, col), helper(row, col + 1))
    );
  }
}

function s2(n, m, matrix) {
  const dp = [];
  for (let i = 0; i <= n; i++) {
    const row = [];
    for (let j = 0; j <= m; j++) {
      row.push(Infinity);
    }
    dp.push(row);
  }
  dp[n - 1][m] = 0;
  dp[n][m - 1] = 0;

  for (let row = n - 1; row >= 0; row--) {
    for (let col = m - 1; col >= 0; col--) {
      dp[row][col] =
        matrix[row][col] + Math.min(dp[row + 1][col], dp[row][col + 1]);
    }
  }

  return dp[0][0];
}

function s3(n, m, matrix) {
  const dp = JSON.parse(JSON.stringify(matrix));
  // fill left col
  for (let r = 1; r < n; r++) {
    dp[r][0] += dp[r - 1][0];
  }
  // fill top row
  for (let c = 1; c < m; c++) {
    dp[0][c] += dp[0][c - 1];
  }
  for (let r = 1; r < n; r++) {
    for (let c = 1; c < m; c++) {
      dp[r][c] += Math.min(dp[r - 1][c], dp[r][c - 1]);
    }
  }
  return dp[n - 1][m - 1];
}

console.log(
  s(4, 5, [
    [3, 12, 4, 7, 10],
    [6, 8, 15, 11, 4],
    [19, 5, 14, 32, 21],
    [1, 20, 2, 9, 7],
  ])
);

console.log(
  s2(4, 5, [
    [3, 12, 4, 7, 10],
    [6, 8, 15, 11, 4],
    [19, 5, 14, 32, 21],
    [1, 20, 2, 9, 7],
  ])
);

console.log(
  s3(4, 5, [
    [3, 12, 4, 7, 10],
    [6, 8, 15, 11, 4],
    [19, 5, 14, 32, 21],
    [1, 20, 2, 9, 7],
  ])
);

console.log(
  s(2, 4, [
    [3, 1, 7, 5],
    [6, 8, 4, 2],
  ])
);

console.log(
  s2(2, 4, [
    [3, 1, 7, 5],
    [6, 8, 4, 2],
  ])
);

console.log(
  s3(2, 4, [
    [3, 1, 7, 5],
    [6, 8, 4, 2],
  ])
);
