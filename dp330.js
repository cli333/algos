// 75. Sort Colors
// Medium

// 5078

// 289

// Add to List

// Share
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
// Example 3:

// Input: nums = [0]
// Output: [0]
// Example 4:

// Input: nums = [1]
// Output: [1]

function s(nums) {
  // two pass, o(n) space
  const map = {};
  for (let n of nums) {
    map[n] = map[n] + 1 || 1;
  }
  let i = 0;
  for (let color in map) {
    while (map[color]) {
      map[color]--;
      nums[i] = Number(color);
      i++;
    }
  }
  return nums;
}

console.log(s([2, 0, 2, 1, 1, 0]), [0, 0, 1, 1, 2, 2]);
console.log(s([2, 0, 1]), [0, 1, 2]);

function s2(nums) {
  // one pass solution
  // o(1) space
  // three pointers
  let p0 = 0;
  let p2 = nums.length - 1;
  let p = 0;
  while (p <= p2) {
    if (nums[p] === 2) {
      swap(p, p2);
      p2--;
    } else if (nums[p] === 0) {
      swap(p, p0);
      p0++;
      p++;
    } else {
      p++;
    }
  }
  return nums;

  function swap(a, b) {
    [nums[a], nums[b]] = [nums[b], nums[a]];
  }
}

console.log(s2([2, 0, 2, 1, 1, 0]), [0, 0, 1, 1, 2, 2]);
console.log(s2([2, 0, 1]), [0, 1, 2]);
