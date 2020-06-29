// count how many square matrices have only 1

function sol(matrix) {
  // use dynamic programming
  const dp = JSON.parse(JSON.stringify(matrix));
  let res = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (dp[i][j] === 0) continue;
      if (i === 0 || j === 0) {
        res++;
        continue;
      }
      let min = Math.min(
        matrix[i - 1][j - 1],
        matrix[i - 1][j],
        matrix[i][j - 1]
      );
      matrix[i][j] += min;
      res += matrix[i][j];
    }
  }

  return res;
}

console.log(
  sol([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
  ])
); // 15 submatrices
/*
dp table:
[ 0, 1, 1, 1 ], 
[ 1, 1, 2, 2 ], 
[ 0, 1, 2, 3 ]

the min of the top, top-left, and left will be the number of submatrices with lengths greater than 1 that were previously found

*/
