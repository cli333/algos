// search 2d matrix
// first integer of each row is greater than the last integer of the previous row

function sol(matrix, target) {
  // treat as 1d array
  // use binary search

  if (!matrix || !matrix.length) return false;
  const m = matrix.length;
  const n = matrix[0].length;
  let lo = 0;
  let hi = m * n - 1;

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (matrix[Math.floor(mid / n)][mid % n] === target) return true;
    if (matrix[Math.floor(mid / n)][mid % n] > target) {
      // search left
      hi = mid - 1;
    } else if (matrix[Math.floor(mid / n)][mid % n] < target) {
      // search right
      lo = mid + 1;
    }
  }

  return false;
}

console.log(
  sol(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    11
  )
);
