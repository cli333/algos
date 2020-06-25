// Given a collection of candidate numbers(candidates) and a target number(target), find all unique combinations in candidates where the candidate numbers sums to target.

// Each number in candidates may only be used once in the combination.

//   Note:

// All numbers(including target) will be positive integers.
// The solution set must not contain duplicate combinations.
//   Example 1:

// Input: candidates = [10, 1, 2, 7, 6, 1, 5], target = 8,
//   A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// Example 2:

// Input: candidates = [2, 5, 2, 1, 2], target = 5,
//   A solution set is:
// [
//   [1, 2, 2],
//   [5]
// ]

function sol(nums, target) {
  nums.sort((a, b) => (a < b ? -1 : 1));
  const res = [];
  helper(0, [], target);
  return res;

  function helper(idx, curList, target) {
    if (target === 0) {
      res.push(curList.slice());
      return;
    }

    for (let i = idx; i < nums.length; i++) {
      if (nums[i] <= target) {
        if (i > idx && nums[i] === nums[i - 1]) continue;
        curList.push(nums[i]);
        helper(i + 1, curList, target - nums[i]);
        curList.pop();
      }
    }
  }
}

console.log(sol([2, 5, 2, 1, 2], 5));
