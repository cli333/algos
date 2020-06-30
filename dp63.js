// Given a string S of digits, such as S = "123456579", we can split it into a Fibonacci - like sequence[123, 456, 579].

//   Formally, a Fibonacci - like sequence is a list F of non - negative integers such that:

// 0 <= F[i] <= 2 ^ 31 - 1, (that is, each integer fits a 32 - bit signed integer type);
// F.length >= 3;
// and F[i] + F[i + 1] = F[i + 2] for all 0 <= i < F.length - 2.
// Also, note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number 0 itself.

// Return any Fibonacci - like sequence split from S, or return [] if it cannot be done.

//   Example 1:

// Input: "123456579"
// Output: [123, 456, 579]
// Example 2:

// Input: "11235813"
// Output: [1, 1, 2, 3, 5, 8, 13]
// Example 3:

// Input: "112358130"
// Output: []
// Explanation: The task is impossible.

function sol(S) {
  const res = [];
  helper(0);
  return res;

  function helper(idx) {
    if (idx === S.length) {
      // valid fib list must be greater than 2
      return res.length > 2 ? true : false;
    }

    let num = 0;
    for (let i = idx; i < S.length; i++) {
      num = num * 10 + Number(S[i]);
      // if (num < 0) return false;
      if (res.length < 2 || res[res.length - 1] + res[res.length - 2] === num) {
        res.push(num);
        if (helper(i + 1)) return true;
        res.pop();
      }
      // if (i === idx && S[i] === "0") return false;
    }

    return false;
  }
}

console.log(sol("123456579"));
console.log(sol("11235813"));
