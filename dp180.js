// given a staircase of n steps
// and a k possible steps we can take
// find the number of ways to reach the top

function s(n, k) {
  // o(n^k)
  if (n === 0) return 1;
  let res = 0;
  for (let i = 1; i <= k; i++) {
    if (n - i >= 0) {
      res += s(n - i, k);
    }
  }
  return res;
}

function s2(n, k) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      if (dp[i - j]) {
        dp[i] += dp[i - j];
      }
    }
  }
  return dp;
}

console.log(s(5, 2));
console.log(s2(5, 2));

function s3(n, possibleSteps) {
  if (n === 0) return 1;
  let res = 0;
  for (let step of possibleSteps) {
    if (n - step >= 0) {
      res += s3(n - step, possibleSteps);
    }
  }
  return res;
}

function s4(n, possibleSteps) {
  // o(n*m) time
  // o(n) space
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let step of possibleSteps) {
      if (i - step >= 0) {
        dp[i] += dp[i - step];
      }
    }
  }
  return dp;
}

console.log(s3(7, [2, 3, 4]));
console.log(s4(7, [2, 3, 4]));

function s5(n) {
  // 2 steps
  //   if (n <= 2) return n;
  //   return s5(n - 1) + s5(n - 2);
  // 3 steps
  if (n <= 2) return n;
  if (n === 3) return 5;
  return s5(n - 1) + s5(n - 2) + s5(n - 3);
}

console.log(s5(4));
