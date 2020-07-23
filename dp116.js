// Description: Given an array nums and target value k, find the maximum length of a subarray that sums to k.If there isn’t one, return 0 instead.
//   Note: The sum of the entire nums array is guaranteed to fit within the 32 - bit signed integer range.
//     Example:
// Input: nums = [1, -1, 5, -2, 3], k = 3
// Output: 4

function sol(nums, k) {
  // sum : index
  const map = {};
  map[0] = -1;
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map[`${sum - k}`]) {
      maxLen = Math.max(maxLen, i - map[`${sum - k}`]);
    }
    if (!map[sum]) map[sum] = i;
  }

  return maxLen;
}

console.log(sol([1, -1, 5, -2, 3], 1));
