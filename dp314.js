// 41. First Missing Positive
// Hard

// 5434

// 964

// Add to List

// Share
// Given an unsorted integer array nums, find the smallest missing positive integer.

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1

function s(nums) {
  /* 
  for an array of size n
  the largest missing positive value will be some value within 1 to n+1
  if all values are present the return value will n+1
  */
  let containsOne = false;
  for (let n of nums) {
    if (n === 1) {
      containsOne = true;
      break;
    }
  }
  if (!containsOne) return 1;
  const n = nums.length;
  if (n === 1) return 2;
  for (let i = 0; i < nums.length; i++) {
    // transform all values <= 0 OR > n -----> 1
    if (nums[i] <= 0 || nums[i] > n) nums[i] = 1;
  }
  for (let i = 0; i < nums.length; i++) {
    const x = Math.abs(nums[i]);
    // if num at x-1 > 0, change that num to negative
    if (nums[x - 1] > 0) nums[x - 1] *= -1;
  }
  // loop through, first index with positive value, return 1 more than tha value
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return i + 1;
  }
  return n + 1;
}

console.log(s([1, 2, 0]), 3);
console.log(s([3, 4, -1, 1]), 2);
console.log(s([7, 8, 9, 11, 12]), 1);
console.log(s([1, 7, 8, 9, 11, 12]), 2);
