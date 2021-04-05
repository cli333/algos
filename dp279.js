// 239. Sliding Window Maximum
// Hard

// 5348

// 220

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

function s(nums, k) {
  const res = [];
  const q = [];
  for (let i = 0; i < nums.length; i++) {
    // create a monotonic queue
    // new num > last num in q, pop from q
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    // add the num index to the q
    q.push(i);
    // if the first element in the q is outside the window size k, remove it
    if (q[0] === i - k) {
      q.shift();
    }
    if (i >= k - 1) {
      res.push(nums[q[0]]);
    }
  }
  return res;
}

console.log(s([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7]);
