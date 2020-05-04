// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1:
// Input: [0, 1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
// Example 2:
// Input: [0, 1, 0]
// Output: 2
// Explanation: [0, 1](or[1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Note: The length of the given binary array will not exceed 50, 000.

const solve = (arr) => {
  let count = 0;
  let counts = {};
  let maxLength = 0;

  // add a zero count
  counts[0] = -1;

  for (let i = 0; i < arr.length; i++) {
    // increment/dec count
    if (arr[i] === 0) {
      count--;
    } else {
      count++;
    }

    // if counts doesn't contain count, add it
    // if seen that count
    // max length is equal to max length at current count vs previous count
    // basically when see a similar count, it means that count has increased/decreased and return to the this count level, meaning that this subarray has an equal number of 0 and 1s

    if (counts[count]) {
      maxLength = Math.max(maxLength, i - counts[count]);
    } else {
      counts[count] = i;
    }
  }

  return maxLength;
};

console.log(solve([0, 1]));
console.log(solve([0, 1, 0]));
console.log(solve([0, 1, 1, 1, 0, 0, 1, 0, 0]));
console.log(solve([1, 1, 0, 1, 0, 1, 0, 1, 1]));
