/*
    given a string str of digits
    create a function that returns how many ways we can decode it
    knowing that 1 = a, 2 = b, ... z = 26
*/

function s(str, i = 0) {
  // o(2^n), explore two possibilities
  // o(n) space, worse case, reach the end of the string taking only one digit at a time, so o(n) stack space

  const n = str.length;
  // reached a zero
  if (i < n && str[i] === "0") return 0;
  // reached out of bounds, found valid way
  if (i >= n - 1) return 1;
  // if next two digits in the string are valid (<= 26 and >= 10), EXPLORE taking one digit and moving along AND taking two digits and moving along
  if (str[i] + str[i + 1] >= 10 && str[i] + str[i + 1] <= 26)
    return s(str, i + 1) + s(str, i + 2);
  // else keep moving along
  return s(str, i + 1);
}

console.log(s("0"), 0);
console.log(s("11"), 2); // 'aa' or 'k' => 2 possibilities
console.log(s("6324120129"), 4);

function s2(str) {
  const n = str.length;
  if (n === 0 || str[0] == "0") return 0;
  let beforePrevious = 1;
  let previous = 1;
  for (let i = 1; i < n; i++) {
    let current = 0;
    if (str[i] !== "0") {
      current += previous;
    }
    if (str[i - 1] + str[i] >= 10 && str[i - 1] + str[i] <= 26) {
      current += beforePrevious;
    }
    beforePrevious = previous;
    previous = current;
  }
  return previous;
}

console.log(s2("0"), 0);
console.log(s2("11"), 2); // 'aa' or 'k' => 2 possibilities
console.log(s2("6324120129"), 4);

function s3(str) {
  const n = str.length;
  const dp = Array(n).fill(0);
  if (str[0] === "0") {
    dp[0] = 0;
  } else {
    dp[0] = 1;
  }

  for (let i = 1; i < n; i++) {
    // cur number not a zero add the previous element
    if (str[i] !== "0") dp[i] += dp[i - 1];
    // 10 >= prev + cur number <= 26, add the result at i - 2
    if (str[i - 1] + str[i] <= 26 && str[i - 1] + str[i] >= 10)
      dp[i] += dp[i - 2];
  }
  return dp;
}

console.log(s3("0"), 0);
console.log(s3("11"), 2); // 'aa' or 'k' => 2 possibilities
console.log(s3("6324120129"), 4);
