// given n eggs and k floors, decide floors from which eggs should be dropped so that the total number of attempts are minimized

// if dropped from 4th floor, x = 4
// 2 possibilities => breaks or does not break
// if breaks, then it would break at higher floor
// so limited to x-1 floors and n-1 eggs left
// if does not break, then search is limited to 10-x = 6 floors above, (x is 4 in this case)
// floors = k - x, eggs = n - 1
// eggdrop = 1 + min(max(eggdrop(n-1, x-1), eggdrop(n, k-x)))

function solve(n, k) {
  // n eggs
  // k floors

  // if 1 floor or no floors
  // 1 trial / no trials needed
  if (k === 1 || k === 0) {
    return k;
  }

  // if only one egg, need k trials
  if (n === 1) {
    return k;
  }

  let min = Infinity;

  // consider all droppings from 1st floor to kth floor
  for (let x = 1; x <= k; x++) {
    // max of egg breaks: eggs--, check floors below x
    // egg does not break: eggs, check floors above x
    let res = Math.max(solve(n - 1, x - 1), solve(n, k - x));
    if (res < min) min = res;
  }

  return min + 1;
}

function solve2(n, k) {
  const dp = [];

  for (let i = 0; i <= k; i++) {
    const row = [];
    for (let j = 0; j <= n; j++) {
      row.push(0);
    }
    dp.push(row);
  }

  for (let r = 1; r <= k; r++) {
    dp[r][0] = 0;
    dp[r][1] = 1;
  }

  for (let r = 1; r <= k; r++) {
    dp[1][r] = r;
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= k; j++) {
      dp[i][j] = Infinity;
      for (let x = 1; x <= j; x++) {
        let res = 1 + Math.max(dp[i - 1][x - 1], dp[i][j - x]);
        if (res < dp[i][j]) dp[i][j] = res;
      }
    }
  }

  return dp;
}

console.log(solve(2, 10)); // 4th floor
console.log(solve(2, 4)); // 3rd floor
console.log(solve2(2, 10)); // 4th floor
console.log(solve2(2, 4)); // 3rd floor
console.log(solve2(3, 3));
