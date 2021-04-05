// 689. Maximum Sum of 3 Non-Overlapping Subarrays
// Hard

// 1175

// 76

// Add to List

// Share
// In a given array nums of positive integers, find three non-overlapping subarrays with maximum sum.

// Each subarray will be of size k, and we want to maximize the sum of all 3*k entries.

// Return the result as a list of indices representing the starting position of each interval (0-indexed). If there are multiple answers, return the lexicographically smallest one.

// Example:

// Input: [1,2,1,2,6,7,5,1], 2
// Output: [0, 3, 5]
// Explanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
// We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.

function s(nums, k) {
  //   let a;
  //   let b;
  //   let c;
  //   let max = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + k; j < nums.length; j++) {
  //       for (let l = j + k; l < nums.length; l++) {
  //         const first = sum(nums.slice(i, i + k));
  //         const second = sum(nums.slice(j, j + k));
  //         const third = sum(nums.slice(l, l + k));
  //         const total = first + second + third;
  //         if (total > max) {
  //           max = total;
  //           a = i;
  //           b = j;
  //           c = l;
  //         }
  //       }
  //     }
  //   }
  //   return { max, a, b, c };

  // build array of sums of k length, nums.slice(i-k, i+1)
  let sum = 0;
  const sums = [];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i >= k) sum -= nums[i - k];
    if (i >= k - 1) sums.push(sum);
  }

  // find max array from left
  const left = Array(sums.length).fill(0);
  for (let i = 1; i < sums.length; i++) {
    if (sums[i] > sums[left[i - 1]]) {
      left[i] = i;
    } else {
      left[i] = left[i - 1];
    }
  }

  // find max from right
  const right = Array(sums.length).fill(sums.length - 1);
  for (let i = sums.length - 2; i >= 0; i--) {
    if (sums[i] > sums[right[i + 1]]) {
      right[i] = i;
    } else {
      right[i] = right[i + 1];
    }
  }

  // find middle
  let max = -Infinity;
  const res = [null, null, null];
  for (let i = k; i < sums.length - k; i++) {
    const sum = sums[left[i - 1]] + sums[i] + sums[right[i + 1]];
    if (sum > max) {
      max = sum;
      res[0] = left[i - k];
      res[1] = i - 1;
      res[2] = right[i + k] - 1;
    }
  }

  return res;
}

console.log(s([1, 2, 1, 2, 6, 7, 5, 1], 2));
