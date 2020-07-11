// arithmetic sequence II
// find all SEQUENCES that have same difference, NOT CONSECUTIVE

function sol(A) {
  // at least 3 elements
  const dp = [];
  const n = A.length;
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    dp.push(row);
  }
  const map = {};
  for (let i = 0; i < n; i++) {
    map[A[i]] = [i];
  }

  let res = 0;

  // third num
  for (let i = 0; i < n; i++) {
    // second num
    for (let j = 0; j < i; j++) {
      const target = 2 * A[j] - A[i];
      if (map[target]) {
        // k is the index of last num for arithmetic sequence
        // if k < j, or index of k is less than j
        for (let k of map[target]) {
          if (k < j) {
            dp[i][j] += dp[j][k] + 1;
          }
        }
      }
      res += dp[i][j];
    }
  }

  return res;
}

console.log(sol([2, 4, 6, 8, 10])); // 7

/* 
[
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0 ],
  [ 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 3, 0 ]
]
*/
