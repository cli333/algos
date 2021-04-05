// 123. Best Time to Buy and Sell Stock III
// Hard

// 3219

// 83

// Add to List

// Share
// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete at most two transactions.

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: prices = [3,3,5,0,0,3,1,4]
// Output: 6
// Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
// Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

function s(prices) {
  // at most 2 transactions
  // divide and conquer algorithm
  // split graph into 2 parts for each day
  // calculate the left max, 0 -> i, scan to left
  // calculate the right max, i -> i_n, scan from right
  // maxprofit = left[i] + right[i], SAME DAY TRANSACTIONS ALLOWED

  const n = prices.length;
  const left = Array(n).fill(0);
  const right = Array(n).fill(0);

  let min = prices[0];
  for (let i = 1; i < n; i++) {
    min = Math.min(min, prices[i]);
    left[i] = Math.max(left[i - 1], prices[i] - min);
  }

  let max = prices[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    max = Math.max(max, prices[i]);
    right[i] = Math.max(right[i + 1], max - prices[i]);
  }

  let profit = 0;
  for (let i = 1; i < n; i++) {
    profit = Math.max(profit, left[i] + right[i]);
  }

  return { left, right, profit };
}

console.log(s([3, 3, 5, 0, 0, 3, 1, 4]), 6);
console.log(s([1, 2, 3, 4, 5]), 4);
console.log(s([7, 6, 4, 3, 1]), 0);

// max profit with k transactions

function s2(prices, k) {
  const dp = [];
  for (let i = 0; i <= k; i++) {
    const row = [];
    for (let j = 0; j < prices.length; j++) {
      row.push(0);
    }
    dp.push(row);
  }

  // skip k = 0 transactions
  // fill k = 1 transactions
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    dp[1][i] = Math.max(dp[1][i - 1], prices[i] - min);
  }

  for (let i = 2; i <= k; i++) {
    let maxSoFar = -Infinity;
    for (let j = 1; j < prices.length; j++) {
      maxSoFar = Math.max(maxSoFar, dp[i - 1][j - 1] - prices[j - 1]);
      // dp[i][j] = Math.max(dp[i][j-1], max(-prices[x] + dp[i-1][x])), where 0 < x < j
      // x is all previous days until j, which is today
      // (yesterday's max) vs ('' + today's price)
      dp[i][j] = Math.max(dp[i][j - 1], maxSoFar + prices[j]);
    }
  }

  return dp;
}

console.log(s2([5, 11, 3, 50, 60, 90], 2), 93);
