// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

function s(nums) {
  const res = [];
  helper(0, []);
  return res;

  function helper(i, list) {
    res.push(list.slice());
    for (let j = i; j < nums.length; j++) {
      list.push(nums[j]);
      helper(j + 1, list);
      list.pop();
    }
  }
}

console.log(s([1, 2, 3]));
