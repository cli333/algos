// An image is represented by a 2 - D array of integers, each integer representing the pixel value of the image(from 0 to 65535).

// Given a coordinate(sr, sc) representing the starting pixel(row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

// To perform a "flood fill", consider the starting pixel, plus any pixels connected 4 - directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4 - directionally to those pixels(also with the same color as the starting pixel), and so on.Replace the color of all of the aforementioned pixels with the newColor.

// At the end, return the modified image.

//   Example 1:
// Input:
// image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
// sr = 1, sc = 1, newColor = 2
// Output: [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
// Explanation:
// From the center of the image(with position(sr, sc) = (1, 1)), all pixels connected
// by a path of the same color as the starting pixel are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4 - directionally connected
// to the starting pixel.

const flood = (image, x, y, newColor) => {
  let currentColor = image[x][y];
  if (currentColor === newColor) return;
  image[x][y] = newColor;

  if (image[x] && image[x][y + 1] && image[x][y + 1] === currentColor)
    flood(image, x, y + 1, newColor);
  if (image[x] && image[x][y - 1] && image[x][y - 1] === currentColor)
    flood(image, x, y - 1, newColor);
  if (image[x + 1] && image[x + 1][y] && image[x + 1][y] === currentColor)
    flood(image, x + 1, y, newColor);
  if (image[x - 1] && image[x - 1][y] && image[x - 1][y] === currentColor)
    flood(image, x - 1, y, newColor);

  return image;
};

console.log(
  flood(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);

// [
//   [2, 2, 2],
//   [2, 2, 0],
//   [2, 0, 1],
// ];
