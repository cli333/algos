// subset sum
// find all sets of nums that add up to sum

function sol(nums, sum) {
  const res = [];
  helper(0, [], Array(nums.length).fill(false));
  return res;

  function helper(idx, curList, used) {
    if (curList.reduce((a, b) => a + b, 0) === sum) {
      res.push(curList.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        used[i] = true;
        curList.push(nums[i]);
        helper(idx + 1, curList, used);
        curList.pop();
        used[i] = false;
      }
    }
  }
}

function sol2(nums, sum) {
  const res = [];
  helper(0, [], sum);
  return res;

  function helper(idx, curList, target) {
    if (target === 0) {
      res.push(curList.slice());
      return;
    }

    for (let i = idx; i < nums.length; i++) {
      curList.push(nums[i]);
      target -= nums[i];
      helper(i + 1, curList, target);
      target += nums[i];
      curList.pop();
    }
  }
}

// find if a sum exists

function sol3(nums, sum) {
  // use dp table
  const dp = [];
  for (let i = 0; i < nums.length; i++) {
    const row = [];
    for (let j = 0; j <= sum; j++) {
      row.push(false);
    }
    dp.push(row);
  }

  // for all nums, to get a sum of zero, just give an empty list
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = true;
  }

  // check (cell above) or (above left = shifted left by current Num)

  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j <= sum; j++) {
      if (j - nums[i - 1] >= 0) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  // to get the subset
  // trace backwards
  // if cell above is true, the current cell is not part of the subset, GO UP
  // if cell above is false, current cell is PART OF THE SUBSET, go to top left - value(current cell)
  // reached 0, end

  // const res = [];
  // let row = nums.length - 1;
  // let col = sum;
  // while (col > 0 && dp[row] && dp[row][col]) {
  //   if (dp[row - 1][col] === true) {
  //     row--;
  //   } else if (dp[row - 1][col] === false) {
  //     res.push(nums[row]);
  //     row--;
  //     col -= row;
  //   }
  // }
  // return res;

  return dp;
  return dp[nums.length - 1][sum];
}

console.log(sol([2, 3, 7, 8, 10], 11));
console.log(sol2([2, 3, 7, 8, 10], 11));
console.log(sol3([2, 3, 7, 8, 10], 11));
