// 84. Largest Rectangle in Histogram
// Hard

// 5217

// 104

// Add to List

// Share
// Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

// Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

// The largest rectangle is shown in the shaded area, which has area = 10 unit.

// Example:

// Input: [2,1,5,6,2,3]
// Output: 10

// Example 1:

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:

// Input: heights = [2,4]
// Output: 4

function s(heights) {
  // o(n) time and space
  const n = heights.length;
  const stack = [];
  const lefts = Array(n);
  const rights = Array(n);

  // find left limits
  for (let i = 0; i < n; i++) {
    if (!stack.length) {
      // stack is empty, this is the leftmost bar
      lefts[i] = i;
    } else {
      while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
        // keep popping while the top of the stack is greater than the current height
        // need to find the smallest bar to the left of the current height
        stack.pop();
      }
      lefts[i] = !stack.length ? 0 : stack[stack.length - 1] + 1;
    }

    // add current height to stack
    stack.push(i);
  }

  while (stack.length) {
    stack.pop();
  }
  // find right limits
  for (let i = n - 1; i >= 0; i--) {
    if (!stack.length) {
      rights[i] = i;
    } else {
      while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
        stack.pop();
      }
      rights[i] = !stack.length ? n - 1 : stack[stack.length - 1] - 1;
    }

    stack.push(i);
  }

  let max = 0;
  // find areas
  for (let i = 0; i < n; i++) {
    max = Math.max(max, (rights[i] - lefts[i] + 1) * heights[i]);
  }

  return { lefts, rights, max };
}

console.log(s([2, 1, 5, 6, 2, 3]), 10);
// console.log(s([2, 4]), 4);
