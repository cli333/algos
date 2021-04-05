// 128. Longest Consecutive Sequence
// Hard

// 4674

// 226

// Add to List

// Share
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

function s(nums) {
  const set = new Set();
  for (let num of nums) {
    set.add(num);
  }

  let res = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let count = 0;
      for (let n = num; set.has(n); n++) {
        count++;
      }
      res = Math.max(res, count);
    }
  }

  return res;
}

console.log(s([100, 4, 200, 1, 3, 2]));
