// coin change
// find min # of coins needed to make a certain amount
// if not possible, return -1

function s(amount, coins) {
  // o(m^n), amount ^ coins
  // o(n), stack height is number of coins

  let res = helper();
  return res !== Infinity ? res : -1;

  function helper(curAmount = amount, numberOfCoins = 0) {
    if (curAmount === 0) return numberOfCoins;
    let min = Infinity;
    for (let coin of coins) {
      if (coin <= curAmount) {
        min = Math.min(min, helper(curAmount - coin, numberOfCoins + 1));
      }
    }
    return min;
  }
  //   if (amount === 0) return 0;
  //   let min = Infinity;
  //   for (let coin of coins) {
  //     if (coin <= amount) {
  //       min = Math.min(min, 1 + s(amount - coin, coins));
  //     }
  //   }
  //   return min;
}

function s2(amount, coins) {
  // o(nm)
  // o(n)

  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let curAmount = 1; curAmount <= amount; curAmount++) {
    for (let coin of coins) {
      if (coin <= curAmount) {
        dp[curAmount] = Math.min(dp[curAmount], 1 + dp[curAmount - coin]);
      }
    }
  }
  return dp;
}

console.log(s(15, [2, 3, 7]));
console.log(s2(15, [2, 3, 7]));
