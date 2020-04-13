// Given a non - empty array of integers, return the third maximum number in this array.If it does not exist, return the maximum number.The time complexity must be in O(n).

//   Example 1:
// Input: [3, 2, 1]
// Output: 1
// Explanation: The third maximum is 1.

// Example 2:
// Input: [1, 2]
// Output: 2
// Explanation: The third maximum does not exist, so the maximum(2) is returned instead.

//   Example 3:
// Input: [2, 2, 3, 1]
// Output: 1
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.

const thirdMax = (integers) => {
  // must be o(n), no sorting, sorting = n logN
  let first = null;
  let second = null;
  let third = null;

  for (let num of integers) {
    // must be distinct, so skip if already seen
    if (num === first || num === second || num === third) {
      continue;
    }

    if (!first || num > first) {
      third = second;
      second = first;
      first = num;
    } else if (!second || num > second) {
      third = second;
      second = num;
    } else if (!third || num > third) {
      third = num;
    }
  }

  return third || first;
};

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
