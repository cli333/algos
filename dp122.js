// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return the minimum cuts needed for a palindrome partitioning of s.

// Example:

// Input: "aab"
// Output: 1
// Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.

function sol(s) {
  const n = s.length;
  const dp = [];
  for (let i = 0; i <= n; i++) {
    const row = [];
    for (let j = 0; j <= n; j++) {
      row.push(0);
    }
    dp.push(row);
  }
  computeAllPals();
  const minPals = Array(n + 2).fill(Infinity);
  minPals[n + 1] = 0;

  for (let k = n; k >= 1; k--) {
    for (let l = k; l <= n; l++) {
      if (dp[k][l]) {
        minPals[k] = Math.min(minPals[k], 1 + minPals[l + 1]);
      }
    }
  }

  return minPals[1] - 1;

  function computeAllPals() {
    for (let i = n; i >= 1; i--) {
      // fill to the left of the char, used to get correct index on line 42
      dp[i][i - 1] = true;
      // char by itself is a pal
      dp[i][i] = true;
      for (let j = i + 1; j <= n; j++) {
        if (s[i - 1] === s[j - 1]) {
          dp[i][j] = dp[i + 1][j - 1];
        } else {
          dp[i][j] = false;
        }
      }
    }
  }
}

console.log(sol("aab"), 1);
console.log(sol("abc"), 2);
console.log(sol("racecara"), 1);
console.log(sol("babcacdad"), 2);
