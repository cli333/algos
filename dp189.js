/* 
given a positive number k and a string num that represents a positive integer
find the smallest number that can be made by removing k digits from num
*/

function s(num, k) {
  const stack = [];
  for (let digit of num.split("")) {
    // if current digit is less than the last digit in the stack, pop it
    // then add the digit to the stack
    while (stack.length && digit < stack[stack.length - 1] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }
  return stack;
}

console.log(s("26378491", 3));
