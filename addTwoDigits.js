// You are given a two - digit integer n.Return the sum of its digits.

//   Example

// For n = 29, the output should be addTwoDigits(n) = 11.

// Hint

// split()
// parseInt()
// toString()
// reduce()

// Input / Output

// [execution time limit]4 seconds(js)

// [input] integer n

// A positive two - digit integer.

// Guaranteed constraints:

// 10 ≤ n ≤ 99.

// [output] integer

// The sum of the first and second digits of the input number.

function solve(n) {
  // solve for any number

  // find the number of digits
  // while the power >= 10
  // power /= 10, sum += floor(N/power), n -= power * floor(N/power)

  const d = digits(n);
  let power = Math.pow(10, d);
  let sum = 0;

  while (power >= 10) {
    sum += Math.floor(n / power);
    n -= power * Math.floor(n / power);
    power /= 10;
  }

  // current sum + remaining digit in ones place
  return sum + n;

  function digits(n) {
    let res = 0;
    while (n / 10 >= 1) {
      n /= 10;
      res++;
    }
    return res;
  }
}

console.log(solve(29)); // 11
console.log(solve(2929)); // 22
console.log(solve(292929)); // 33
console.log(solve(101)); // 2
