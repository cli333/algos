// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares
// of its digits, and repeat the process until the number equals 1(where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

//   Example:

//   Input: 19
// Output: true

// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

function solve(n) {
  // const digits = getDigits(n);
  // const res = squareAndSum(digits);

  // console.log({ seen, res });

  // if (res === 1) {
  //   return true;
  // } else if (seen[res]) {
  //   return false;
  // } else {
  //   seen[res] = true;
  //   return solve(res, seen);
  // }

  const seen = {};
  while (n !== 1) {
    let current = n;
    let sum = 0;

    while (current !== 0) {
      sum += (current % 10) * (current % 10);
      current = Math.floor(current / 10);
    }
    if (seen[sum]) return false;
    seen[sum] = true;
    n = sum;
  }

  return true;
}

// function getDigits(n) {
//   let num = n;
//   const out = [];
//   let pow = 0;
//   while (num / 10 >= 1) {
//     num /= 10;
//     pow++;
//   }
//   num = n;
//   pow = Math.pow(10, pow);
//   while (pow >= 1) {
//     const digit = Math.floor(num / pow);
//     out.push(digit);
//     num -= digit * pow;
//     pow /= 10;
//   }
//   return out;
// }

// function squareAndSum(nums) {
//   return nums.map((num) => num * num).reduce((acc, val) => acc + val);
// }

console.log(solve(19)); // true
console.log(solve(25));
