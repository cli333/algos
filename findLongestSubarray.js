// find longest subarray in array that adds up to a sum

// [1,2,3,7,5], sum = 12
// result = [1, 3] indexes of longest subarray

// if no subarray, return [-1]

// brute force
// 2 loops

// sliding window

const find = (arr, sum) => {
  let left = 0;
  let right = 0;
  let currentSum = 0;
  let result = [-1];

  while (right < arr.length) {
    // add value to current
    currentSum += arr[right];
    // while current > sum and left < right
    // shrink the window
    // increment left and subtract left values from the current sum
    while (left < right && currentSum > sum) {
      currentSum -= arr[left];
      left++;
    }
    // if current sum equals sum and the window size is null or current window size is greater than the previous
    // reset the window
    if (
      currentSum === sum &&
      (result.length === 1 || right - left > result[1] - result[0])
    ) {
      result = [left, right];
    }
    // increment right
    right++;
  }

  return result;
};

console.log(find([1, 2, 3, 7, 5], 12));
