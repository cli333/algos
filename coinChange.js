// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:

// Input: coins = [1, 2, 5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1

function solve(coins, amount) {
  coins.sort((a, b) => (a < b ? -1 : 1));
  // dynamic programming
  // arr of amount + 1 slots, find how many coins are needed for amounts(0,1,2,3...amount)
  const dp = new Array(amount + 1).fill(Infinity);
  // for amount = 0, number of coins = 0
  dp[0] = 0;
  for (let curAmount = 0; curAmount < dp.length; curAmount++) {
    for (let j = 0; j < coins.length; j++) {
      let curCoin = coins[j];
      if (curCoin <= curAmount) {
        dp[curAmount] = Math.min(dp[curAmount], 1 + dp[curAmount - curCoin]);
      } else {
        // curCoin > amount
        break;
      }
    }
  }

  console.log(Object.entries(dp));
  return dp[amount] > amount ? -1 : dp[amount];
}

console.log(solve([1, 2, 5], 11));
