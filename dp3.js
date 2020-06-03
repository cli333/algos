// find longest increasing subsequence

function solve(nums) {
  const dp = [...new Array(nums.length)].fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && dp[i] < dp[i] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  return Math.max(...dp);
}

function solve2(nums) {
  let out = [];
  generate(nums, 0, []);
  return out;

  function generate(nums, start, curList) {
    out.push(curList.slice());

    for (let i = start; i < nums.length; i++) {
      if (!curList.length || curList[curList.length - 1] < nums[i]) {
        generate(nums, i + 1, [...curList, nums[i]]);
        generate(nums, i + 1, curList);
      }
    }
  }
}

console.log(solve([10, 22, 9, 33, 21, 50, 41, 60, 1]));
console.log(solve2([10, 22, 9, 33, 21, 50, 41, 60, 1]));
