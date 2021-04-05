// 164. Maximum Gap
// Hard

// 1099

// 207

// Add to List

// Share
// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

// Example 1:

// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
// Example 2:

// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.

function s(nums) {
  const n = nums.length;
  if (n < 2) return 0;
  nums = msort(nums);
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, nums[i] - nums[i - 1]);
  }
  return max;

  function msort(arr) {
    const n = arr.length;
    if (n === 1) return arr;
    const mid = Math.floor(n / 2);
    const left = msort(arr.slice(0, mid));
    const right = msort(arr.slice(mid));
    return merge(left, right);

    function merge(a, b) {
      const res = [];
      while (a.length && b.length) {
        if (a[0] < b[0]) {
          res.push(a.shift());
        } else {
          res.push(b.shift());
        }
      }
      return [...res, ...a, ...b];
    }
  }
}

console.log(s([3, 6, 9, 1]));
