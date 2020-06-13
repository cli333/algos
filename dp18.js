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
    for (let right = left; right < cols; right++) {
      // fill out the dp for current left and right boundaries
      for (let i = 0; i < rows; i++) {
        dp[i] += matrix[i][right];
      }
      // find max contigous arr for current dp
      const { max, maxStart, maxEnd } = maxContig(dp);
      if (max > maxSum) {
        // horizontal boundaries correspond to our left and right pionters
        maxLeft = left;
        maxRight = right;
        // vertical boundaires/max correspond to whatever is returned from kadane's algo
        maxTop = maxStart;
        maxBot = maxEnd;
        maxSum = max;
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

// function kad(nums) {
//   let max = 0;
//   let maxSoFar = nums[0];
//   let curStart = 0;
//   let start = -1;
//   let end = -1;

//   for (let i = 1; i < nums.length; i++) {
//     maxSoFar += nums[i];
//     if (maxSoFar < 0) {
//       maxSoFar = 0;
//       curStart = i + 1;
//     }
//     if (maxSoFar > max) {
//       max = maxSoFar;
//       start = curStart;
//       end = i;
//     }
//   }

//   return { max, start, end };
// }

// console.log(kad([0, 2, -5, 4, -7]));
