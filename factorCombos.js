// Print all unique combination of factors(except 1) of a given number.

// For example:
// Input: 12
// Output: [[2, 2, 3], [2, 6], [3, 4]]
// Input: 15
// Output: [[3, 5]]
// Input: 28 Output: [[2, 2, 7], [2, 14], [4, 7]]

function solve(target) {
  const out = [];
  // starting number
  dfs(target, 2, [], out);

  return out;
}

function dfs(target, start, curResult, out) {
  if (target === 1 && curResult.length > 1) {
    out.push(curResult);
    return;
  }
  for (let i = start; i <= target; i++) {
    if (target % i === 0) {
      curResult.push(i);
      dfs(target / i, i, curResult, out);
      curResult.pop();
    }
  }
}

console.log(solve(12));
console.log(solve(15));
console.log(solve(28));
