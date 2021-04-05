// 179. Largest Number
// Medium

// 2877

// 308

// Add to List

// Share
// Given a list of non-negative integers nums, arrange them such that they form the largest number.

// Note: The result may be very large, so you need to return a string instead of an integer.

// Example 1:

// Input: nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"
// Example 3:

// Input: nums = [1]
// Output: "1"
// Example 4:

// Input: nums = [10]
// Output: "10"

function s(nums) {
  nums.sort(mySort);
  return nums.join("");
}

function mySort(a, b) {
  const A = String(a);
  const B = String(b);
  const AB = A + B;
  const BA = B + A;
  if (AB > BA) {
    return -1;
  } else {
    return 1;
  }
}

console.log(mySort(30, 3));
console.log(s([3, 30, 34, 5, 9]));
