// 118. Pascal's Triangle
// Easy

// 2224

// 130

// Add to List

// Share
// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

function s(numRows) {
  const res = [];
  for (let i = 1; i <= numRows; i++) {
    res.push(Array(i).fill(1));
  }
  for (let i = 2; i < numRows; i++) {
    for (let j = 1; j < res[i].length - 1; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
    }
  }
  return res;
}

console.log(s(5));

// find the array at the row index

function s2(idx) {
  // width of row = idx + 1
  const res = Array(idx + 1).fill(1);
  for (let i = 2; i <= idx; i++) {
    for (let j = i - 1; j >= 1; j--) {
      res[j] += res[j - 1];
    }
  }
  return res;
}

for (let i = 0; i < 6; i++) {
  console.log(s2(i));
}
