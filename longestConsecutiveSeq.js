// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// Your algorithm should run in O(n) complexity.

//   Example:

// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is[1, 2, 3, 4].Therefore its length is 4.

const solve = (nums) => {
  const map = nums.reduce((a, b) => ({ ...a, [b]: true }), {});

  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let currentLength = 1;

    if (!map[currentNum - 1]) {
    }

    maxLength = Math.max(maxLength, currentLength);
  }
};

console.log(solve([100, 4, 200, 1, 3, 2]));
