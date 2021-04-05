// Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

// Example 1:

// Input: matrix = [[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]]
// Output: 6
// Explanation: The maximal rectangle is shown in the above picture.
// Example 2:

// Input: matrix = []
// Output: 0
// Example 3:

// Input: matrix = [[0]]
// Output: 0
// Example 4:

// Input: matrix = [[1]]
// Output: 1
// Example 5:

// Input: matrix = [[0,0]]
// Output: 0
function maxAreaInHistograms(heights) {
  const n = heights.length;
  const lefts = Array(n);
  const rights = Array(n);
  const stack = [];

  for (let i = 0; i < n; i++) {
    if (!stack.length) {
      lefts[i] = i;
    } else {
      while (stack.length && stack[stack[stack.length - 1]] >= heights[i]) {
        stack.pop();
      }
      lefts[i] = !stack.length ? 0 : stack[stack.length - 1] + 1;
    }

    stack.push(i);
  }

  while (stack.length) {
    stack.pop();
  }

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
  for (let i = 0; i < n; i++) {
    max = Math.max(max, (rights[i] - lefts[i] + 1) * heights[i]);
  }
  return max;
}

function s(matrix) {
  // convert matrix to an array of histograms
  // find max rectangular area for each array
  const rows = matrix.length;
  const cols = matrix[0].length;

  const histograms = [];
  histograms.push(matrix[0]);

  for (let r = 1; r < rows; r++) {
    const lastHistogram = histograms[histograms.length - 1];
    const curHistogram = matrix[r];
    const newHistogram = [];
    for (let c = 0; c < cols; c++) {
      curHistogram[c]
        ? (newHistogram[c] = curHistogram[c] + lastHistogram[c])
        : (newHistogram[c] = curHistogram[c]);
    }
    histograms.push(newHistogram);
  }

  let max = 0;
  for (let histogram of histograms) {
    max = Math.max(max, maxAreaInHistograms(histogram));
  }
  return max;
}

console.log(
  s([
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0],
  ]),
  6
);

console.log(s([[0, 0]]), 0);
