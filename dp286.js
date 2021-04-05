// 11. Container With Most Water
// Medium

// 8828

// 681

// Add to List

// Share
// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

function s(heights) {
  let l = 0;
  let r = heights.length - 1;
  let vol = 0;
  while (l < r) {
    vol = Math.max(vol, Math.min(heights[l], heights[r]) * (r - l));
    if (heights[l] < heights[r]) {
      l++;
    } else {
      r--;
    }
  }
  return vol;
}

console.log(s([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
