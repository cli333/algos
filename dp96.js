// Given a 01 matrix M, find the longest line of consecutive one in the matrix.The line could be horizontal, vertical, diagonal or anti - diagonal.
//   Example:
// Input:
// [[0, 1, 1, 0],
// [0, 1, 1, 0],
// [0, 0, 0, 1]]
// Output: 3

function sol(M) {
  // 3d dp array
  const dp = [];
  const rows = M.length;
  const cols = M[0].length;

  // pad the rows and cols, add +1 and +2

  for (let i = 0; i < rows + 1; i++) {
    const rows = [];
    for (let j = 0; j < cols + 2; j++) {
      const cell = [];
      for (let k = 0; k < 4; k++) {
        cell.push(0);
      }
      rows.push(cell);
    }
    dp.push(rows);
  }

  let res = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (M[i][j] === 1) {
        dp[i + 1][j + 1][0] = dp[i + 1][j][0] + 1;
        res = Math.max(res, dp[i + 1][j + 1][0]);

        dp[i + 1][j + 1][1] = dp[i][j + 1][1] + 1;
        res = Math.max(res, dp[i + 1][j + 1][1]);

        dp[i + 1][j + 1][2] = dp[i][j][2] + 1;
        res = Math.max(res, dp[i + 1][j + 1][2]);

        dp[i + 1][j + 1][3] = dp[i][j + 2][3] + 1;
        res = Math.max(res, dp[i + 1][j + 1][3]);
      }
    }
  }

  return { res, dp };
}

console.log(
  sol([
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
  ])
);
