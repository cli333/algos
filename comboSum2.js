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

function solve(candidates, target) {
  // time o(2n)/o(n), n = candidates, for each candidate(push/pop)
  // space o(n), stack as deep as candidates.length

  candidates.sort();

  const res = [];
  find(candidates, target, [], 0);
  return res;

  function find(candidates, target, curRes = [], start) {
    if (target === 0) {
      res.push(curRes.slice());
      return;
    }

    if (target < 0) return;

    for (let i = start; i < candidates.length; i++) {
      if (i === start || candidates[i] !== candidates[i - 1]) {
        curRes.push(candidates[i]);
        target -= candidates[i];
        find(candidates, target, curRes, i + 1);
        curRes.pop();
        target += candidates[i];
      }
    }
  }
}

console.log(solve([10, 1, 2, 7, 6, 1, 5], 8));

// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
