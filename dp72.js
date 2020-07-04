// Given a circular array C of integers represented by A, find the maximum possible sum of a non - empty subarray of C.

//   Here, a circular array means the end of the array connects to the beginning of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i + A.length] = C[i] when i >= 0.)

// Also, a subarray may only include each element of the fixed buffer A at most once.  (Formally, for a subarray C[i], C[i + 1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)

// Example 1:

// Input: [1, -2, 3, -2]
// Output: 3
// Explanation: Subarray[3] has maximum sum 3
// Example 2:

// Input: [5, -3, 5]
// Output: 10
// Explanation: Subarray[5, 5] has maximum sum 5 + 5 = 10
// Example 3:

// Input: [3, -1, 2, -1]
// Output: 4
// Explanation: Subarray[2, -1, 3] has maximum sum 2 + (-1) + 3 = 4
// Example 4:

// Input: [3, -2, 2, -3]
// Output: 3
// Explanation: Subarray[3] and[3, -2, 2] both have maximum sum 3

function sol(A) {
  // use kadane's
  // find the max subarray sum,
  // find min subarray sum

  let maxSoFar = A[0];
  let max = A[0];
  let minSoFar = A[0];
  let min = A[0];
  let sum = A[0];

  for (let i = 1; i < A.length; i++) {
    if (maxSoFar + A[i] > A[i]) {
      maxSoFar += A[i];
    } else {
      maxSoFar = A[i];
    }
    max = Math.max(max, maxSoFar);

    if (minSoFar + A[i] < A[i]) {
      if (minSoFar + A[i] < A[i]) {
        minSoFar += A[i];
      } else {
        minSoFar = A[i];
      }
    }
    min = Math.min(min, minSoFar);

    sum += A[i];
  }

  // all negative
  if (sum === min) return max;
  //
  return Math.max(sum - min, max);
}

console.log(sol([1, -2, 3, -2]));
console.log(sol([5, -3, 5]));
console.log(sol([3, -1, 2, -1]));
