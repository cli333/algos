// 169. Majority Element
// Easy

// 4661

// 254

// Add to List

// Share
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function s(nums) {
  // moore's voting algo
  const n = nums.length;
  let majority = nums[0];
  let count = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] === majority) {
      count++;
    } else {
      count--;
      if (!count) {
        majority = nums[i];
        count = 1;
      }
    }
  }
  return majority;

  //   // divide and conquer
  //   // find majority of left and right halves of array
  //   return helper(0, nums.length - 1);

  //   function helper(lo, hi) {
  //     if (lo === hi) return nums[lo];
  //     const mid = Math.floor((lo + hi) / 2);
  //     const leftNum = helper(lo, mid);
  //     const rightNum = helper(mid + 1, hi);
  //     if (leftNum === rightNum) return leftNum;
  //     const leftCount = count(leftNum, lo, hi);
  //     const rightCount = count(rightNum, lo, hi);
  //     return leftCount > rightCount ? leftNum : rightNum;
  //   }

  //   function count(num, lo, hi) {
  //     let res = 0;
  //     for (let i = lo; i <= hi; i++) {
  //       if (nums[i] === num) res++;
  //     }
  //     return res;
  //   }

  // // hash map solution
  //   const map = {};
  //   for (let num of nums) {
  //     map[num] ? map[num]++ : (map[num] = 1);
  //   }
  //   let max = 0;
  //   let res = null;
  //   for (let num in map) {
  //     if (map[num] > max) {
  //       max = map[num];
  //       res = num;
  //     }
  //   }
  //   return { max, res };
}

console.log(s([3, 2, 3]));
console.log(s([2, 2, 1, 1, 1, 2, 2]));
