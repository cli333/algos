// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0, 1, 2, 4, 5, 6, 7] might become[4, 5, 6, 7, 0, 1, 2]).

// Find the minimum element.

// You may assume no duplicate exists in the array.

//   Example 1:

// Input: [3, 4, 5, 1, 2]
// Output: 1
// Example 2:

// Input: [4, 5, 6, 7, 0, 1, 2]
// Output: 0

const solve = (nums) => {
  // binary search, logN
  // if nums[mid-1] > nums[mid] => break
  // if left < mid, change boundaries to right side
  // if left > mid, change boundaries to left side
  // find min

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid > 0 && nums[mid - 1] > nums[mid]) {
      // 7, 0
      // return 0
      return nums[mid];
    } else if (nums[left] < nums[mid] && nums[mid] > nums[right]) {
      // if left el < mid el => this subarr[left, ..., mid] must be sorted
      // and mid el > right el => this subarr[7, ... 3] must be unsorted
      // switch to right side
      left = mid + 1;
    } else {
      // switch to left side
      right = mid - 1;
    }
  }

  return nums[left];
};

console.log(solve([3, 4, 5, 1, 2]));
console.log(solve([4, 5, 6, 7, 0, 1, 2]));
