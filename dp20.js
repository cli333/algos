// // Question: You are climbing a staircase. It takes n steps to reach to the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? (n is always a positive integer).

// This is a classic problem.Let us tackle it thoroughly, there are many ways to do this that form the basis for how we do other problems bottom up with a DP table or top down with memoization.

// The key with a problem like this is to instantly recognize that this turns into a series of subproblems, it is very similar to the Fibonacci sequence calculations.

function sol(n) {
  // fib solution time = o(2^n)
  // this time = o(n)

  // can only take 1 step or 2 steps
  /* 
    the total ways to make subproblem(6 steps) will equal:
    the total ways to make (take 2 steps ? subproblem(4 steps)) + (take 1 step ? subproblem(5 steps))
  */
  const dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(sol(5));
