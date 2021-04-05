// 18. 4Sum
// Medium

// 3069

// 403

// Add to List

// Share
// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Notice that the solution set must not contain duplicate quadruplets.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [], target = 0
// Output: []

function s(nums, target) {
  nums.sort((a, b) => (a < b ? -1 : 1));
  return kSum(0, target);

  function kSum(start, target, k = 4) {
    const kList = [];

    if (k === 2) {
      return twoSum(start, target);
    }

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i - 1] === nums[i]) continue;
      for (let kMinusOneList of kSum(i + 1, target - nums[i], k - 1)) {
        kList.push([nums[i], ...kMinusOneList]);
      }
    }

    return kList;
  }

  function twoSum(start, target) {
    const twoList = [];
    let l = start;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum < target || (l > start && nums[l] === nums[l - 1])) {
        l++;
      } else if (
        sum > target ||
        (r < nums.length - 1 && nums[r] === nums[r + 1])
      ) {
        r--;
      } else {
        twoList.push([nums[l], nums[r]]);
        l++;
        r--;
      }
    }
    return twoList;
  }
}

console.log(s([1, 0, -1, 0, -2, 2], 0), "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]");
