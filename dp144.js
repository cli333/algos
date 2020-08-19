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
