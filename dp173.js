/* 
give an non empty arr of non negative ints
where each element represents the max jump we can
perform from that index
check if we can reach the last index
*/

function s(arr) {
  // time o(2^n)
  // space o(n), stack size
  const n = arr.length - 1;
  return helper(0);

  function helper(idx) {
    if (idx === n) return true;
    const jump = arr[idx];
    for (let i = 1; i <= jump; i++) {
      if (helper(idx + i)) return true;
    }
    return false;
  }
}

console.log(s([3, 0, 2, 0, 0, 1, 4, 3]));
console.log(s([5, 3, 2, 0, 1, 0, 4]));

// find min

function s2(arr) {
  const n = arr.length - 1;
  let res = Infinity;
  helper(0);
  return res;

  function helper(idx, jumps = 0) {
    if (idx === n) {
      res = Math.min(res, jumps);
      return;
    }
    const maxJump = arr[idx];
    for (let i = 1; i <= maxJump; i++) {
      helper(idx + i, jumps + 1);
    }
  }
}

console.log(s2([3, 0, 3, 0, 0, 2, 4, 3]));
console.log(s2([5, 3, 2, 0, 1, 0, 4]));

function s3(arr) {
  const n = arr.length;
  const dp = Array(n).fill(false);
  dp[0] = true;
  for (let i = 0; i < n; i++) {
    const maxJump = arr[i];
    for (let j = 1; j <= maxJump && i + j < n; j++) {
      dp[i + j] = true;
    }
  }
  // if every idx is true, we can reach end
  return dp;
}

console.log(s3([3, 0, 3, 0, 0, 2, 4, 3]));
console.log(s3([5, 3, 2, 0, 1, 0, 4]));

function s4(arr) {
  // find min
  // o(n2) time
  // o(n) space
  const n = arr.length;
  const dp = Array(n).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    const maxJump = arr[i];
    for (let j = 1; j <= maxJump && i + j < n; j++) {
      dp[i + j] = Math.min(dp[i + j], 1 + dp[i]);
    }
  }
  return dp;
}

console.log(s4([3, 0, 3, 0, 0, 2, 4, 3]));
console.log(s4([5, 3, 2, 0, 1, 0, 4]));

function s5(arr) {
  // o(n) time
  // o(1) space
  const n = arr.length;
  let maxIdx = 0;
  // if the current idx is ever greater than our reach, we cannot reach end
  // else keep updating the maxidx
  for (let i = 0; i < n; i++) {
    if (i > maxIdx) return false;
    maxIdx = Math.max(maxIdx, i + arr[i]);
  }
  return maxIdx >= n - 1;
}

console.log(s5([3, 0, 3, 0, 0, 2, 4, 3]));
console.log(s5([5, 3, 2, 0, 1, 0, 4]));
