// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.For example, flipping[1, 1, 0] horizontally results in [0, 1, 1].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting[0, 1, 1] results in [1, 0, 0].

//   Example 1:

// Input: [[1, 1, 0], [1, 0, 1], [0, 0, 0]]
// Output: [[1, 0, 0], [0, 1, 0], [1, 1, 1]]
// Explanation: First reverse each row: [[0, 1, 1], [1, 0, 1], [0, 0, 0]].
//   Then, invert the image: [[1, 0, 0], [0, 1, 0], [1, 1, 1]]
// Example 2:

// Input: [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]
// Output: [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]
// Explanation: First reverse each row: [[0, 0, 1, 1], [1, 0, 0, 1], [1, 1, 1, 0], [0, 1, 0, 1]].
// Then invert the image: [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]

const flip = matrix => {
  // because want to reverse AND invert
  // only flip the values, if index and corresponding index are the same

  for (let row of matrix) {
    let start = 0;
    let end = row.length;
    while (start <= end) {
      if (start === end) {
        row[start] = row[start] === 1 ? 0 : 1;
        row[end] = row[end] === 1 ? 0 : 1;
      }
      start++;
      end--;
    }
  }

  return matrix;
};

console.log(
  flip([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0]
  ])
);

/*
[
  [1, 0, 0],
  [0, 1, 0],
  [1, 1, 1]
];

*/
