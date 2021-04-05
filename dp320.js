// 55. Jump Game
// Medium

// 5967

// 415

// Add to List

// Share
// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

function s(nums) {
  const dp = [];
  const n = nums.length - 1;
  dp[0] = true;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + nums[i]; j++) {
      dp[j] = dp[i] ? true : false;
    }
  }
  return dp[n] || false;
}

console.log(s([2, 3, 1, 1, 4]), true);
console.log(s([3, 2, 1, 0, 4]), false);
console.log(s([2, 0]), true);
console.log(s([2, 3, 1, 1, 4]), true);
