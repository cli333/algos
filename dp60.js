// continuous subarray sum
// given target k
// find a continuous subarray that sums up to a multiple of k, or n * k (where n is an integer)
// n >= 2

function sol(nums, k) {
  const map = {};
  map[0] = -1;

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (k !== 0) {
      sum = sum % k;
    }
    if (sum in map) {
      if (i - map[sum] >= 2) return true;
    } else {
      map[sum] = i;
    }
  }

  return false;
}

console.log(sol([23, 2, 4, 6, 7], 6));
// 2,4 = 6 === 1 * 6
// 23,2,6,4,7 = 42 === 7 * 6
