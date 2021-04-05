// 189. Rotate Array
// Medium

// 4354

// 918

// Add to List

// Share
// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

function s(arr, k) {
  return arr.concat(arr).slice(k + 1, k + arr.length + 1);
}

function s2(arr, k) {
  k %= arr.length;
  console.log({ k });
  reverse(0, arr.length - 1);
  reverse(0, k - 1);
  reverse(k, arr.length - 1);
  return arr;

  function reverse(l, r) {
    while (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }
}

console.log(s2([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4]);
