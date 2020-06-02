function solve(s, t) {
  const dp = [];
  for (let i = 0; i < s.length; i++) {
    const row = [];
    for (let j = 0; j < t.length; j++) {
      row[j] = 0;
    }
    dp.push(row);
  }

  let max = {
    coords: {
      r: 0,
      c: 0,
    },
    len: 0,
  };

  for (let r = 0; r < s.length; r++) {
    for (let c = 0; c < t.length; c++) {
      if (!dp[r - 1] || (!dp[r - 1][c - 1] && s[r] === t[c])) {
        dp[r][c] = 1;
      } else if (s[r] === t[c]) {
        dp[r][c] = 1 + dp[r - 1][c - 1];
        if (dp[r][c] > max.len) {
          max.coords.r = r;
          max.coords.c = c;
          max.len = dp[r][c];
        }
      }
    }
  }
  let out = "";
  while (max.len) {
    out = s[max.coords.r] + out;
    max.len--;
    max.coords.r--;
  }

  return out;
}

function solve2(s, t) {
  let out = "";
  let times = 0;

  lcs(s, t, s.length - 1, t.length - 1, 0, "");
  return { out, times };

  function lcs(s1, s2, idx1, idx2, len, str) {
    times++;
    if (len > out.length) {
      out = str;
    }

    if (idx1 < 0 || idx2 < 0) {
      return len;
    }

    if (s1[idx1] === s2[idx2]) {
      str = s1[idx1] + str;
      len = lcs(s1, s2, idx1 - 1, idx2 - 1, len + 1, str);
    }

    return Math.max(
      len,
      lcs(s1, s2, idx1 - 1, idx2, 0, ""),
      lcs(s1, s2, idx1, idx2 - 1, 0, "")
    );
  }
}

console.log(solve("scato", "cat"));
console.log(solve2("scato", "cat"));
console.log(solve("mxyzptlk", "arasxzptasdfkj"));
console.log(solve2("mxyzptlk", "arasxzptasdfkj"));
