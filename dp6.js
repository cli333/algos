// given weights and values of n items, put these items in a bag of capacity W to get the maximum total value in the bag

function solve(weights, profits, maxWeight) {
  const dp = [];

  for (let i = 0; i <= maxWeight; i++) {
    const row = [];
    for (let j = 0; j <= profits.length; j++) {
      row.push(0);
    }
    dp.push(row);
  }

  for (let i = 1; i < maxWeight; i++) {
    for (let j = 1; j < profits.length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else if (weights[i - 1] <= maxWeight) {
        dp[i][j] = Math.max(
          profits[i - 1] + dp[i - 1][j - weights[i - 1]],
          dp[i - 1][j]
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp;
}

function solve2(W, wt = [], val = [], n) {
  if (n === 0 || W === 0) {
    return 0;
  }

  if (wt[n - 1] > W) {
    return solve2(W, wt, val, n - 1);
  }

  return Math.max(
    val[n - 1] + solve2(W - wt[n - 1], wt, val, n - 1),
    solve2(W, wt, val, n - 1)
  );
}

console.log(solve2(8, [3, 4, 1, 2], [2, 5, 3, 7], 3));
