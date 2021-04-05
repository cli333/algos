// DP problems

function longestSubsequence(nums) {
  const dp = Array(nums.length).fill(1);
  const pos = Array(nums.length);
  let maxLen = 1;
  let maxPosition = null;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (dp[i] <= 1 + dp[j]) {
          dp[i] = 1 + dp[j];
          pos[i] = j;
          if (dp[i] > maxLen) {
            maxLen = dp[i];
            maxPosition = i;
          }
        }
      }
    }
  }
  const res = [];
  while (maxPosition) {
    res.unshift(nums[maxPosition]);
    maxPosition = pos[maxPosition];
  }
  console.log({ dp, pos, maxLen, maxPosition });
  return res.join(",");
}

console.log(longestSubsequence([1, -1, 0, 2.5, 8, 2, 3, 0, 4, 6, 11, 10]));

// house robber II

function robber(houses) {
  // first and last houses connected
  // houses[i] = money in house
  // find max you can take without touching adjacent houses
  const { profit: p1, res: r1 } = helper(0, houses.length - 2);
  const { profit: p2, res: r2 } = helper(1, houses.length - 1);
  return;
  if (p1 > p2) {
    return r1;
  } else {
    return r2;
  }

  function helper(l, r) {
    const dp = Array(houses.length).fill(0);
    const pos = Array(houses.length).fill(-1);
    for (let i = l; i <= r; i++) {
      if ((dp[i - 1] || 0) >= (dp[i - 2] || 0) + houses[i]) {
        dp[i] = dp[i - 1] || 0;
        pos[i] = i - 1 >= 0 ? i - 1 : 0;
      } else {
        dp[i] = (dp[i - 2] || 0) + houses[i];
        pos[i] = i - 2 >= 0 ? i - 2 : 0;
      }
    }
    const res = [];
    console.log("----------->", dp, pos);
    return { profit: dp[dp.length - 1], res };
  }
}

console.log(robber([1, 2, 3, 1]));

// coin path

function coinPath(nums, jumps) {
  // jumps is how far you can jump
  // nums is the cost to jump from that location
  // find min needed to reach end
  const dp = Array(nums.length).fill(Infinity);
  const pos = Array(nums.length).fill(-1);
  dp[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) continue;
    for (let j = i + 1; j <= i + jumps && j < nums.length; j++) {
      if (dp[i] + nums[i] <= dp[j]) {
        dp[j] = dp[i] + nums[i];
        pos[j] = i;
      }
    }
  }
  const res = [];
  let i = nums.length - 1;
  while (i !== -1) {
    res.unshift(i + 1);
    i = pos[i];
  }
  console.log({ dp, pos });
  return res;
}

console.log(coinPath([1, 2, 4, -1, 2], 2), [1, 3, 5]);

// jump game

// longest common subsequence
