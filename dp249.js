// longest increasing subsequence

function s(arr) {
  const n = arr.length;
  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }

  return dp;
}

console.log(s([3, 1, 5, 2, 6, 4, 9]), [1, 2, 4, 9]);

function s2(nums) {
  const n = nums.length;
  const arr = [];

  for (let i = 0; i < n; i++) {
    // add if greater
    // replace last if smaller
    if (!arr[arr.length - 1]) {
      arr.push(nums[i]);
    } else {
      if (nums[i] > arr[arr.length - 1]) {
        arr.push(nums[i]);
      } else {
        arr[arr.length - 1] = nums[i];
      }
    }
  }

  return arr;
}

console.log(s2([3, 1, 5, 2, 6, 4, 9]));
