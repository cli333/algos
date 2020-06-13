// given a rectangle/matrix of nums, find the biggest rectangle with the largest sum

const matrix = [
  [6, -5, -7, 4, -4],
  [-9, 3, -6, 5, 2],
  [-10, 4, 7, -6, 3],
  [-8, 9, -3, 3, -7],
];

function maxContig(arr) {
  let max = 0;
  let maxStart = -1;
  let maxEnd = -1;
  let curStart = 0;
  let maxSoFar = 0;

  for (let i = 0; i < arr.length; i++) {
    maxSoFar += arr[i];
    if (maxSoFar < 0) {
      maxSoFar = 0;
      curStart = i + 1;
    }
    if (maxSoFar > max) {
      maxStart = curStart;
      maxEnd = i;
      max = maxSoFar;
    }
  }

  return { max, maxStart, maxEnd };
}

function sol(matrix) {
  // space, o(row), size of dp table
  // time, o(col * col * row), iterate from (left to right) * (left to right) * (iterate through dp table)

  // create 1d array of row sums
  // set left and right pointers to expand a 1d rectangle for each row
  // sum up rectangle and apply kadane's algo on the dp array, find max contiguous arr
  const dp = new Array(matrix.length).fill(0);

  const rows = matrix.length;
  const cols = matrix[0].length;

  let maxSum = 0;
  // the left and right pointers
  let maxLeft = 0;
  let maxRight = 0;
  // indices of the max contiguous on the dp
  let maxTop = 0;
  let maxBot = 0;

  for (let left = 0; left < cols; left++) {
    for (let right = left; right < rows; right++) {
      for (let i = 0; i < rows; i++) {
        dp[i] += matrix[i][right];
      }
      if (maxContig(dp).max > maxSum) {
        maxLeft = left;
        maxRight = right;
        maxTop = maxContig(dp).maxStart;
        maxBot = maxContig(dp).maxEnd;
        maxSum = maxContig(dp).max;
      }
    }
  }

  return { maxSum, maxLeft, maxRight, maxTop, maxBot };
}

console.log(sol(matrix));
console.log(
  sol([
    [-1, -1, -1],
    [1, -1, -1],
    [-1, 1, 0],
  ])
);
