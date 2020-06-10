// Write an efficient program to find the sum of contiguous subarray within a one - dimensional array of numbers which has the largest sum.

function sum(nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}

function solve(nums) {
  let max = 0;
  let curMax = 0;

  for (let i = 0; i < nums.length; i++) {
    curMax += nums[i];
    if (max < curMax) {
      max = curMax;
    }
    if (curMax < 0) {
      curMax = 0;
    }
  }

  return max;
}

function solve2(nums) {
  const dp = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp[i] = nums[i];
    } else {
      dp[i] = Math.max(0, nums[i] + nums[i - 1], nums[i]);
    }
  }

  return dp;
}

console.log(solve([-2, -3, 4, -1, -2, 1, 5, -3])); // 4,-1,-2,1,5 = 7
console.log(solve2([-2, -3, 4, -1, -2, 1, 5, -3]));
