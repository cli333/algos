// house robber II
// first and last houses connected
// find max profit

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

function s(houses) {
  // start at first house or second house
  return Math.max(helper(0, houses.length - 2), helper(1, house.length - 1));

  function helper(l, r) {
    const dp = [];
    for (let i = l; i <= r; i++) {
      // take from previous house OR take from current house and 2 houses back
      dp[i] = Math.max(dp[i - 1] || 0, dp[i - 2] + houses[i]);
    }
    return dp[dp.length - 1];
  }
}
