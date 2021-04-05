// 733. Flood Fill
// Easy

// 1838

// 239

// Add to List

// Share
// An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

// Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

// To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

// At the end, return the modified image.

// Example 1:
// Input:
// image = [[1,1,1],[1,1,0],[1,0,1]]
// sr = 1, sc = 1, newColor = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation:
// From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
// by a path of the same color as the starting pixel are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected
// to the starting pixel.

function s(
  image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  sr = 1,
  sc = 1,
  newColor = 2
) {
  const originalColor = image[sr][sc];
  helper(sr, sc, 1);
  return image;

  function helper(r, c) {
    console.log({ r, c });
    if (
      r < 0 ||
      r > image.length - 1 ||
      c < 0 ||
      c > image[r].length - 1 ||
      image[r][c] !== originalColor
    )
      return;
    image[r][c] = newColor;
    helper(r + 1, c);
    helper(r, c + 1);
    helper(r - 1, c);
    helper(r, c - 1);
  }
}

// console.log(s(), [
//   [2, 2, 2],
//   [2, 2, 0],
//   [2, 0, 1],
// ]);
// console.log(
//   s(
//     [
//       [0, 0, 0],
//       [0, 0, 0],
//     ],
//     0,
//     0,
//     2
//   )
// );
console.log(
  s(
    [
      [0, 0, 0],
      [0, 1, 1],
    ],
    1,
    1,
    1
  )
);
