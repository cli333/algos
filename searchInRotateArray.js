// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0, 1, 2, 4, 5, 6, 7] might become[4, 5, 6, 7, 0, 1, 2]).

// You are given a target value to search.If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
// Output: -1

const search = (nums, target) => {
  // find the pivot point
  // start binary search
  let left = 0;
  let right = nums.length - 1;

  // modified binary search
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  // regular binary search
  let start = left;
  left = 0;
  right = nums.length - 1;

  // decide which side to start search from
  if (target >= nums[start] && target <= nums[right]) {
    // array is already sorted
    // boundaries are fine
    left = start;
  } else {
    // search on the other side
    right = start;
  }

  while (left <= right) {
    let mid = Math.floor((right + (right - left)) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
