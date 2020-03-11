// given 2 arrs without duplicates, nums1 and nums2, where nums1 is a subset of nums2
// find all the next greater numbers for nums1's elements in the corresponding places of nums2

// the next gerater number of a number in nums1 is the first greater number to its right in nums2
// if not exist, return -1

// nums1 = [4,1,2], nums2 = [1,3,4,2]
// output = [-1,3,-1]

const nextGreater = (nums1, nums2) => {
  // build hash of nums2, of each nums next greater num
  const hash = nums2.reduce((acc, cur, index, array) => {
    acc[cur] =
      array[index + 1] && array[index + 1] > array[index]
        ? array[index + 1]
        : -1;
    return acc;
  }, {});

  return nums1.map(num => hash[num]);
};

console.log(nextGreater([4, 1, 2], [1, 3, 4, 2]));
