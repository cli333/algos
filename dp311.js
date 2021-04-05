// 34. Find First and Last Position of Element in Sorted Array
// Medium

// 5190

// 198

// Add to List

// Share
// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

function s(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    console.log({ l, m, r });
    if (nums[m] === target) {
      let n = m;
      while (nums[m - 1] === target) m--;
      while (nums[n + 1] === target) n++;
      return [m, n];
    }
    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return [-1, -1];
}

console.log(s([5, 7, 7, 8, 8, 10], 8));
console.log(s([5, 7, 7, 8, 8, 10], 6));
console.log(s([1], 1));
