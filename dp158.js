// max subarray sum
// kadane's

function sol(arr) {
  const n = arr.length;
  const dp = Array(n).fill(0);
  dp[0] = arr[0];
  let max = 0;

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
    max = Math.max(max, dp[i]);
  }

  return max;
}

console.log(sol([5, -3, 7, -4, 2]));
