// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

//   Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

//   Hints

// None

// Input / Output

// [time limit]4000ms(js)
// [input] array.integer inputArray

// An array of integers containing at least two elements.

// Guaranteed constraints:

// 2 ≤ inputArray.length ≤ 10, -1000 ≤ inputArray[i]≤ 1000.

// [output] integer

// The largest product of adjacent elements.

function solve(nums) {
  // let max = 0;
  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[i - 1] * nums[i] > max) {
  //     max = nums[i - 1] * nums[i];
  //   }
  // }
  // return max;

  // return nums.reduce((max, _, idx, arr) => {
  //   if (idx === 0 || arr[idx] * arr[idx - 1] < max) return max;
  //   return arr[idx] * arr[idx - 1];
  // }, 0);

  return sol(nums, 0);

  function sol(nums, i, max = 0) {
    if (!nums[i]) return max;
    if (i === 0) return sol(nums, i + 1, max);
    max = Math.max(max, nums[i] * nums[i - 1]);
    return sol(nums, i + 1, max);
  }
}

console.log(solve([3, 6, -2, -5, 7, 3])); // 21
