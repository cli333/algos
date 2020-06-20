// Given a sequence of matrices, find the most efficient way to multiply these matrices together.The problem is not actually to perform the multiplications, but merely to decide in which order to perform the multiplications.

// We have many options to multiply a chain of matrices because matrix multiplication is associative.In other words, no matter how we parenthesize the product, the result will be the same.For example, if we had four matrices A, B, C, and D, we would have:

// (ABC)D = (AB)(CD) = A(BCD) = ....
// However, the order in which we parenthesize the product affects the number of simple arithmetic operations needed to compute the product, or the efficiency.For example, suppose A is a 10 × 30 matrix, B is a 30 × 5 matrix, and C is a 5 × 60 matrix.Then,

//   (AB)C = (10×30×5) + (10×5×60) = 1500 + 3000 = 4500 operations
// A(BC) = (30×5×60) + (10×30×60) = 9000 + 18000 = 27000 operations.
// Clearly the first parenthesization requires less number of operations.

function sol2(matrices, i, j) {
  if (i === j) return 0;

  let min = Infinity;
  for (let k = i; k < j; k++) {
    let count =
      sol2(matrices, i, k) +
      sol2(matrices, k + 1, j) +
      matrices[i - 1] * matrices[k] * matrices[j];
    if (count < min) min = count;
  }

  return min;
}

function sol(matrices) {
  const dp = [];
  for (let i = 0; i < matrices.length; i++) {
    const row = [];
    for (let j = 0; j < matrices.length; j++) {
      row.push(Infinity);
    }
    dp.push(row);
  }

  // cost of 1 x (nothing) = 0
  for (let i = 0; i < matrices.length; i++) {
    dp[i][i] = 0;
  }

  for (let i = 0; i < matrices.length; i++) {
    for (let j = 0; j < matrices.length; j++) {}
  }

  return dp;
}

console.log(
  sol2([
    [2, 3],
    [3, 6],
    [6, 4],
    [4, 5],
  ])
);
console.log(
  sol([
    [2, 3],
    [3, 6],
    [6, 4],
    [4, 5],
  ])
);
