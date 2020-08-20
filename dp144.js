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
  helper(0);
  return res;

  function helper(i, list = []) {
    if (i === nums.length) {
      res = Math.max(list.length, res);
      return;
    }

    for (let j = i; j < nums.length; j++) {
      if (!list.length || nums[j] > list[list.length - 1]) {
        list.push(nums[j]);
        helper(j + 1, list);
        list.pop();
      }
    }
  }
}

console.log(sol8([3, 4, -1, 0, 6, 2, 3]), 4);
