// Write a function that returns the sum of two numbers.
// Write a function that returns the sum of all numbers regardless of # of params.

//   Example

// For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.

// Hints

// Arithmetic Operators
// Rest Operator
// forEach()

// Input / Output

// [time limit]4000ms(js)
// [input] integer param1

// Guaranteed constraints:

// -100 ≤ param1 ≤ 1000.

// [input] integer param2

// Guaranteed constraints: -100 ≤ param2 ≤ 1000.

// [output] integer

// The sum of the two inputs.

function solve(first, ...rest) {
  if (!first) return 0;
  return first + solve(rest[0], ...rest.slice(1));
}

console.log(solve(1, 5, 15));

console.log(solve(1));