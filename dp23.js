// min coins to get the target amount

function sol(coins, target) {
  if (target === 0) return 0;

  let res = Infinity;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= target) {
      res = Math.min(res, 1 + sol(coins, target - coins[i]));
    }
  }

  return res;
}

function sol2(coins, target) {
  const dp = new Array(target + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
      }
    }
  }

  return dp[target];
}

console.log(sol([1, 2, 5], 11));
console.log(sol2([1, 2, 5], 11));
