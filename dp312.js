// 35. Search Insert Position
// Easy

// 3340

// 287

// Add to List

// Share
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0

function s(nums, target) {
  // if target exists, return index
  // if not, return index where it should be
  // nums is sorted
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] === target) {
      return m;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return l;
}

console.log(s([1, 3, 5, 6], 5));
console.log(s([1, 3, 5, 6], 2));
console.log(s([1, 3, 5, 6], 7));
console.log(s([1], 0));
