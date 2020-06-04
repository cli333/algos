// largest sum contiguous subarray

function solve(arr) {
  let max = arr[0];
  let curMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    curMax = Math.max(arr[i], curMax + arr[i]);
    max = Math.max(curMax, max);
  }

  return max;
}

console.log(solve([-2, -3, 4, -1, -2, 1, 5, -3])); // 4,-1,-2,1,5 = 7
console.log(solve([-1, -2, -3, -6, -5]));
