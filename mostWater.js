// give an arr of integers representing various heights
// find the 'max area'
// the value of the number is the height
// the index of the number is the 'x position'

// 1       1
// 1   1   1
// 1   1   1   1
// 1   1   1   1
// 1   1   1   1

// ans => 15

const most = heights => {
  // use 2 pointers
  let start = 0;
  let end = heights.length - 1;
  let maxArea = 0;

  while (start < end) {
    if (heights[start] < heights[end]) {
      let newArea = heights[start] * (end - start);
      maxArea = Math.max(maxArea, newArea);
      start++;
    } else {
      let newArea = heights[end] * (end - start);
      maxArea = Math.max(maxArea, newArea);
      end--;
    }
  }

  return maxArea;
};
