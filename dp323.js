// 59. Spiral Matrix II
// Medium

// 1591

// 127

// Add to List

// Share
// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// Example 1:

// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Example 2:

// Input: n = 1
// Output: [[1]]

function s(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(Array(n));
  }
  let rowBegin = 0;
  let rowEnd = n - 1;
  let colBegin = 0;
  let colEnd = n - 1;
  let i = 1;
  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    for (let c = colBegin; c <= colEnd; c++) {
      res[rowBegin][c] = i;
      i++;
    }
    rowBegin++;
    for (let r = rowBegin; r <= rowEnd; r++) {
      res[r][colEnd] = i;
      i++;
    }
    colEnd--;
    for (let c = colEnd; c >= colBegin; c--) {
      res[rowEnd][c] = i;
      i++;
    }
    rowEnd--;
    for (let r = rowEnd; r >= rowBegin; r--) {
      res[r][colBegin] = i;
      i++;
    }
    colBegin++;
  }
  return res;
}

console.log(s(3));
console.log(s(4));
console.log(s(2));
