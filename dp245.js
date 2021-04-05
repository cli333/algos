// 132. Palindrome Partitioning II
// Hard

// 1651

// 50

// Add to List

// Share
// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return the minimum cuts needed for a palindrome partitioning of s.

// Example 1:

// Input: s = "aab"
// Output: 1
// Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
// Example 2:

// Input: s = "a"
// Output: 0
// Example 3:

// Input: s = "ab"
// Output: 1

function s(str) {
  const n = str.length;
  const dp = [];
  for (let r = 0; r < n; r++) {
    const row = [];
    for (let c = 0; c < n; c++) {
      row.push(0);
    }
    dp.push(row);
  }

  // build dp table of all palindromes in the string

  /* 
      b  a  n  a  n  a
  b [ 1, 0, 0, 0, 0, 0 ],
  a [ 0, 1, 0, 1, 0, 1 ],
  n [ 0, 0, 1, 0, 1, 0 ],
  a [ 0, 0, 0, 1, 0, 1 ],
  n [ 0, 0, 0, 0, 1, 0 ],
  a [ 0, 0, 0, 0, 0, 1 ]
  */

  // all single char ARE palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  // check 2 chars string
  for (let i = 0; i < n - 1; i++) {
    if (str[i] === str[i + 1]) {
      dp[i][i + 1] = 1;
    }
  }

  // check >= 3 chars string
  for (let len = 3; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      let j = i + len - 1;
      // begin letter === end letter && string between begin letter and end letter (check down to left, eg. anana => CHECK nan => CHECK a) is a palindrome
      if (str[i] === str[j] && dp[i + 1][j - 1]) {
        dp[i][j] = 1;
      }
    }
  }

  const cuts = Array(n).fill(Infinity);
  for (let i = 0; i < n; i++) {
    let min = Infinity;
    // if current string is palindrome, cuts required are 0
    if (dp[0][i]) {
      cuts[i] = 0;
    } else {
      for (let j = 0; j < i; j++) {
        // keep splitting the string => first part + second part
        // if second part is a palindrome, reset min
        if (dp[j + 1][i]) {
          // add one if the second part is a palindrome, because cuts required for full string = cuts required of first + (if the second is palindrome, to separate first from second) 1
          min = Math.min(min, cuts[j] + 1);
        }
      }
      cuts[i] = min;
    }
  }

  console.log({ dp, cuts });
  return cuts[n - 1];
}

console.log(s("aab"));
console.log(s("ab"));
console.log(s("banana"));
console.log(s("efe"));
