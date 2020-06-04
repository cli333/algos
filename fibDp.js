function solve(n) {
  // runtime of recursive fib = o(2^n)
  // runtime recursive fib w/ memo = o(n), space = o(n)
  // runtime of dbp fib = o(n), space = o(n)

  // what is dp?
  // programming paradigm that solves a given problem by breaking into subproblems and storing results of subproblems to avoid computing again
  // check if problems has overlapping sub-problem property => re-computation of same problems

  const dp = [...new Array(n + 1)].fill(0);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(solve(30));
