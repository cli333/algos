// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be avoidObstacles(inputArray) = 4.

// Check out the image below for better understanding:

// Hints

// sort()
// every()
// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer inputArray
// Non-empty array of positive integers.

// Guaranteed constraints:

// 2 ≤ inputArray.length ≤ 10,

// 1 ≤ inputArray[i] ≤ 40.

// [output] integer
// The desired length.

function solve(arr) {
  arr.sort((a, b) => (a < b ? -1 : 1));
  let jumps = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] - 1 || !arr[i + 1]) jumps++;
  }
  return jumps;
}

console.log(solve([5, 3, 6, 7, 9]));
