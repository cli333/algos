// 81. Search in Rotated Sorted Array II

// Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,4,4,5,6,6,7] might become [4,5,6,6,7,0,1,2,4,4]).

// If target is found in the array return its index, otherwise, return -1.

// Example 1:

// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
// Example 2:

// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false

function s(nums, target) {
  // logN solution
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return true;
    } else if (nums[left] === nums[mid] && nums[right] === nums[mid]) {
      // all same values just shrink the window until values are different and find an increasing or decreasing sequence
      left++;
      right--;
    } else if (nums[left] <= nums[mid]) {
      // windows is increasing from left to mid
      // target is somewhere in middle of left -> mid
      if (nums[left] <= target && nums[mid] > target) {
        // target in the left
        right = mid - 1;
      } else {
        // target in the right
        left = mid + 1;
      }
    } else {
      // window is increasing from mid to right
      // target is somewhere in the middle of mid -> right
      if (nums[right] >= target && nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
}

console.log(s([2, 5, 6, 0, 0, 1, 2], 0), true);
console.log(s([2, 5, 6, 0, 0, 1, 2], 3), false);
