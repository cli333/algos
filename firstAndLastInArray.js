// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

//   Example 1:

// Input: nums = [5, 7, 7, 8, 8, 10], target = 8
// Output: [3, 4]
// Example 2:

// Input: nums = [5, 7, 7, 8, 8, 10], target = 6
// Output: [-1, -1]

const find = (nums, target) => {
  // array is SORTED!!
  // logN solution must be binary search!!
  const result = [];
  result[0] = findStart(nums, target);
  result[1] = findEnd(nums, target);

  function findStart(nums, target) {
    let index = -1;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
      let mid = start + Math.floor((end - start) / 2);
      if (nums[mid] >= target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
      if (nums[mid] === target) index = mid;
    }

    return index;
  }

  function findEnd(nums, target) {
    let index = -1;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
      let mid = start + Math.floor((end - start) / 2);
      if (nums[mid] <= target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
      if (nums[mid] === target) index = mid;
    }

    return index;
  }

  return result;
};

console.log(find([5, 7, 7, 8, 8, 10], 8));
console.log(find([5, 7, 7, 8, 8, 10], 6));
