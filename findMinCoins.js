// Given a value V, if we want to make change for V cents, and we have infinite supply of each of C = { C1, C2, .. , Cm } valued coins, what is the minimum number of coins to make the change ?
//   Examples :

//   Input: coins[] = { 25, 10, 5}, V = 30
// Output: Minimum 2 coins required
// We can use one coin of 25 cents and one of 5 cents

// Input: coins[] = { 9, 6, 5, 1}, V = 11
// Output: Minimum 2 coins required
// We can use one coin of 6 cents and 1 coin of 5 cents

function solve(coins, V) {
  // runtime (2^n)
  // V ===0, 0 coins required
  if (V === 0) {
    return 0;
  }

  let res = Infinity;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= V) {
      let subres = solve(coins, V - coins[i]);
      res = Math.min(subres + 1, res);
    }
  }

  return res;
}

function solve2(coins, V) {
  // runtime o(n*v)
  // space o(V)

  // array of subproblems value 0,...V
  const dp = new Array(V + 1).fill(Infinity);
  // if V ===0, 0 coins needed
  dp[0] = 0;

  for (let i = 1; i <= V; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        // dp[currentValue - coins[j]], dp[subproblem(prevCoin = curValue - curCoin)]
        let subres = dp[i - coins[j]];
        dp[i] = Math.min(dp[i], subres + 1);
      }
    }
  }

  return dp[V];
}

function solve3(coins, V) {
  let out = [];
  gen(coins, V, 0, []);
  return out;

  function gen(coins, V, start, curList) {
    if (V === 0) {
      out.push(curList.slice());
    }

    for (let i = start; i < coins.length; i++) {
      if (coins[i] <= V) {
        curList.push(coins[i]);
        gen(coins, V - coins[i], i + 1, curList);
        curList.pop();
      }
    }
  }
}

// console.log(solve([25, 10, 5], 30)); // 25+5 = 2 coins
// console.log(solve([9, 6, 5, 1], 11)); // 6+5 = 2
// console.log(solve2([25, 10, 5], 30)); // 25+5 = 2 coins
// console.log(solve2([9, 6, 5, 1], 11)); // 6+5 = 2
// console.log(solve2([1, 2, 3, 4], 11));
// console.log(solve2([1, 2, 5], 11));
console.log(solve3([1, 1, 2, 3, 4, 5, 7], 7));

function sol(coins, V) {
  let out = new Array(V);
  const memo = {};
  findCoins(coins, V);
  return out;

  function findCoins(coins, V, res = []) {
    if (memo[JSON.stringify(res)]) {
      return;
    } else {
      memo[JSON.stringify(res)] = true;
    }

    if (V === 0 && res.length < out.length) {
      out = res.slice();
      return;
    }

    if (V <= 0) {
      return;
    }

    for (let coin of coins) {
      if (coin <= V) {
        res.push(coin);
        findCoins(coins, V - coin, res);
        res.pop();
      }
    }
  }
}
