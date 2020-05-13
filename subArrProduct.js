// Your are given an array of positive integers nums.

// Count and print the number of(contiguous) subarrays where the product of all the elements in the subarray is less than k.

//   Example 1:
// Input: nums = [10, 5, 2, 6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
// Note that[10, 5, 2] is not included as the product of 100 is not strictly less than k.

const solve = (nums, k) => {
  // const out = [];
  // let start = 0;
  // let end = 1;

  // while (start < nums.length) {
  //   while (nums[end] && mult(nums.slice(start, end)) < k) {
  //     out.push(nums.slice(start, end));
  //     end++;
  //   }

  //   start++;
  //   end = start + 1;
  // }

  // return out;

  let prod = 1;
  let res = 0;

  let left = 0;
  let right = 0;

  while (right < nums.length) {
    prod *= nums[right];

    while (prod >= k) {
      // if prod >= k
      // shrink window's left boundary and reduce the prod
      prod /= nums[left];
      left++;
    }

    // we add (right - left) to 'res' because all individual elements in that subarray are also subarrays whose products are less than k
    // +1 is the additional element that was added to the window
    // because element is also an subarray whose product is less than k
    res += right - left + 1;
    right++;
  }

  return res;
};

// function mult(nums) {
//   return nums.reduce((a, b) => a * b, 1);
// }

console.log(solve([10, 5, 2, 6], 100));
