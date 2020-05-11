// Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order,
// then the whole array will be sorted in ascending order, too.

// You need to find the shortest such subarray and output its length.

//   Example 1:
// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort[6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
//   Note:
// Then length of the input array is in range[1, 10, 000].
// The input array may contain duplicates, so ascending order here means <=.

const solve = (nums) => {
  // #1, use a sorted arr
  // extra space, o(N)

  // const sorted = nums.slice().sort((a, b) => (a < b ? -1 : 1));
  // let start = 0;
  // let end = 0;

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== sorted[i]) {
  //     start = i;
  //     break;
  //   }
  // }

  // for (let i = nums.length - 1; i >= 0; i--) {
  //   if (nums[i] !== sorted[i]) {
  //     end = i;
  //     break;
  //   }
  // }

  // return nums.slice(start, end + 1);

  // #2

  let flag = false;
  let min = Infinity;
  // find the min
  for (let i = 0; i < nums.length; i++) {
    // next el < prev el = unsorted, so set flag to true
    if (nums[i] < nums[i - 1]) flag = true;
    // if flag === true, find the min
    if (flag) min = Math.min(min, nums[i]);
  }
  flag = false;
  let max = 0;
  // go backwards, find  the max
  for (let i = nums.length - 2; i >= 0; i--) {
    // next el > prev el = unsorted, so set flag to true
    if (nums[i] > nums[i + 1]) flag = true;
    // if flag === true, find the min
    if (flag) max = Math.max(max, nums[i]);
  }
  // set left, right pointers
  let l = 0;
  let r = nums.length - 1;
  for (l; l < nums.length; l++) {
    // if the found min is less than the current number, we've found the index where it should be
    if (min < nums[l]) break;
  }
  for (r; r >= 0; r--) {
    // if the found max is greater than the current number, we've found the correct index
    if (max > nums[r]) break;
  }
  // return the subarray
  return nums.slice(l, r + 1);
};

console.log(solve([2, 6, 4, 8, 10, 9, 15]));
