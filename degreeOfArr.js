// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// Example 1:
// Input: [1, 2, 2, 3, 1]
// Output: 2
// Explanation:
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.

// Example 2:
// Input: [1,2,2,3,1,4,2]
// Output: 6
// subarray => [2,2,3,1,4,2]

const solve = (nums) => {
  // loop through
  // map the degrees, find the max
  // map when the number was first seen

  const numCounts = {};
  let degree = 0;

  const firstSeen = {};
  let minLength = nums.length;

  for (let i = 0; i < nums.length; i++) {
    firstSeen[nums[i]] = i;
    numCounts[nums[i]] = numCounts[nums[i]] + 1 || 1;

    // if find number with a greater degree
    // update the minlength = the current index - the index of the first occurrence of that number AND update the degree
    // if find number with same degree
    // check the minlength of that contiguous arr with that number vs the current minlength

    if (numCounts[nums[i]] > degree) {
      degree = numCounts[nums[i]];
      minLength = i - firstSeen[nums[i]] + 1;
    } else if (numCounts[nums[i]] === degree) {
      minLength = Math.min(minLength, i - firstSeen[nums[i]]) + 1;
    }
  }

  return minLength;
};

console.log(solve([1, 2, 2, 3, 1]));
