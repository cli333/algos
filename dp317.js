// 45. Jump Game II
// Medium

// 3857

// 174

// Add to List

// Share
// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

function s(nums) {
  // on2, time, space
  const dp = Array(nums.length).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + nums[i] && j < nums.length; j++) {
      dp[j] = Math.min(dp[j], dp[i] + 1);
    }
  }
  return dp;
}

console.log(s([2, 3, 1, 1, 4]));

function s2(nums) {
  let ladder = nums[0];
  let stairs = nums[0];
  let jumps = 1;
  for (let i = 1; i < nums.length; i++) {
    if (i === nums.length - 1) return jumps;
    if (i + nums[i] > ladder) {
      // build up ladder
      ladder = i + nums[i];
    }
    // use up stairs
    stairs--;
    if (!stairs) {
      // no stairs, jump to next ladder
      jumps++;
      // get new ladder
      stairs = ladder - i;
    }
  }
  return jumps;
}

console.log(s2([2, 3, 1, 1, 4]));
