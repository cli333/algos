// Given an integer array nums, return the number of range sums that lie in [lower, upper] inclusive.
// Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j(i ≤ j), inclusive.

//   Note:
// A naive algorithm of O(n2) is trivial.You MUST do better than that.

//   Example:

// Input: nums = [-2, 5, -1], lower = -2, upper = 2,
//   Output: 3
// Explanation: The three ranges are: [0, 0], [2, 2], [0, 2] and their respective sums are: -2, -1, 2.

function msort(arr) {
  if (arr.length === 1) return arr;
  const midPoint = Math.floor(arr.length / 2);
  const left = msort(arr.slice(0, midPoint));
  const right = msort(arr.slice(midPoint));
  return merge(left, right);

  function merge(a, b) {
    const out = [];
    while (a.length && b.length) {
      if (a[0] < b[0]) {
        out.push(a.shift());
      } else {
        out.push(b.shift());
      }
    }
    return [...out, ...a, ...b];
  }
}

function sol(nums, lower, upper) {}

console.log(msort([-2, 5, -1, -99, 0, 15, 11, -8, 5]));
console.log(sol([-2, 5, -1], -2, 2));
