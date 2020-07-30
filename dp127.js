// Given an array nums of positive integers, return the longest possible length of an array prefix of nums, such that it is possible to remove exactly one element from this prefix so that every number that has appeared in it will have the same number of occurrences.

// If after removing one element there are no remaining elements, it's still considered that every appeared number has the same number of ocurrences (0).

// Example 1:

// Input: nums = [2, 2, 1, 1, 5, 3, 3, 5]
// Output: 7
// Explanation: For the subarray[2, 2, 1, 1, 5, 3, 3] of length 7, if we remove nums[4] = 5, we will get[2, 2, 1, 1, 3, 3], so that each number will appear exactly twice.
//   Example 2:

// Input: nums = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5]
// Output: 13
// Example 3:

// Input: nums = [1, 1, 1, 2, 2, 2]
// Output: 5
// Example 4:

// Input: nums = [10, 2, 8, 9, 3, 8, 1, 5, 2, 3, 7, 6]
// Output: 8

function sol(nums) {
  const count = [];
  const freq = [];
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    count[nums[i]] ? count[nums[i]]++ : (count[nums[i]] = 1);
    freq[count[nums[i]]] ? freq[count[nums[i]]]++ : (freq[count[nums[i]]] = 1);
  }

  for (let i = n - 1; i >= 0; i--) {
    if (freq[count[nums[i]]] * count[nums[i]] === i) return i + 1;
    freq[count[nums[i]]]--;
    count[nums[i]]--;
    if (freq[count[nums[i - 1]]] * count[nums[i - 1]] === 1) return i + 1;
  }

  return 1;
}

console.log(sol([2, 2, 1, 1, 5, 3, 3, 5]), 7);
console.log(sol([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5]), 13);
console.log(sol([1, 1, 1, 2, 2, 2]), 5);
