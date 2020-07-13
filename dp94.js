// find all unique combos of candidates that sum to a target

function sol(candidates, target) {
  candidates.sort((a, b) => (a < b ? -1 : 1));
  const res = [];
  helper(0, [], target);
  return res;

  function helper(idx, curList, curSum) {
    if (curSum === 0) {
      res.push(curList.slice());
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      if (i >= 1 && candidates[i] == candidates[i - 1]) continue;
      if (candidates[i] <= curSum) {
        curList.push(candidates[i]);
        helper(i + 1, curList, curSum - candidates[i]);
        curList.pop();
      }
    }
  }
}

console.log(sol([10, 1, 2, 7, 6, 1, 5], 8));
