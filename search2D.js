// search a 2d array
// each row, sorted from left to right
// first element of each row is greater than the last element of previous row

const search = (matrix, target) => {
  let rows = matrix.length;
  let cols = matrix[0].length;

  // binary search, sort of flatten it!
  // right is the last el in the 2d array, so multiply height by width

  // do some math to get the midpoint, because 2d array

  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let midpoint = matrix[Math.floor(mid / cols)][mid % cols];
    if (midpoint === target) {
      return true;
    } else if (target < midpoint) {
      right = mid - 1;
    } else if (target > midpoint) {
      left = mid + 1;
    }
  }
  return false;
};

console.log(
  search(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50]
    ],
    13
  )
);
