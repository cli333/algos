// You are given a garland consisting of n lamps. States of the lamps are represented by the string s of length n. The i-th character of the string si equals '0' if the i-th lamp is turned off or '1' if the i-th lamp is turned on. You are also given a positive integer k.

// In one move, you can choose one lamp and change its state (i.e. turn it on if it is turned off and vice versa).

// The garland is called k-periodic if the distance between each pair of adjacent turned on lamps is exactly k. Consider the case k=3. Then garlands "00010010", "1001001", "00010" and "0" are good but garlands "00101001", "1000001" and "01001100" are not. Note that the garland is not cyclic, i.e. the first turned on lamp is not going after the last turned on lamp and vice versa.

// Your task is to find the minimum number of moves you need to make to obtain k-periodic garland from the given one.

// You have to answer t independent test cases.

function sol(n, k, lamps) {
  // n = # of lamps
  // k = period
  // find min number of moves necessary to to make k periodic garland of lamps from given one

  // total 1s to right of index
  const total = Array(n).fill(0);
  // total 1s to right of index within k period
  const totalRight = Array(n).fill(0);
  // total 1s to left of an index
  const totalLeft = Array(n).fill(0);

  findTotals();

  const dp = Array(n).fill(Infinity);

  if (lamps[n - 1] === "1") {
    dp[n - 1] = 0;
  } else {
    dp[n - 1] = 1;
  }

  // scan from right

  for (let i = n - 2; i >= 0; i--) {
    if (lamps[i] === "1") {
      // convert to 0
      // (cost to convert to 0) + (# of 1s to right of i, OR cost to convert 1s to 0s)
      dp[i] = Math.min(dp[i], 1 + total[i]);
      // keep as 1
      // (cost to keep as 1) + (total 1s within k period) + (computed dp[i + k + 1], already computed value for the string outside of k period!!)
      dp[i] = Math.min(dp[i], 0 + totalRight[i] + (i + k < n ? dp[i + k] : 0));
    } else if (lamps[i] === "0") {
      // convert to 1
      dp[i] = Math.min(dp[i], 1 + totalRight[i] + (i + k < n ? dp[i + k] : 0));
      // keep as 0
      dp[i] = Math.min(dp[i], 0 + total[i]);
    }
  }

  // scan from left

  for (let i = 1; i < n; i++) {
    // assuming everything to right is k period
    // add # of 1s to left of i to dp[i]
    dp[i] += totalLeft[i];
  }

  return Math.min(...dp);

  function findTotals() {
    let sum = 0;
    for (let i = n - 1; i >= 0; i--) {
      total[i] = sum;

      if (lamps[i] === "1") {
        sum += 1;
      }
    }
    sum = 0;
    for (let i = n - 1; i >= 0; i--) {
      if (i + k < n) {
        totalRight[i] = sum - total[i + k - 1];
      } else {
        totalRight[i] = sum;
      }

      if (lamps[i] === "1") {
        sum += 1;
      }
    }
    sum = 0;
    for (let i = 0; i < n; i++) {
      totalLeft[i] = sum;
      if (lamps[i] === "1") {
        sum += 1;
      }
    }
  }
}

console.log(sol(7, 4, "1111101"), 4);
console.log(sol(9, 2, "010001010"), 1);
console.log(sol(9, 3, "111100000"), 2);
console.log(sol(7, 4, "1111111"), 5);
console.log(sol(10, 3, "1001110101"), 4);
