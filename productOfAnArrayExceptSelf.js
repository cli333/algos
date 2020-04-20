// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

//   Example:

// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

const solve = (nums) => {
  // SOLUTION #1, o(n) space and time

  // const out = [];

  // const lefts = [];
  // const rights = [];

  // lefts[0] = 1;
  // rights[nums.length - 1] = 1;

  // for (let i = 1; i < nums.length; i++) {
  //   lefts[i] = nums[i - 1] * lefts[i - 1];
  // }

  // for (let i = nums.length - 2; i >= 0; i--) {
  //   rights[i] = nums[i + 1] * rights[i + 1];
  // }

  // for (let i = 0; i < nums.length; i++) {
  //   out[i] = lefts[i] * rights[i];
  // }

  // return out;

  //

  // SOLUTION #2

  const out = [];

  out[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    out[i] = nums[i - 1] * out[i - 1];
  }

  // have a variable, multiply the variable by the current element for each i
  let r = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    out[i] = out[i] * r;
    r *= nums[i];
  }

  return out;
};

console.log(solve([1, 2, 3, 4]));
