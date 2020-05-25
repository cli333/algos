// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

//   Example

// For inputArray = [2, 4, 1, 0], the output should be arrayMaximalAdjacentDifference(inputArray) = 3.

// Hints

// Math.abs()
// Input / Output

// [time limit]4000ms(js)
// [input] array.integer inputArray
// Guaranteed constraints:

// 3 ≤ inputArray.length ≤ 10,

//   -15 ≤ inputArray[i]≤ 15.

//   [output] integer
// The maximal absolute difference.

function solve(arr) {
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    // both negative
    // one negative
    // both positive
    let first = arr[i - 1];
    let second = arr[i];

    if (first < 0) {
      max = Math.max(max, second + first);
    } else if (second < 0) {
      max = Math.max(max, first + second);
    } else {
      max = Math.max(max, Math.abs(first - second));
    }
  }
  return max;
}

console.log(solve([2, 4, 1, 0]));
