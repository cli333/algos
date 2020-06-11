// Consider a game where a player can score 3 or 5 or 10 points in a move.Given a total score n, find number of ways to reach the given score.
//   Examples:

// Input: n = 20
// Output: 4
// There are following 4 ways to reach 20
//   (10, 10)
//   (5, 5, 10)
//   (5, 5, 5, 5)
//   (3, 3, 3, 3, 3, 5)

// Input: n = 13
// Output: 2
// There are following 2 ways to reach 13
//   (3, 5, 5)
//   (3, 10)

function solve(n) {
  let ways = [];
  const memo = {};
  findWays(n);
  return ways;

  function findWays(n, res = [], scores = [3, 5, 10]) {
    if (n === 0) {
      ways.push(res.slice());
      return;
    }

    for (let score of scores) {
      if (score <= n) {
        res.push(score);
        findWays(n - score, res);
        res.pop();
      }
    }
  }
}

function sol2(n) {
  const scores = [3, 5, 10];
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (i = 3; i <= n; i++) {
    dp[i] += dp[i - 3];
  }

  for (i = 5; i <= n; i++) {
    dp[i] += dp[i - 5];
  }

  for (i = 10; i <= n; i++) {
    dp[i] += dp[i - 10];
  }

  return dp;
}

// console.log(solve(20)); // 4
console.log(sol2(13)); // 2
