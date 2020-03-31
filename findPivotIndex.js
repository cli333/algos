// Given an array of integers nums, write a method that returns the "pivot" index of this array.

// We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

// If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left - most pivot index.

//   Example 1:

// Input:
// nums = [1, 7, 3, 6, 5, 6]
// Output: 3
// Explanation:
// The sum of the numbers to the left of index 3(nums[3] = 6) is equal to the sum of numbers to the right of index 3.
// Also, 3 is the first index where this occurs.

//   Example 2:

// Input:
// nums = [1, 2, 3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

const find = nums => {
  let sum = nums.reduce((a, b) => a + b, 0);
  let leftSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // check if leftSum === sum - pivot - leftSum
    if (leftSum === sum - nums[i] - leftSum) {
      return { num: nums[i], index: i };
    }
    leftSum += nums[i];
  }

  return -1;
};

console.log(find([1, 7, 3, 6, 5, 6])); // 3
console.log(find([1, 2, 3])); // -1
