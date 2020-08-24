// longest common subsequence
function sol(a, b) {
  const dp = [];
  for (let i = 0; i <= a.length; i++) {
    const row = new Array(b.length + 1).fill(0);
    dp.push(row);
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      dp[i + 1][j + 1] =
        (a[i] === b[j] ? 1 : 0) + Math.max(dp[i][j + 1], dp[i + 1][j]);
    }
  }

  return dp[a.length][b.length];
}

console.log(sol("abcdaf", "abcf"));

// subset sum
function sol2(nums = [2, 3, 7, 8, 10], target = 11) {
  const dp = [];
  for (let i = 0; i < nums.length; i++) {
    const row = [];
    for (let j = 0; j <= target; j++) {
      row.push(false);
    }
    dp.push(row);
  }
  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j <= target; j++) {
      if (j - nums[i - 1] >= 0) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[nums.length - 1][target];
}

console.log(sol2(), true);

// coin change
// min coins to get a total
function sol3(coins = [1, 5, 6, 8], total = 11) {
  const dp = Array(total + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= total; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }

  return dp[total];
}

console.log(sol3(), 2);

function sol4(coins = [1, 5, 6, 8], total = 32) {
  if (total === 0) return 0;
  let min = Infinity;
  for (let coin of coins) {
    if (coin <= total) {
      min = Math.min(min, 1 + sol4(coins, total - coin));
    }
  }
  return min;
}

console.log(sol4(), 4);

// min edit distance

function sol5(a, b) {
  const dp = [];
  for (let i = 0; i <= a.length; i++) {
    const row = [];
    for (let j = 0; j <= b.length; j++) {
      row.push(0);
    }
    dp.push(row);
  }
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = i;
  }
  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[a.length][b.length];
}

console.log(sol5("abcdef", "azced"), 3);

function sol6(a, b, m = a.length - 1, n = b.length - 1) {
  if (!m) return n;
  if (!n) return m;

  if (a[m] === b[n]) {
    return sol6(a, b, m - 1, n - 1);
  }

  return (
    1 +
    Math.min(
      sol6(a, b, m - 1, n),
      sol6(a, b, m - 1, n - 1),
      sol6(a, b, m, n - 1)
    )
  );
}

console.log(sol6("abcdef", "azced"), 3);

// longest increasing subseq length

function sol7(nums) {
  const dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }

  return Math.max(...dp);
}

console.log(sol7([3, 4, -1, 0, 6, 2, 3]), 4);

function sol8(nums) {
  let res = 0;
  helper(0, null, 0);
  return res;

  function helper(i, cur, len) {
    if (i === nums.length) {
      res = Math.max(res, len);
    }

    for (let j = i; j < nums.length; j++) {
      if (!cur || nums[j] > cur) {
        helper(j + 1, nums[j], len + 1);
      }
    }
  }
}

console.log(sol8([3, 4, -1, 0, 6, 2, 3]), 4);

// cut rod to maximize profit

function sol9(
  len = 5,
  prices = [
    [1, 2],
    [2, 5],
    [3, 7],
    [4, 8],
  ]
) {
  // [len, price] = prices[i]
  const dp = Array(len + 1).fill(0);

  for (let i = 0; i <= len; i++) {
    for (let [cut, profit] of prices) {
      if (cut <= i) {
        dp[i] = Math.max(dp[i], profit + dp[i - cut]);
      }
    }
  }

  return dp[len];
}

console.log(sol9(), 12);

function sol10(
  len = 5,
  prices = [
    [1, 2],
    [2, 5],
    [3, 7],
    [4, 8],
  ]
) {
  const map = {};
  for (let price of prices) {
    const [l, p] = price;
    map[l] = p;
  }
  let res = 0;
  const res2 = [];
  helper(len);
  return res;

  function helper(len, profit = 0, list = []) {
    if (!len) {
      if (profit > res) {
        res = profit;
        res2.push(list);
      }
      return;
    }

    for (let l in map) {
      if (l <= len) {
        helper(len - l, profit + map[l], [...list, l]);
      }
    }
  }
}

console.log(sol10(), 12);

// coin change

function sol11(total = 13, coins = [7, 2, 3, 6]) {
  const dp = Array(total + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= total; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  return dp[total];
}

console.log(sol11());

function sol12(total = 13, coins = [7, 2, 3, 6]) {
  let res = Infinity;
  helper(total);
  return res;

  function helper(cur, amt = 0) {
    if (cur === 0) {
      res = Math.min(res, amt);
      return;
    }

    for (let coin of coins) {
      if (coin <= cur) {
        helper(cur - coin, amt + 1);
      }
    }
  }
}

console.log(sol12());

// total number of ways to make change

function sol13(total = 5, coins = [1, 2, 3]) {
  const dp = [];
  for (let i = 0; i <= coins.length; i++) {
    const row = [];
    for (let j = 0; j <= total; j++) {
      row.push(null);
    }
    dp.push(row);
  }
  dp[0].fill(0);
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= coins.length; i++) {
    for (let j = 1; j <= total; j++) {
      if (coins[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
      }
    }
  }

  return dp;
}

console.log(sol13());

function sol14(total = 5, coins = [1, 2, 3]) {
  let res = 0;
  helper(total, []);
  return res;

  function helper(total, list) {
    if (total === 0) {
      res++;
      return;
    }

    for (let coin of coins) {
      if (coin <= total) {
        list.push(coin);
        helper(total - coin, list);
        list.pop();
      }
    }
  }
}

console.log(sol14());

// egg drop, find floor to drop from to maximize drops

function sol15(floors = 6, eggs = 2) {
  const dp = [];
  for (let i = 0; i <= eggs; i++) {
    const row = [];
    for (let j = 0; j <= floors; j++) {
      row.push(Infinity);
    }
    dp.push(row);
  }
  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = i;
    dp[1][i] = i;
  }

  for (let i = 2; i <= eggs; i++) {
    for (let j = 1; j <= floors; j++) {
      for (let k = 1; k <= j; k++) {
        let res = 1 + Math.max(dp[i - 1][j - 1], dp[i][j - k]);
        dp[i][j] = Math.max(dp[i][j], res);
      }
    }
  }

  return dp;
}

console.log(sol15());

function sol16(floors = 6, eggs = 2) {
  if (floors === 0 || floors === 1) {
    return floors;
  }

  if (eggs === 1) {
    return floors;
  }

  let min = Infinity;
  for (let i = 1; i <= floors; i++) {
    // egg breaks, go down a level, subtract an egg
    // doesnt break, go down to 'mid'
    let res = Math.max(sol16(floors - 1, eggs - 1), sol16(floors - eggs, eggs));
    min = Math.min(min, res);
  }
  return min;
}

console.log(sol16());
