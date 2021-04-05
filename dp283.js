// 4. Median of Two Sorted Arrays
// Hard

// 9445

// 1455

// Add to List

// Share
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

function s(a, b) {
  // median is middle num in odd length array
  // median is average of middle two nums

  /* 
  find partition point such that a2 < a3 && b2 < b3 && a2 < b3 && b2 < a3
  start with smaller array
  */

  if (a.length > b.length) return s(b, a);

  const x = a.length;
  const y = b.length;

  let l = 0;
  let r = x;
  while (l <= r) {
    // find mid point of x
    const partX = Math.floor((l + r) / 2);
    // the partition of y will be the sum of midpoint(x + y) - partX
    // subtract partX because want number of nums in lefts(leftX + leftY) === number of nums in rights(rightX + rightY)
    const partY = Math.floor((x + y + 1) / 2) - partX;

    // if partX === 0 nothing to left so use -Infinity
    // if partX === x, nothing on right side so use Infinity
    const maxLeftX = !partX ? -Infinity : a[partX - 1];
    const minRightX = partX === x ? Infinity : a[partX];

    const maxLeftY = !partY ? -Infinity : b[partY - 1];
    const minRightY = partY === y ? Infinity : b[partY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      // found correct partition
      // if even length, get average
      // if odd length, get max(lefta, leftb)
      if ((x + y) % 2 === 0) {
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        );
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      r = partX - 1;
    } else {
      l = partX + 1;
    }
  }
}

console.log(s([1, 3], [2]));
console.log(s([1, 2], [3, 4]));
