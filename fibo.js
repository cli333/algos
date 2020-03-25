// fibonacci

const fib = n => {
  let a = 0;
  let b = 1;

  while (n - 1) {
    [a, b] = [b, a + b];
    n--;
  }

  return b;
};

const fib2 = n => (n < 2 ? n : fib2(n - 1) + fib2(n - 2));

const fib3 = (n, memo = {}) => {
  if (n < 2) return n;
  if (memo[n]) return memo[n];
  return (memo[n] = fib3(n - 1, memo) + fib3(n - 2, memo));
};

console.log(fib(100));
console.log(fib2(10));
console.log(fib3(100));
