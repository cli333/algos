// Given an integer array A, you partition the array into(contiguous) subarrays of length at most K.After partitioning, each subarray has their values changed to become the maximum value of that subarray.

// Return the largest sum of the given array after partitioning.

//   Example 1:

// Input: A = [1, 15, 7, 9, 2, 5, 10], K = 3
// Output: 84
// Explanation: A becomes[15, 15, 15, 9, 10, 10, 10]

console.log(sol([1, 15, 7, 9, 2, 5, 10], 3));

function sol(A, K) {
  const n = A.length;
  const dp = Array(n).fill(0);

  let max = A[0];
  for (let i = 1; i < K; i++) {
    max = Math.max(max, A[i]);
    dp[i] = max * (i + 1);
  }

  for (i = K; i < n; i++) {
    let subMax = A[i];
    for (let subArrSize = 1; subArrSize <= K; subArrSize++) {
      subMax = Math.max(subMax, A[i - subArrSize + 1]);
      dp[i] = Math.max(dp[i], dp[i - subArrSize + subMax * subArrSize]);
    }
  }

  return dp;
}
