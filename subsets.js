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
  const subsets = [];
  generate(0, nums, [], subsets);
  return subsets;

  function generate(idx, nums, currentSubset, subsets) {
    // push a copy of the current subset
    subsets.push(currentSubset.slice());

    // for each number, want to generate all possible subsets with that number and without that number
    // so add number to list
    // recursive call using that list
    // then remove number from list and continue

    for (let i = idx; i < nums.length; i++) {
      // add the number
      currentSubset.push(nums[i]);
      generate(i + 1, nums, currentSubset, subsets);
      // remove the number
      currentSubset.pop();
    }
  }
}

console.log(solve([1, 2, 3]));
