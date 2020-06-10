// find longest common subsequence

function solve(l1, l2) {
  const dp = [];

  for (let i = 0; i <= l1.length; i++) {
    let row = [];
    for (let j = 0; j <= l2.length; j++) {
      row.push(0);
    }
    dp.push(row);
  }

  l1 = " " + l1;
  l2 = " " + l2;

  for (let i = 1; i < l1.length; i++) {
    for (let j = 1; j < l2.length; j++) {
      if (l1[i] === l2[j]) {
        // check diagonal left
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        // check top, left
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // go back
  // if cell is not max(top, left), then it is part of the subsequence
  // so move diagonal left
  // if cell === left, move left
  // if cell == top, move top

  let r = l1.length - 1;
  let c = l2.length - 1;
  let len = dp[r][c];
  let out = "";

  while (len) {
    if (dp[r][c] !== Math.max(dp[r - 1][c], dp[r][c - 1])) {
      out = l1[r] + out;
      r--;
      c--;
      len--;
    } else if (dp[r][c] === dp[r - 1][c]) {
      r--;
    } else if (dp[r][c] === dp[r][c - 1]) {
      c--;
    }
  }

  return out;
}

function solve2(l1, l2) {
  return lcs(l1, l2, l1.length - 1, l2.length - 1);

  function lcs(l1, l2, m, n) {
    if (m < 0 || n < 0) {
      return 0;
    }

    if (l1[m] === l2[n]) {
      return 1 + lcs(l1, l2, m - 1, n - 1);
    } else {
      return Math.max(lcs(l1, l2, m, n - 1), lcs(l1, l2, m - 1, n));
    }
  }
}

console.log(solve("abcdefg", "abxdfg"));
console.log(solve("beca", "abcd"));
console.log(solve2("abcdefg", "abxdfg"));
console.log(solve2("beca", "abcd"));
