// You are given coins of different denominations and a total amount of money.Write a function to compute the number of combinations that make up that amount.You may assume that you have infinite number of each kind of coin.

//   Example 1:

// Input: amount = 5, coins = [1, 2, 5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5 = 5
// 5 = 2 + 2 + 1
// 5 = 2 + 1 + 1 + 1
// 5 = 1 + 1 + 1 + 1 + 1
// Example 2:

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
// Example 3:

// Input: amount = 10, coins = [10]
// Output: 1

function sol(amount, coins) {
  let res = 0;
  const res2 = [];
  helper(amount, []);
  return { res, res2 };

  function helper(curAmount, curList) {
    if (curAmount <= 0) {
      if (curAmount === 0) {
        res++;
        res2.push(curList.slice());
      }
      return;
    }

    for (let c of coins) {
      if (c <= curAmount) {
        curList.push(c);
        helper(curAmount - c, curList);
        curList.pop();
      }
    }
  }
}

function sol2(amount, coins) {
  const dp = Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let c of coins) {
    for (let i = c; i <= amount; i++) {
      dp[i] += dp[i - c];
    }
  }
  return dp[amount];
}

console.log(sol(5, [1, 2, 5])); // 4
console.log(sol2(5, [1, 2, 5])); // 4
