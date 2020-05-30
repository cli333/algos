// Question

// Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

// For example, given nums = [-2, 0, 1, 3]``, andtarget = 2`.

// Return 2. Because there are two triplets which sums are less than 2:

// [-2, 0, 1]
// [-2, 0, 3]

// Follow up: Could you solve it in O(n2) runtime?

// Solutuion

// sort and two pointers

function solve(nums, target) {
  // return number of instances where i+j+k === target
  nums.sort((a, b) => (a < b ? -1 : 1));
  let out = [];

  for (let i = 0; i < nums.length - 2; i++) {
    let firstNum = nums[i];
    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      let sum = firstNum + nums[start] + nums[end];
      console.log({ i, start, end, sum, target });
      if (sum < target) {
        out.push([firstNum, nums[start], nums[end]]);
      }
      if (sum >= target) {
        end--;
        continue;
      }
      start++;
    }
  }

  return out;
}

console.log(solve([-2, 0, 1, 3], 2));
