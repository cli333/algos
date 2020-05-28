// Count the number of prime numbers less than a non - negative number, n.

//   Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

function solve(n) {
  // let count = 0;
  // for (let i = n - 1; i > 1; i--) {
  //   if (isPrime(i)) count++;
  // }
  // return count;

  // function isPrime(n) {
  //   for (let i = 2; i < n; i++) {
  //     if (n % i === 0) return false;
  //   }
  //   return true;
  // }

  // Sieve of Eratosthenes
  // set boolean array of n length assuming all are prime

  const isPrime = Array(n).fill(true);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (!isPrime[i]) continue;
    count++;
    // for all products i(cur number) * j(some number) < n
    // set isPrime array to false
    for (let j = 2; i * j < n; j++) {
      isPrime[i * j] = false;
    }
  }

  return count;
}

console.log(solve(10)); // 4
