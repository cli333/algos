// In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the i - th domino.
// (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

// We may rotate the i - th domino, so that A[i] and B[i] swap values.

// Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

// If it cannot be done, return -1.

// Example 1:

// Input: A = [2, 1, 2, 4, 2, 2], B = [5, 2, 6, 2, 3, 2]
// Output: 2
// Explanation:
// The first figure represents the dominoes as given by A and B: before we do any rotations.
// If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
//   Example 2:

// Input: A = [3, 5, 1, 2, 3], B = [3, 6, 3, 3, 4]
// Output: -1
// Explanation:
// In this case, it is not possible to rotate the dominoes to make one row of values equal.

function solve(A, B) {
  // only four possiblities
  // can make top row A[0] || B[0]
  // can make bottom row A[0] || B[0]

  let minSwaps = Math.min(
    swap(A[0], A, B),
    swap(B[0], A, B),
    swap(A[0], B, A),
    swap(B[0], B, A)
  );

  return minSwaps === Infinity ? -1 : minSwaps;

  function swap(target, A, B) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] !== target && B[i] !== target) {
        return Infinity;
      } else if (A[i] !== target && B[i] == target) {
        count++;
      }
    }
    return count;
  }
}

console.log(solve([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]));
console.log(solve([3, 5, 1, 2, 3], [3, 6, 3, 3, 4]));
