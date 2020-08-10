// In a given array nums of positive integers, find three non - overlapping subarrays with maximum sum.

// Each subarray will be of size k, and we want to maximize the sum of all 3 * k entries.

// Return the result as a list of indices representing the starting position of each interval(0 - indexed).If there are multiple answers, return the lexicographically smallest one.

//   Example:

// Input: [1, 2, 1, 2, 6, 7, 5, 1], 2
// Output: [0, 3, 5]
// Explanation: Subarrays[1, 2], [2, 6], [7, 5] correspond to the starting indices[0, 3, 5].
// We could have also taken[2, 1], but an answer of[1, 3, 5] would be lexicographically larger.

function sol(nums, k) {
  // fix middle max middle sum
  // find max left subarray sum and max right subarray sum
  const len = nums.length;
  const n = len - k + 1;
  const dp = Array(n);
  let sum = 0;

  // find max subarray sum of size k
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    // window greater than size k
    // subtract the last num in the window from sum
    if (i >= k) {
      sum -= nums[i - k];
    }
    // save the result
    if (i >= k - 1) {
      // dp[1 - 2 + 1] === dp[0]
      dp[i - k + 1] = sum;
    }
  }

  const left = Array(n);
  let maxIndex = 0;
  for (let i = 0; i < n; i++) {
    if (dp[i] > dp[maxIndex]) {
      maxIndex = i;
    }
    left[i] = maxIndex;
  }

  const right = Array(n);
  maxIndex = n - 1;
  for (let i = n - 1; i >= 0; i--) {
    if (dp[i] >= dp[maxIndex]) {
      maxIndex = i;
    }
    right[i] = maxIndex;
  }

  const res = Array(3).fill(-1);
  // starting index of middle subarray will be k
  // loop until n - k
  // need at least k nums on left and right
  for (let i = k; i < n - k; i++) {
    if (
      res[0] === -1 ||
      dp[res[0]] + dp[res[1]] + dp[res[2]] <
        dp[left[i - k]] + dp[i] + dp[right[i + k]]
    ) {
      res[0] = left[i - k];
      res[1] = i;
      res[2] = right[i + k];
    }
  }
  return res;
}

console.log(sol([1, 2, 1, 2, 6, 7, 5, 1], 2), [0, 3, 5]);
