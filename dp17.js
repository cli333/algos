// range query sum
// find sum for range i <= j

function sol(nums, i, j) {
  // let sum = 0;
  // for (i; i <= j; i++) {
  //   sum += nums[i];
  // }
  // return sum;

  const dp = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    dp[i + 1] = dp[i] + nums[i];
  }

  return dp[j + 1] - dp[i];
}

console.log(sol([1, 2, 3], 2, 2)); // 3
