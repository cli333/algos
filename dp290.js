// 15. 3Sum
// Medium

// 9772

// 1004

// Add to List

// Share
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

function s(nums) {
  //   const res = [];
  //   for (let i = 0; i < nums.length; i++) {
  //     helper(i, [nums[i]], nums[i]);
  //   }
  //   return res;

  //   function helper(idx, out, sum = 0) {
  //     if (idx >= nums.length || out.length === 3) {
  //       if (sum === 0) {
  //         res.push(out.slice());
  //       }
  //       return;
  //     }

  //     for (let i = idx + 1; i < nums.length; i++) {
  //       out.push(nums[i]);
  //       sum += nums[i];
  //       helper(i, out, sum);
  //       out.pop();
  //       sum -= nums[i];
  //     }
  //   }
  nums.sort((a, b) => (a < b ? -1 : 1));
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const threeSum = nums[i] + nums[l] + nums[r];
      if (threeSum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        while (l < r && nums[l] === nums[l + 1]) l++;
      } else if (threeSum > 0) {
        r--;
      } else {
        l++;
      }
    }
  }

  return res;
}

console.log(s([-1, 0, 1, 2, -1, -4]));
