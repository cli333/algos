// longest arithmetic sequence
// difference between i and i + 1 are the same, for all in the sequence

function sol(nums) {
  // const map = {};
  // let max = 2;

  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     const diff = nums[j] - nums[i];
  //     // if can't find, the default length of arithmetic sequence is 2
  //     const count = map[`idx:${i} diff:${diff}`] + 1 || 2;

  //     map[`idx:${j} diff:${diff}`] = count;
  //     max = Math.max(max, count);
  //   }
  // }

  // return max;

  const dp = [];
  for (let i = 0; i < nums.length; i++) {
    const row = [];
    for (let j = 0; j < nums.length; j++) {
      row.push(2);
    }
    dp.push(row);
  }
  const index = [];
  let max = 2;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const first = nums[i] * 2 - nums[j];
      if (first < 0 || !index[first]) continue;

      dp[i][j] = dp[index[first]][i] + 1;
      max = Math.max(max, dp[i][j]);
    }

    index[nums[i]] = i;
  }

  // return dp;
  return max;
}

console.log(sol([3, 6, 9, 12])); // 4
console.log(sol([9, 4, 7, 2, 10])); // 3
