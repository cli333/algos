// longest common subsequence
function sol(a, b) {
  const dp = [];
  for (let i = 0; i <= a.length; i++) {
    const row = new Array(b.length + 1).fill(0);
    dp.push(row);
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      dp[i + 1][j + 1] =
        (a[i] === b[j] ? 1 : 0) + Math.max(dp[i][j + 1], dp[i + 1][j]);
    }
  }

  return dp[a.length][b.length];
}

console.log(sol("abcdaf", "abcf"));

// subset sum
function sol2(nums = [2, 3, 7, 8, 10], target = 11) {
  const dp = [];
  for (let i = 0; i < nums.length; i++) {
    const row = [];
    for (let j = 0; j <= target; j++) {
      row.push(false);
    }
    dp.push(row);
  }
  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j <= target; j++) {
      if (j - nums[i - 1] >= 0) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[nums.length - 1][target];
}

console.log(sol2(), true);

// coin change
// min coins to get a total
function sol3(coins = [1, 5, 6, 8], total = 11) {
  const dp = Array(total + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= total; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }

  return dp[total];
}

console.log(sol3(), 2);

function sol4(coins = [1, 5, 6, 8], total = 32) {
  if (total === 0) return 0;
  let min = Infinity;
  for (let coin of coins) {
    if (coin <= total) {
      min = Math.min(min, 1 + sol4(coins, total - coin));
    }
  }
  return min;
}

console.log(sol4(), 4);

// min edit distance

function sol5(a, b) {
  const dp = [];
  for (let i = 0; i <= a.length; i++) {
    const row = [];
    for (let j = 0; j <= b.length; j++) {
      row.push(0);
    }
    dp.push(row);
  }
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = i;
  }
  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[a.length][b.length];
}

console.log(sol5("abcdef", "azced"), 3);

function sol6(a, b, m = a.length - 1, n = b.length - 1) {
  if (!m) return n;
  if (!n) return m;

  if (a[m] === b[n]) {
    return sol6(a, b, m - 1, n - 1);
  }

  return (
    1 +
    Math.min(
      sol6(a, b, m - 1, n),
      sol6(a, b, m - 1, n - 1),
      sol6(a, b, m, n - 1)
    )
  );
}

console.log(sol6("abcdef", "azced"), 3);

// longest increasing subseq length

function sol7(nums) {
  const dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }

  return Math.max(...dp);
}

console.log(sol7([3, 4, -1, 0, 6, 2, 3]), 4);

function sol8(nums) {
  let res = 0;
  helper(0, null, 0);
  return res;

  function helper(i, cur, len) {
    if (i === nums.length) {
      res = Math.max(res, len);
    }

    for (let j = i; j < nums.length; j++) {
      if (!cur || nums[j] > cur) {
        helper(j + 1, nums[j], len + 1);
      }
    }
  }
}

console.log(sol8([3, 4, -1, 0, 6, 2, 3]), 4);

// cut rod to maximize profit

function sol9(
  len = 5,
  prices = [
    [1, 2],
    [2, 5],
    [3, 7],
    [4, 8],
  ]
) {
  // [len, price] = prices[i]
  const dp = Array(len + 1).fill(0);

  for (let i = 0; i <= len; i++) {
    for (let [cut, profit] of prices) {
      if (cut <= i) {
        dp[i] = Math.max(dp[i], profit + dp[i - cut]);
      }
    }
  }

  return dp[len];
}

console.log(sol9(), 12);

function sol10(
  len = 5,
  prices = [
    [1, 2],
    [2, 5],
    [3, 7],
    [4, 8],
  ]
) {
  const map = {};
  for (let price of prices) {
    const [l, p] = price;
    map[l] = p;
  }
  let res = 0;
  const res2 = [];
  helper(len);
  return res;

  function helper(len, profit = 0, list = []) {
    if (!len) {
      if (profit > res) {
        res = profit;
        res2.push(list);
      }
      return;
    }

    for (let l in map) {
      if (l <= len) {
        helper(len - l, profit + map[l], [...list, l]);
      }
    }
  }
}

console.log(sol10(), 12);

// coin change

function sol11(total = 13, coins = [7, 2, 3, 6]) {
  const dp = Array(total + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= total; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  return dp[total];
}

console.log(sol11());

function sol12(total = 13, coins = [7, 2, 3, 6]) {
  let res = Infinity;
  helper(total);
  return res;

  function helper(cur, amt = 0) {
    if (cur === 0) {
      res = Math.min(res, amt);
      return;
    }

    for (let coin of coins) {
      if (coin <= cur) {
        helper(cur - coin, amt + 1);
      }
    }
  }
}

console.log(sol12());

// total number of ways to make change

function sol13(total = 5, coins = [1, 2, 3]) {
  const dp = [];
  for (let i = 0; i <= coins.length; i++) {
    const row = [];
    for (let j = 0; j <= total; j++) {
      row.push(null);
    }
    dp.push(row);
  }
  dp[0].fill(0);
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= coins.length; i++) {
    for (let j = 1; j <= total; j++) {
      if (coins[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
      }
    }
  }

  return dp;
}

console.log(sol13());

function sol14(total = 5, coins = [1, 2, 3]) {
  let res = 0;
  helper(total, []);
  return res;

  function helper(total, list) {
    if (total === 0) {
      res++;
      return;
    }

    for (let coin of coins) {
      if (coin <= total) {
        list.push(coin);
        helper(total - coin, list);
        list.pop();
      }
    }
  }
}

console.log(sol14());

// egg drop, find floor to drop from to maximize drops

function sol15(floors = 6, eggs = 2) {
  const dp = [];
  for (let i = 0; i <= eggs; i++) {
    const row = [];
    for (let j = 0; j <= floors; j++) {
      row.push(Infinity);
    }
    dp.push(row);
  }
  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = i;
    dp[1][i] = i;
  }

  for (let i = 2; i <= eggs; i++) {
    for (let j = 1; j <= floors; j++) {
      for (let k = 1; k <= j; k++) {
        let res = 1 + Math.max(dp[i - 1][j - 1], dp[i][j - k]);
        dp[i][j] = Math.max(dp[i][j], res);
      }
    }
  }

  return dp;
}

console.log(sol15());

function sol16(floors = 6, eggs = 2) {
  if (floors === 0 || floors === 1) {
    return floors;
  }

  if (eggs === 1) {
    return floors;
  }

  let min = Infinity;
  for (let i = 1; i <= floors; i++) {
    // egg breaks, go down a level, subtract an egg
    // doesnt break, go down to 'mid'
    let res = Math.max(sol16(floors - 1, eggs - 1), sol16(floors - eggs, eggs));
    min = Math.min(min, res);
  }
  return min;
}

console.log(sol16());

// maximum sum sub-rectangular matrix

function sol17(
  matrix = [
    [2, 1, -3, -4, 5],
    [0, 6, 3, 4, 1],
    [2, -2, -1, 4, -5],
    [-3, 3, 1, 0, 3],
  ]
) {
  const dp = Array(matrix.length).fill(0);
  let maxSum = 0;
  // boundaries
  let maxLeft = 0;
  let maxRight = 0;
  let maxUp = 0;
  let maxDown = 0;

  for (let left = 0; left < matrix[0].length; left++) {
    for (let right = left; right < matrix[0].length; right++) {
      for (let i = 0; i < matrix.length; i++) {
        dp[i] += matrix[i][right];
      }
      const { max, start, end } = sol18(dp);
      if (max > maxSum) {
        maxSum = max;
        maxLeft = left;
        maxRight = right;
        maxUp = start;
        maxDown = end;
      }
    }
    // reset for next iteration of 'left'
    dp.fill(0);
  }
  return { maxSum, maxLeft, maxRight, maxUp, maxDown };
}

console.log(sol17());

// kadane's algo

function sol18(arr = [-1, 3, -2, 5, -6, 1]) {
  let curMax = 0;
  let max = 0;
  let start = 0;
  let end = 0;
  for (let i = 0; i < arr.length; i++) {
    curMax += arr[i];
    if (curMax < 0) {
      curMax = 0;
      start = i + 1;
    }
    if (curMax > max) {
      max = curMax;
      end = i;
    }
  }
  return { max, start, end };
}

console.log(sol18(), 6);

// weighted job scheduling

function sol19(
  jobs = [
    [1, 3, 5],
    [2, 5, 6],
    [4, 6, 5],
    [6, 7, 4],
    [5, 8, 11],
    [7, 9, 2],
  ]
) {
  // [start, end, profit]
  // sort by end times
  jobs.sort(([s1, e1], [s2, e2]) => (e1 < e2 ? -1 : 1));
  const dp = jobs.map(([start, end, profit]) => profit);

  for (let i = 1; i < jobs.length; i++) {
    for (let j = 0; j < i; j++) {
      const [s1, e1] = jobs[j];
      const [s2, e2, profit2] = jobs[i];
      if (e1 <= s2) {
        dp[i] = Math.max(dp[i], dp[j] + profit2);
      }
    }
  }

  return Math.max(...dp);
}

console.log(sol19(), 17);

// longest common substring

function sol20(
  a = "cato",
  b = "datz",
  m = a.length - 1,
  n = b.length - 1,
  res = 0
) {
  if (!m || !n) {
    return res;
  }
  if (a[m] === b[n]) {
    return sol20(a, b, m - 1, n - 1, res + 1);
  }
  return Math.max(sol20(a, b, m - 1, n), sol20(a, b, m, n - 1));
}

console.log(sol20());

function sol21(a = "cato", b = "datz") {
  const dp = [];
  for (let i = 0; i < a.length; i++) {
    const row = [];
    for (let j = 0; j < b.length; j++) {
      row.push(0);
    }
    dp.push(row);
  }

  for (let i = 1; i < a.length; i++) {
    for (let j = 1; j < b.length; j++) {
      dp[i][j] =
        (a[i - 1] === b[j - 1]) +
        Math.max(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[a.length - 1][b.length - 1];
}

console.log(sol21());

// max size rectangle of 1's in a matrix

function sol22(
  matrix = [
    [1, 0, 0, 1, 1, 1],
    [1, 0, 1, 1, 0, 1],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1],
  ]
) {
  let maxRectangle = 0;
  const dp = matrix[0].slice();
  // find max histogram
  maxRectangle = Math.max(maxRectangle, maxHistogram(dp));
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        // add to the column
        dp[j] += matrix[i][j];
      } else {
        // reset the column
        dp[j] = 0;
      }
    }
    // find max histogram
    maxRectangle = Math.max(maxRectangle, maxHistogram(dp));
  }

  return maxRectangle;

  function maxHistogram(arr) {
    const stack = [];
    let maxArea = 0;
    let area = 0;
    let i = 0;
    for (; i < arr.length; ) {
      if (!stack.length || arr[stack[stack.length - 1]] <= arr[i]) {
        stack.push(i);
        i++;
      } else {
        const top = stack.pop();
        if (!stack.length) {
          area = arr[top] * i;
        } else {
          area = arr[top] * (i - stack[stack.length - 1] - 1);
        }
        maxArea = Math.max(area, maxArea);
      }
    }
    while (stack.length) {
      const top = stack.pop();
      if (!stack.length) {
        area = arr[top] * i;
      } else {
        area = arr[top] * (i - stack[stack.length - 1] - 1);
      }
      maxArea = Math.max(maxArea, area);
    }
    return maxArea;
  }
}

console.log(sol22());

/* 
  can split a word into all the words in a dictionary?
*/

function sol23(s, dict = ["I", "am", "a", "ace"]) {
  const dp = [];
  for (let i = 0; i < s.length; i++) {
    const row = [];
    for (let j = 0; j < s.length; j++) {
      row.push(false);
    }
    dp.push(row);
  }
  for (let l = 1; l <= s.length; l++) {
    for (let i = 0; i < s.length - l + 1; i++) {
      const j = i + l - 1;
      const curWord = s.substring(i, j + 1);
      if (dict.indexOf(curWord) >= 0) {
        // current word is in the dict, set to true
        dp[i][j] = true;
      } else {
        // try slicing the current word at different indices
        for (let k = i + 1; k <= j; k++) {
          if (dp[i][k - 1] && dp[k][j]) {
            dp[i][j] = true;
            break;
          }
        }
      }
    }
  }
  return dp[0][s.length - 1];
}

console.log(sol23("Iamace"), sol23("Iamc"));

// buy, sell stock for k transactions

function sol24(prices = [2, 5, 7, 1, 4, 3, 1, 3], k = 3) {
  const dp = [];
  for (let i = 0; i <= k; i++) {
    const row = [];
    for (let j = 0; j < prices.length; j++) {
      row.push(0);
    }
    dp.push(row);
  }
  // skip first row, 0 transactions = no profit
  // skip first col, only 1 day = no profit
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j < prices.length; j++) {
      for (let m = 0; m < j; m++) {
        // no transactions VS. (prices[current day] - prices[day[m]]) + best we can do if we choose day[m] ie. dp[...][m]
        // max(previous day, current day - day[m] + dp[i-1][m])
        dp[i][j] = Math.max(dp[i][j - 1], prices[j] - prices[m] + dp[i - 1][m]);
      }
    }
  }
  return dp[k][dp[k].length - 1];
}

console.log(sol24(), 8);

function sol25(prices = [2, 5, 7, 1, 4, 3, 1, 3], k = 3) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    helper(i, 0);
  }
  return max;

  function helper(buy, profit) {
    if (k === 0) {
      max = Math.max(max, profit);
      return;
    }

    for (let sell = buy + 1; sell < prices.length; sell++) {
      if (prices[buy] < prices[sell]) {
        k--;
        helper(sell + 1, profit + prices[sell] - prices[buy]);
        k++;
      }
    }
  }
}

console.log(sol25(), 8);

// min jump to reach end

function sol26(arr = [2, 3, 1, 1, 2, 4, 2, 0, 1, 1]) {
  // number at idx is the max number of jumps can take
  const dp = arr.slice().fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] + j >= i) {
        if (dp[j] + 1 < dp[i]) {
          dp[i] = dp[j] + 1;
        }
      }
    }
  }

  return dp[dp.length - 1];
}

console.log(sol26());

function sol27(arr = [2, 3, 1, 1, 2, 4, 2, 0, 1, 1]) {
  let target = arr.length - 1;
  let min = Infinity;
  let record;
  helper(0);
  return { min, record };

  function helper(i, total = 0, history = [0]) {
    if (i === target) {
      if (total < min) {
        min = total;
        record = history.slice();
      }
      return;
    }

    const maxJumps = arr[i];

    for (let jumps = 1; jumps <= maxJumps; jumps++) {
      history.push(i + jumps);
      helper(i + jumps, total + 1, history);
      history.pop();
    }
  }
}

console.log(sol27());

function sol28(arr = [2, 3, 1, 1, 2, 4, 2, 0, 1, 1]) {
  // o(n)
  let jumps = 1;
  let ladder = arr[0];
  let stair = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (i === arr.length - 1) {
      return jumps;
    }
    if (i + arr[i] > ladder) {
      ladder = i + arr[i];
    }
    stair--;
    if (stair === 0) {
      jumps++;
      stair = ladder - i;
    }
  }
  return jump;
}

console.log(sol28());
