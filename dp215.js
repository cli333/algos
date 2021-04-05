// 90. Subsets II
// Medium

// 2231

// 100

// Add to List

// Share
// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

function s(nums) {
  const res = [];
  helper(0, []);
  return res;

  function helper(i, list = []) {
    res.push(list.slice());
    for (let j = i; j < nums.length; j++) {
      if (j > i && nums[i - 1] === nums[i]) contineu;
      list.push(nums[j]);
      helper(j + 1, list);
      list.pop();
    }
  }
}

console.log(s([1, 2, 3]));
console.log(s([0]));
