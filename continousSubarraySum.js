// Suppose we have a list of non - negative numbers and a target integer k, we have to write a function to check whether the array has a continuous subarray of size at least 2 that sums up to a multiple of k, sums up to n * k where n is also an integer.So if the input is like[23, 2, 4, 6, 7], and k = 6, then the result will be True, as[2, 4] is a continuous subarray of size 2 and sums up to 6.

// To solve this, we will follow these steps −

// Make a map m, set m[0] := -1 and sum:= 0, n := size of nums array
// for i in range 0 to n – 1
// sum:= sum + nums[i]
// if k is non zero, then sum:= sum mod k
// if m has sum, and i – m[sum] >= 2, then return true
// if m does not has sum, set m[sum] := i
// return false

function solve(nums, k) {
  const map = {};
  map[0] = -1;

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log({ map, sum, num: nums[i], k });
    sum += nums[i];

    if (k !== 0) {
      sum = sum % k;
      console.log({ sum });
    }

    if (sum in map) {
      if (i - map[sum] >= 2) return true;
    } else {
      map[sum] = i;
    }
  }

  return false;
}

console.log(solve([23, 2, 4, 6, 7], 6));
