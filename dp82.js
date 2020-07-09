// Given an array A of 0s and 1s, we may change up to K values from 0 to 1.

// Return the length of the longest(contiguous) subarray that contains only 1s.

//   Example 1:

// Input: A = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], K = 2
// Output: 6
// Explanation:
// [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1]
// Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.
//   Example 2:

// Input: A = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], K = 3
// Output: 10
// Explanation:
// [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1]
// Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.

function sol(A, K) {
  // o(n) time
  let res = 0;
  let lo = 0;
  let hi = 0;
  let n = A.length;
  let preSum = 0;

  for (hi; hi < n; hi++) {
    if (A[hi] === 0) preSum++;

    if (preSum > K) {
      while (lo < hi && A[lo] === 1) {
        lo++;
      }
      preSum--;
      lo++;
    }

    if (hi - lo + 1 > res) res = hi - lo + 1;
  }

  return res;
}

console.log(sol([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2), { solution: 6 });
console.log(sol([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3), {
  solution: 10,
});
