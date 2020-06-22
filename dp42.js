// basic calculator
// evaluate an expression, eg. (3 + (4-2)) * 2 = 10

function sol(s) {
  const q = [];
  for (let c of s.split("")) {
    if (c !== " ") {
      q.push(c);
    }
  }
  // placeholder
  q.push(" ");
  return helper(q);

  function helper() {
    let num = 0;
    let prev = 0;
    let sum = 0;
    let prevOp = "+";

    while (q.length) {
      const c = q.shift();
      if (c >= "0" && c <= "9") {
        num = num * 10 + Number(c);
      } else if (c === "(") {
        num = helper(q);
      } else {
        switch (prevOp) {
          case "+":
            sum += prev;
            prev = num;
            break;
          case "-":
            sum += prev;
            prev = -num;
            break;
          case "*":
            prev *= num;
            break;
          case "/":
            prev /= num;
            break;
        }
      }

      if (c === ")") break;
      prevOp = c;
      num = 0;
    }

    return prev + sum;
  }
}

console.log(sol("(3 + (4 - 2)) * 2")); // 10
console.log(sol("(6 + (4 * 2)) / (4 - 2)")); // 7
