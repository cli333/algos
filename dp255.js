// 136. Single Number
// Easy

// 5765

// 189

// Add to List

// Share
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4

function s(nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }
  return Array.from(set)[0];
}

console.log(s([2, 2, 1]));

// 137. Single Number II
// Medium

// 2383

// 396

// Add to List

// Share
// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99

function s2(nums) {
  const a = new Set();
  const b = new Set();
  for (let num of nums) {
    if (b.has(num)) {
      b.delete(num);
      a.delete(num);
    } else if (a.has(num)) {
      b.add(num);
    } else {
      a.add(num);
    }
  }

  return Array.from(a)[0];
}

console.log(s2([2, 2, 3, 2]));
