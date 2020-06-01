// Given a set of distinct integers, nums, return all possible subsets(the power set).

//   Note: The solution set must not contain duplicate subsets.

//     Example:

// Input: nums = [1, 2, 3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1, 2, 3],
//   [1, 3],
//   [2, 3],
//   [1, 2],
//   []
// ]

function solve(nums) {
  // runtime o(2n) = o(n), two branches for each num of nums (push and pop)
  // space o(n), stack as deep as nums

  const out = [];
  gen(nums, [], 0);
  return out;

  function gen(nums, res = [], start) {
    out.push(res.slice());

    for (let i = start; i < nums.length; i++) {
      res.push(nums[i]);
      gen(nums, res, i + 1);
      res.pop();
    }
  }
}

console.log(solve([1, 2, 3]));
