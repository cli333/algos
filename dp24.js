// Question: A message containing letters from A - Z is being encoded to numbers using the following mapping: 'A' - 1 'B' - 2 ... 'Z' - 26. Given a non - empty string containing only digits, determine the total number of ways to decode it.

//   Examples:

// 1
// Input: "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L"(12).

// 2
// Input: "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF"(22 6), or "BBF"(2 2 6).

//   Complexities:

// n is the total digits in the input string

// Time: O(n)
// Memoization prunes our recursion tree and we will do a linear amount of work to solve the problem.

//   Space: O(n)
// We will need to store the answer to up to n subproblems that we will need to calculate

// This problem is recursive and can be broken in sub - problems.We start from end of the given digit sequence.We initialize the total count of decodings as 0. We recur for two subproblems.
// 1) If the last digit is non - zero, recur for remaining(n - 1) digits and add the result to total count.
// 2) If the last two digits form a valid character(or smaller than 27), recur for remaining(n - 2) digits and add the result to total count.

function sol(digits, n = digits.length) {
  if (n === 0 || n === 1) return 1;

  // first digit is a zero
  if (digits[0] === "0") return 0;

  let count = 0;

  if (digits[n - 1] > "0") {
    count = sol(digits, n - 1);
  }

  // if second to last digit is 1, "10, 11, 12, 13, 14..."
  // or second to last digits is 2 and last digit is less than 7, "21, 22, 23..., 26"

  if (digits[n - 2] === "1" || (digits[n - 2] === "2" && digits[n - 1] < "7")) {
    count += sol(digits, n - 2);
  }

  return count;
}

function sol2(digits) {
  // only 1 - 26 chars, a-z
  const dp = new Array(digits.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  if (digits[0] === "0") return 0;

  for (let i = 2; i <= digits.length; i++) {
    // if last digit is > 0 && 1 or 2
    if (digits[i - 1] > "0") {
      dp[i] = dp[i - 1];
    }

    // if second to last digit is 1 or 2
    // and last digit is less than 7
    if (
      digits[i - 2] === "1" ||
      (digits[i - 2] === "2" && digits[i - 1] < "7")
    ) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[dp.length - 1];
}

console.log(sol("111"));
console.log(sol2("27")); //ans: 1,  can only have 2 and 7
