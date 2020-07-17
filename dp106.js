// coin change, find fewest number of coins needed to make an amount

function sol(amount, coins) {
  const dp = Array(amount + 1).fill(amount);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 1; i <= amount; i++) {
    for (let c of coins) {
      if (c <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - c]);
      }
    }
  }

  return dp[amount];
}

console.log(sol(11, [1, 2, 5])); // 5 + 5 + 1 => 3 coins
