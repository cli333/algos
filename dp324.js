// 60. Permutation Sequence
// Hard

// 2138

// 361

// Add to List

// Share
// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Example 1:

// Input: n = 3, k = 3
// Output: "213"
// Example 2:

// Input: n = 4, k = 9
// Output: "2314"
// Example 3:

// Input: n = 3, k = 1
// Output: "123"

function s(n, k) {
  // separate permutations into blocks with first digit fixed
  // if n = 3
  // if first digit is 1, there are (n-1)! possibilities, ===> block size
  // if n = 4, (n-1)! = 6 block size
  // first digit 1, can further divide to smaller blocks, (n-2)! block size for second fixed digit
  const factorials = Array(n + 1).fill(1);
  factorial(1);
  let res = "";
  const digits = Array(n)
    .fill(0)
    .map((_, i) => i + 1);
  helper(n, k);
  return res;

  function helper(n, k) {
    if (n === 1) {
      // add leftover digit
      res += digits[0];
      return;
    }
    const idx = Math.floor(k / factorials[n - 1]);
    res += digits[idx];
    digits.splice(idx, 1);
    k -= factorials[n - 1] * idx;
    helper(n - 1, k);
  }

  function factorial(n) {
    if (n === factorials.length) return;
    factorials[n] = n * factorials[n - 1];
    factorial(n + 1);
  }
}

console.log(s(4, 14), "3142");
