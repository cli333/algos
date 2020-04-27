// Given an array of integers, 1 ≤ a[i]≤ n(n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime ?

//   Example :
//   Input:
// [4, 3, 2, 7, 8, 2, 3, 1]

// Output:
// [2, 3]

const solve = (nums) => {
  // all numbers are valid indices in the array, -1
  // if the current number isn't negative set it to negative
  // if the current number is negative, push onto the output arr

  // * only checks for two occurrences of each number
  // when find a third number, the number will be reset to a positive number

  const out = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      out.push(index + 1);
    }
    nums[index] = -nums[index];
  }

  return out;
};

console.log(solve([4, 3, 2, 7, 8, 2, 3, 1])); // [2, 3]
