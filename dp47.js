// Given a non - empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

//   Note:

// Each of the array element will not exceed 100.
// The array size will not exceed 200.

// Example 1:

// Input: [1, 5, 11, 5]

// Output: true

// Explanation: The array can be partitioned as [1, 5, 5] and[11].

//   Example 2:

// Input: [1, 2, 3, 5]

// Output: false

// Explanation: The array cannot be partitioned into equal sum subsets.

function sol(nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  // once we hit this target the remaining values in the nums array must also equal to the target
  const target = sum / 2;
  if (sum % 2 !== 0) return false;
  return helper(Array(nums.length).fill(false), target);

  function helper(used, target) {
    if (target === 0) return true;
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        target -= nums[i];
        used[i] = true;
        if (helper(used, target)) return true;
        used[i] = false;
        target += nums[i];
      }
    }
    return false;
  }
}

console.log(sol([1, 5, 11, 5]));
console.log(sol([1, 2, 3, 5]));
