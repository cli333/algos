// 167. Two Sum II - Input array is sorted
// Easy

// 2427

// 695

// Add to List

// Share
// Given an array of integers numbers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

// You may assume that each input would have exactly one solution and you may not use the same element twice.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]

function s(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    if (numbers[l] + numbers[r] === target) {
      return [l + 1, r + 1];
    } else if (numbers[l] + numbers[r] > target) {
      r--;
    } else {
      l++;
    }
  }

  //   const map = {};
  //   for (let i = 0; i < numbers.length; i++) {
  //     const complement = target - numbers[i];
  //     if (complement in map) return [i, map[complement]];
  //     map[numbers[i]] = i;
  //   }
  //   return null;

  //   for (let i = 0; i < numbers.length; i++) {
  //     for (let j = i + 1; j < numbers.length; j++) {
  //       if (numbers[i] + numbers[j] === target) return [i, j];
  //     }
  //   }
}

console.log(s([2, 7, 11, 15], 9));
console.log(s([2, 7, 11, 15], 9));
