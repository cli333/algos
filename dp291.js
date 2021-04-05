// 16. 3Sum Closest
// Medium

// 2982

// 167

// Add to List

// Share
// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

function s(nums, target) {
  nums.sort((a, b) => (a < b ? -1 : 1));
  let diff = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (Math.abs(target - sum) < Math.abs(diff)) {
        diff = target - sum;
      }
      if (sum > target) {
        r--;
      } else {
        l++;
      }
    }
  }
  return target - diff;
}

console.log(s([-1, 2, 1, -4], 1));
console.log(s([1, 1, -1, -1, 3], -1));
