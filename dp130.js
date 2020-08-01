// Given n non - negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

// Above is a histogram where width of each bar is 1, given height = [2, 1, 5, 6, 2, 3].

// The largest rectangle is shown in the shaded area, which has area = 10 unit.

//   Example:

// Input: [2, 1, 5, 6, 2, 3]
// Output: 10

function sol(heights) {
  // maintain increasing stack
  // all bars between i and j should be greater than or equal to heights[j]
  const n = heights.length;
  const stack = [];
  stack.push(-1);

  let max = 0;
  for (let i = 0; i < n; i++) {
    // make sure the stack is increasing
    // last two elements will the left and right borders of the current rectangle
    while (
      stack[stack.length - 1] !== -1 &&
      heights[stack[stack.length - 1]] >= heights[i]
    ) {
      // pop left borders while >= the next right border OR heights[i]
      max = Math.max(
        max,
        heights[stack.pop()] * (i - stack[stack.length - 1] - 1)
      );
    }

    // push the index of the right border
    stack.push(i);
  }

  while (stack[stack.length - 1] !== -1) {
    // after get increasing stack
    // calculate the area for current height * width(n = end of the rectangle - last start index of increasing region)
    max = Math.max(
      max,
      heights[stack.pop()] * (n - stack[stack.length - 1] - 1)
    );
  }

  return max;
}

console.log(sol([2, 1, 5, 6, 2, 3]), 10);
