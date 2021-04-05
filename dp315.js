// 42. Trapping Rain Water
// Hard

// 10552

// 159

// Add to List

// Share
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

function s(height) {
  // find tallest left boundary of each bar
  // find tallest right boudary of each bar
  // (water lvl - block height) * width = water trapped for each block
  // need at least 3 blocks
  if (height.length < 3) return 0;
  const left = Array(height.length).fill(0);
  let leftMax = 0;
  for (let i = 0; i < height.length; i++) {
    leftMax = Math.max(leftMax, height[i]);
    left[i] = leftMax;
  }

  const right = Array(height.length).fill(0);
  let rightMax = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, height[i]);
    right[i] = rightMax;
  }
  let v = 0;
  // skip first and last index, they cannot hold water
  for (let i = 1; i < height.length - 1; i++) {
    v += (Math.min(left[i], right[i]) - height[i]) * 1;
  }
  return v;
}

// console.log(s([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
console.log(s([4, 2, 0, 3, 2, 5]), 9);

function s2(height) {
  if (height.length < 3) return 0;
  let l = 1;
  let r = height.length - 2;
  let ml = height[0];
  let mr = height[height.length - 1];
  let v = 0;
  while (l <= r) {
    if (ml < mr) {
      // left boundary shorter than right boundary
      // sum up from left
      if (height[l] >= ml) {
        ml = height[l];
      } else {
        v += ml - height[l];
      }
      l++;
    } else {
      // right boundary shorter than left boundary
      if (height[r] >= mr) {
        mr = height[r];
      } else {
        v += mr - height[r];
      }
      r--;
    }
  }
  return v;
}

console.log(s2([4, 2, 0, 3, 2, 5]), 9);
