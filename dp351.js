// 84. Largest Rectangle in Histogram
// Hard

// 5531

// 111

// Add to List

// Share
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:

// Input: heights = [2,4]
// Output: 4

function s(heights) {
  const lefts = Array(heights.length);
  let stack = [];
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
      stack.pop();
    }
    // stack[...] + 1, because the last index is the smaller than the current height, so want 1 after it
    lefts[i] = stack.length ? stack[stack.length - 1] + 1 : 0;
    stack.push(i);
  }

  stack = [];
  const rights = Array(heights.length);
  for (let i = heights.length - 1; i >= 0; i--) {
    while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
      stack.pop();
    }
    // stack[...] - 1, because the last index is the smaller than the current height, so want 1 before it
    rights[i] = stack.length ? stack[stack.length - 1] - 1 : heights.length - 1;
    stack.push(i);
  }
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
    max = Math.max(max, heights[i] * (rights[i] - lefts[i] + 1));
  }
  return max;
}

console.log(s([2, 1, 5, 6, 2, 3]));
