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

// sliding window approach
// two pointers
// when hit a 0, decrement K
// when K < 0, move the start pointer, so 'window' 'slides'
// when start pointer hits a 0, increment K

const max3 = (A, K) => {
  let start = 0; // start
  let end = 0; // end

  while (end < A.length) {
    if (A[end] === 0) {
      K--;
    }
    if (K < 0) {
      if (A[start] === 0) {
        K++;
      }
      start++;
    }
    end++;
  }

  return end - start;
};

console.log(max3([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(max3([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)); // 10
