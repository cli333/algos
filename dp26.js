// Question: Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.

// Example:

// Input:
// nums = [4, 3, 2, 3, 5, 2, 1]
// k = 4

// Output:
// true

// Explanation:
// It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.

function sol(nums, k) {
  const totalSum = nums.reduce((acc, val) => acc + val, 0);
  const targetSubsum = totalSum / k;

  if (k === 0 || totalSum % k !== 0) return false;

  // startIdx, array of booleans(indices of numbers that have been used), number of buckets, sum of current bucket
  return canPartition(0, Array(nums.length).fill(false), k, 0);

  function canPartition(start, used, k, inProgressBucketSum) {
    //     Time Complexity: O(k ^ { N- k} k!) O(k
    // N−k
    //  k!), where NN is the length of nums, and kk is as given.As we skip additional zeroes in groups, naively we will make O(k!)O(k!) calls to search, then an additional O(k ^ { N- k}) O(k
    // N−k
    //     ) calls after every element of groups is nonzero.

    // Space Complexity: O(N)O(N), the space used by recursive calls to search in our call stack.

    // if all but the last bucket are filled with the correct sum, then the remaining bucket can definitely be filled correctly
    // nums = [4, 3, 2, 3, 5, 2, 1]
    // eg subsum = 5, [1,4], [2,3], [2,3], [...whatever is left in nums] === [5]
    if (k === 1) return true;

    // current bucket sum === target
    // move to next bucket
    if (inProgressBucketSum === targetSubsum) {
      return canPartition(0, used, k - 1, 0);
    }

    for (let i = start; i < nums.length; i++) {
      // if number not used
      if (!used[i]) {
        // CHOOSE THE NUMBER
        // select the num from the nums
        // and set corresponding idx in used arr to true
        used[i] = true;
        if (canPartition(i + 1, used, k, inProgressBucketSum + nums[i])) {
          return true;
        }
        // UNCHOOSE THE NUMBER
        used[i] = false;
      }
    }
    return false;
  }
}

console.log(sol([4, 3, 2, 3, 5, 2, 1], 4)); // 20 = 4 buckets of 5, true
console.log(sol([4, 3, 2, 3, 5, 2, 1], 5)); // 20 = 5 buckets of 4, false
