// 88. Merge Sorted Array
// Easy

// 3320

// 4962

// Add to List

// Share
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

function s(nums1, m, nums2, n) {
  const len = m + n;
  m--;
  n--;
  for (let i = len - 1; i >= 0; i--) {
    if (n < 0) break;
    if (nums1[m] > nums2[n]) {
      nums1[i] = nums1[m];
      m--;
    } else {
      nums1[i] = nums2[n];
      n--;
    }
  }
  return nums1;
}

console.log(s([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
