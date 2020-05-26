// Given a character, check if it represents an odd digit, an even digit or not a digit at all.

//   Example

// For symbol = '5', the output should be characterParity(symbol) = "odd";
// For symbol = '8', the output should be characterParity(symbol) = "even";
// For symbol = 'q', the output should be characterParity(symbol) = "not a digit".

//   Hints

// isNaN()
// parseInt()

// Input / Output

// [execution time limit]5 seconds(ts)
// [input] char symbol
// [output] string

function solve(number) {
  number = parseInt(number);
  if (Number.isNaN(number)) return "not a digit";

  return number % 2 === 0 ? "even" : "odd";
}

console.log(solve("5"));
console.log(solve("6"));
console.log(solve("g"));
