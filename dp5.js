// find minimum number of edit/operations needed to convert s1 to s2

function solve(s1, s2) {
  const dp = [];

  s1 = " " + s1;
  s2 = " " + s2;

  for (let i = 0; i < s1.length; i++) {
    const row = [];
    for (let j = 0; j < s2.length; j++) {
      row.push(0);
    }
    dp.push(row);
  }

  for (let i = 1; i < s1.length; i++) {
    for (let j = 1; j < s2.length; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else if (s1[i] === s2[j]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
      }
    }
  }

  console.log(dp);
  return dp[s1.length - 1][s2.length - 1];
}

console.log(solve("geek", "gseek"));
console.log(solve("dog", "dug"));
console.log(solve("cart", "march"));
