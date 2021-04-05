// [LeetCode] 656. Coin Path coin path
// Given an array A (index starts at 1) consisting of N integers: A1, A2, ..., AN and an integer B. The integer Bdenotes that from any place (suppose the index is i) in the array A, you can jump to any one of the place in the array A indexed i+1, i+2, …, i+B if this place can be jumped to. Also, if you step on the index i, you have to pay Ai coins. If Ai is -1, it means you can’t jump to the place indexed i in the array.

// Now, you start from the place indexed 1 in the array A, and your aim is to reach the place indexed N using the minimum coins. You need to return the path of indexes (starting from 1 to N) in the array you should take to get to the place indexed N using minimum coins.

// If there are multiple paths with the same cost, return the lexicographically smallest such path.

// If it's not possible to reach the place indexed N then you need to return an empty array.

// Example 1:

// Input: [1,2,4,-1,2], 2
// Output: [1,3,5]
// Example 2:

// Input: [1,2,4,-1,2], 1
// Output: []

function s(nums, jumps) {
  // how to reach end of nums using min number of coins
  // nums[i] is cost in coins
  // jumps is how far you can jump from any index
  // return the indices
  const n = nums.length - 1;
  if (!nums.length || nums[n] === -1) return [];
  // if end of nums is -1, cannot reach, so return empty arr
  const dp = Array(n + 1).fill(Infinity);
  const pos = Array(n + 1).fill(-1);
  // cost at zero is zero
  dp[0] = 0;
  for (let i = 0; i <= n; i++) {
    if (nums[i] === -1) continue;
    for (let j = 1; j <= jumps && i + j <= n; j++) {
      // cant jump to
      if (nums[i] + nums[j] === -1) continue;
      // current dp val is infinity
      // OR dp[i] + nums[i] <= dp[i+j]
      // set dp[i+j] = dp[i] + nums[i]
      // set pos[i+j] = i, (i is position jumped from)
      if (dp[i + j] === Infinity || dp[i] + nums[i] <= dp[i + j]) {
        dp[i + j] = dp[i] + nums[i];
        pos[i + j] = i;
      }
    }
  }
  const res = [];
  // move backwards from end until reach 0 (the start), which should be -1
  // value stored at pos[i] is the index that we jumped from
  let i = n;
  while (i !== -1) {
    // not zero based so add 1
    res.unshift(i + 1);
    i = pos[i];
  }

  console.log({ dp, pos });
  return res;
}
console.log(s([1, 2, 4, -1, 2], 2), [1, 3, 5]);
console.log("``````````````````````````````");

function s2(coins, jumps) {
  const n = coins.length - 1;
  const dp = Array(n + 1).fill(Infinity);
  const pos = Array(n + 1).fill(-1);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    if (coins[i] === -1) continue;
    for (let j = 1; j <= jumps && i + j <= n; j++) {
      // cost[here] + cost to jump from here to some calculated cost[here + position j <= max Jumps]
      if (dp[i] + coins[i] <= dp[i + j]) {
        dp[i + j] = dp[i] + coins[i];
        pos[i + j] = i;
      }
    }
  }

  let i = n;
  const res = [];
  while (i !== -1) {
    res.unshift(i + 1);
    i = pos[i];
  }

  console.log({ dp, pos });

  return res;
}

console.log(s2([1, 2, 4, -1, 2], 2), [1, 3, 5]);
