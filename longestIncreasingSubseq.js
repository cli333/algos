// // Question: Given an array of all integers that may or may not be sorted, determine the length of the longest subsequence that is strictly non - decreasing.

// // What Is A Subsequence ?

// //   A subsequence of an array is a subset of the array that maintains temporal order.

// Example
// [-1, 3, 4, 5, 2, 8]

// At the index 0 I always know that I can have a subsequence of length 1.

// In fact, at all positions the longest non - decreasing subsequence can be at least length 1.

// We then look at index 1, I need to ask myself if the item at index 1 can lengthen the longest subseqence found at index 0.

// We check if 3 is greater than or equal to 1...it is.Great.index 1 can be tacked on but...should I ?

//   The LNDS(longest non - decreasing subsequence) at index 1 is 0.

// The LNDS at index 0 is 1.

// Yeah...it makes sense because if I tack 3 onto the LNDS I found for the subproblem of just[-1] then at index 1 I will also have a LDNS.

// So what we basically do is build a table and ask ourselves these questions all along the way.

// EACH CELL REPRESENTS THE ANSWER TO THE SUBPROBLEM ASKED AGAINST the subsequence from index 0 to index i(including the element at index i).

function solve(nums) {
  const dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }

  return Math.max(...dp);
}

console.log(solve([-1, 3, 4, 5, 2, 2, 2, 2])); // -1,3,4,5
console.log(solve([-1, 3, 4, 5, 2, 8])); // -1,3,4,5,8
