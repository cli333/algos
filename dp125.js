// You have 4 cards each containing a number from 1 to 9. You need to judge whether they could operated through *, /, +, -, (, ) to get the value of 24.

// Example 1:
// Input: [4, 1, 8, 7]
// Output: True
// Explanation: (8 - 4) * (7 - 1) = 24
// Example 2:
// Input: [1, 2, 1, 2]
// Output: False

function sol(nums) {
  return helper(nums.slice());

  function helper(a) {
    if (a.length === 1) {
      return a[0] === 24;
    }

    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        const num1 = a[i];
        const num2 = a[j];

        for (let d of compute(num1, num2)) {
          const b = a.slice();
          b.splice(j, 1);
          b.splice(i, 1);
          b.push(d);
          if (helper(b)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  function compute(a, b) {
    return [a * b, a - b, b - a, a + b, Math.floor(a / b), Math.floor(b / a)];
  }
}

console.log(sol([4, 1, 8, 7]), true);
console.log(sol([1, 2, 1, 2]), false);
