// 239. Sliding Window Maximum
// Hard

// 5323

// 219

// Add to List

// Share
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Example 3:

// Input: nums = [1,-1], k = 1
// Output: [1,-1]

function s(nums, k) {
  const res = [];
  const q = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(q);
    while (q.length && nums[i] > q[q.length - 1]) q.pop();
    q.push(nums[i]);
    if (i >= k - 1) {
      res.push(q[0]);
      if (nums[i - k + 1] === q[0]) q.shift();
    }
  }
  return res;
}

console.log(s([1, 3, -1, -3, 5, 3, 6, 7]), [3, 3, 5, 5, 6, 7]);
