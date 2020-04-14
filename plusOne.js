// Given a non - empty array of digits representing a non - negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

//   Example 1:

// Input: [1, 2, 3]
// Output: [1, 2, 4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4, 3, 2, 1]
// Output: [4, 3, 2, 2]
// Explanation: The array represents the integer 4321.

const plus = (nums) => {
  nums[nums.length - 1]++;
  let remainder = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    remainder = Math.floor(nums[i] / 10);

    if (nums[i] > 9 && !nums[i - 1]) {
      nums[i] = nums[i] % 10;
      nums.unshift(remainder);
      break;
    }

    if (nums[i] > 9) {
      nums[i] = nums[i] % 10;
      nums[i - 1] += remainder;
    }

    if (remainder === 0) break;
  }

  return nums;
};

const plus2 = (nums) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < 9) {
      nums[i]++;
      break;
    } else if (nums[i] === 9 && !nums[i - 1]) {
      nums[i] = 0;
      nums.unshift(1);
    } else if (nums[i] === 9) {
      nums[i] = 0;
    }
  }

  return nums;
};

console.log(plus([1, 2, 3]));

console.log(plus([1, 2, 9]));

console.log(plus([9, 9, 9]));

console.log(plus2([1, 2, 3]));

console.log(plus2([1, 2, 9]));

console.log(plus2([9, 9, 9]));
