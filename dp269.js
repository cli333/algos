// 154. Find Minimum in Rotated Sorted Array II
// Hard

// 1456

// 270

// Add to List

// Share
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:

// [4,5,6,7,0,1,4] if it was rotated 4 times.
// [0,1,4,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.

// Example 1:

// Input: nums = [1,3,5]
// Output: 1
// Example 2:

// Input: nums = [2,2,2,0,1]
// Output: 0

function s(nums) {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    const mid = Math.floor((hi + lo) / 2);
    if (nums[mid] > nums[hi]) {
      lo = mid + 1;
    } else if (nums[mid] === nums[hi]) {
      hi--;
    } else {
      hi = mid;
    }
  }
  return nums[lo];
}

function s2(nums) {
  return helper(0, nums.length - 1);

  function helper(lo, hi) {
    if (lo === hi) return nums[lo];
    const mid = Math.floor((hi + lo) / 2);
    if (nums[mid] > nums[hi]) return helper(mid + 1, hi);
    if (nums[mid] < nums[hi]) return helper(lo, mid);
    return helper(lo, hi - 1);
  }
}

console.log(s([1, 3, 5]));
console.log(s([2, 2, 2, 0, 1]));
console.log(s([3, 3, 3, 0, 3]));
console.log(s([3, 1, 1]));
console.log(s2([1, 3, 5]));
console.log(s2([2, 2, 2, 0, 1]));
console.log(s2([3, 3, 3, 0, 3]));
console.log(s2([3, 1, 1]));
