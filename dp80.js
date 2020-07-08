// Given two non - negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

//   Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"

function sol(num1, num2) {
  const n1 = num1.length;
  const n2 = num2.length;
  // result will have max digits n1 + n2
  const res = Array(n1 + n2).fill(0);

  for (let j = n2 - 1; j >= 0; j--) {
    for (let i = n1 - 1; i >= 0; i--) {
      const product = num1[i] * num2[j];
      const temp = res[i + j + 1] + product;
      res[i + j + 1] = temp % 10;
      res[i + j] = res[i + j] + Math.floor(temp / 10);
    }
  }

  let out = "";
  let seen = false;
  for (let c of res) {
    if (c == 0 && !seen) continue;
    out += c;
    seen = true;
  }

  return out;
}

console.log(sol("123", "567"));
console.log(123 * 567);
