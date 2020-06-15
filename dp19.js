// max contiguous array sum

function brut(nums) {
  // time, o(n3)
  // loop from i => end
  // loop from j => end
  // loop from i => j, to get sum
  let max = 0;
  let start = 0;
  let end = 0;

  for (let i = 0; i < nums.length; i++) {
    // n
    for (let j = 0; j < nums.length; j++) {
      // * n
      let sum = nums.slice(i, j).reduce((acc, val) => acc + val, 0); // * n
      if (sum > max) {
        start = i;
        end = j;
        max = sum;
      }
    }
  }

  return { max, start, end };
}

function sol(nums) {
  const dp = [];
  dp[0] = nums[0];
  let start = 0;
  let end = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + dp[i - 1] > nums[i]) {
      dp[i] = nums[i] + dp[i - 1];
      end = i - 1;
    } else {
      dp[i] = nums[i];
      start = i;
    }
  }

  return { max: Math.max(...dp), start, end };
}

function sol2(nums) {
  let max = nums[0];
  let maxSoFar = nums[0];
  let start = 0;
  let end = 0;

  for (let i = 1; i < nums.length; i++) {
    maxSoFar += nums[i];
    if (maxSoFar < 0) {
      maxSoFar = 0;
      start = i + 1;
    }
    if (maxSoFar > max) {
      max = maxSoFar;
      end = i + 1;
    }
  }

  return { max, start, end };
}

console.time("1");
for (let i = 0; i < 1000; i++) {
  brut([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
}
console.timeEnd("1");

console.time("2");
for (let i = 0; i < 1000; i++) {
  sol([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
}
console.timeEnd("2");

console.time("3");
for (let i = 0; i < 1000; i++) {
  sol2([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
}
console.timeEnd("3");

console.log(brut([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(sol([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(sol2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
