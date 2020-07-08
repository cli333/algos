// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order(ie, sorted in ascending order).

// The replacement must be in -place and use only constant extra memory.

// Here are some examples.Inputs are in the left - hand column and its corresponding outputs are in the right - hand column.

// 1, 2, 3 → 1, 3, 2
// 3, 2, 1 → 1, 2, 3
// 1, 1, 5 → 1, 5, 1

function sol(nums) {
  /* 
    find adjacent nums[i] < nums[i+1]
    find j, that is greater than nums[i]
    swap(i, j)
    reverse(i+1, n-1)
  */

  // num of interest is right before the decreasing subarray!!!!
  // a decreasing subarray of nums means that that subarrays has exhausted its permutations
  // SO backtrack

  const n = nums.length;
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    // in a decreasing section, nums[i] > nums[i+1]
    // keep moving left
    i--;
  }

  if (i >= 0) {
    let j = n - 1;
    while (j > i && nums[j] <= nums[i]) {
      j--;
    }

    swap(i, j);
  }

  reverse(i + 1, n - 1);

  return nums;

  //

  function swap(lo, hi) {
    const temp = nums[lo];
    nums[lo] = nums[hi];
    nums[hi] = temp;
  }

  function reverse(lo, hi) {
    while (lo < hi) {
      console.log(nums);
      swap(lo, hi);
      lo++;
      hi--;
    }
  }
}

console.log(sol([1, 2, 3]));
console.log(sol([3, 2, 1]));
console.log(sol([1, 1, 5]));
