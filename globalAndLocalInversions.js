// We have some permutation A of[0, 1, ..., N - 1], where N is the length of A.

// The number of(global) inversions is the number of i < j with 0 <= i < j < N and A[i] > A[j].

// The number of local inversions is the number of i with 0 <= i < N and A[i] > A[i + 1].

// Return true if and only if the number of global inversions is equal to the number of local inversions.

//   Example 1:

// Input: A = [1, 0, 2]
// Output: true
// Explanation: There is 1 global inversion, and 1 local inversion.
//   Example 2:

// Input: A = [1, 2, 0]
// Output: false
// Explanation: There are 2 global inversions, and 1 local inversion.

const solve = (A) => {
  // global: element @ i > element @ j, where i < j
  // local: element @ i > element @ j, where j === i + 1
  // find a global that isn't a local

  let max = -1;
  for (let i = 0; i < A.length - 2; i++) {
    // find the "element @ i" or the first "max"
    max = Math.max(A[i], max);
    // if number two indices away is less than the current max, we've found a global inversion that isn't a local inversion!
    // return
    if (max > A[i + 2]) return false;
  }

  return true;
};

console.log(solve([1, 0, 2])); // true
console.log(solve([1, 2, 0])); // false
