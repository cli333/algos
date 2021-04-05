// 152. Maximum Product Subarray
// Medium

// 6342

// 206

// Add to List

// Share
// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// It is guaranteed that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

function s(nums) {
  let max = nums[0];
  let maxSoFar = nums[0];
  let minSoFar = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const temp = maxSoFar;
    maxSoFar = Math.max(nums[i], nums[i] * maxSoFar, nums[i] * minSoFar);
    minSoFar = Math.min(nums[i], nums[i] * temp, nums[i] * minSoFar);
    max = Math.max(max, maxSoFar);
  }

  return max;
}

console.log(s([2, 3, -2, 4]), 6);
console.log(s([-2, 0, -1]), 0);
console.log(s([-2]), -2);
