// 80. Remove Duplicates from Sorted Array II
// Medium

// 1787

// 778

// Add to List

// Share
// Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

// Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer, but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

// Example 1:

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3]
// Explanation: Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively. It doesn't matter what you leave beyond the returned length.

function s(nums) {
  let n = nums.length;
  if (n < 3) return n;
  let i = 2;
  for (let j = 2; j < n; j++) {
    if (nums[j] !== nums[i - 2]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}

console.log(s([1, 1, 1, 2, 2, 3]));
