// Given n friends, each one can remain single or can be paired up with some other friend.Each friend can be paired only once.Find out the total number of ways in which friends can remain single or can be paired up.

//   Examples :

// Input: n = 3
// Output: 4

// Explanation
// { 1 }, { 2 }, { 3 } : all single
// { 1 }, { 2, 3 } : 2 and 3 paired but 1 is single.
// { 1, 2 }, { 3 } : 1 and 2 are paired but 3 is single.
// { 1, 3 }, { 2 } : 1 and 3 are paired but 2 is single.
// Note that { 1, 2 } and { 2, 1 } are considered same.

// f(n) = ways n people can remain single
// or pair up.

// For n - th person there are two choices:
// 1) n - th person remains single, we recur
// for f(n - 1)
// 2) n - th person pairs up with any of the
// remaining n - 1 persons.We get(n - 1) * f(n - 2)

// Therefore we can recursively write f(n) as:
// f(n) = f(n - 1) + (n - 1) * f(n - 2)

function sol(n) {
  // if 1 person, only 1 way
  // if 2 ppl, 2 ways {1,2}, {1}, {2}
  if (n <= 2) return n;
  // person is single, remove from pool (person), solve for (n-1)
  // person paired, remove two from pool (person and friend), solve for (n-2) X (remaining people - the friend)
  return sol(n - 1) + (n - 1) * sol(n - 2);
}

function sol2(n) {
  // o(n) time and space

  const dp = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    if (i <= 2) {
      dp[i] = i;
    } else {
      dp[i] = dp[i - 1] + (i - 1) * dp[i - 2];
    }
  }

  return dp;
}

console.log(sol(2)); // 2
console.log(sol(3)); // 4
console.log(sol(4)); // 10

console.log(sol2(2)); // 2
console.log(sol2(3)); // 4
console.log(sol2(4)); // 10
