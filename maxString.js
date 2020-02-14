// find max substring
// time: o(m*n), space: o(n)

const max = (string1, string2) => {
  let matrix = [...Array(string1.length + 1)].map(row =>
    Array(string2.length + 1).fill(0)
  );

  let coords = {
    length: 0,
    xY: []
  };

  for (let i = 1; i <= string1.length; i++) {
    for (let j = 1; j <= string2.length; j++) {
      if (string1[i - 1] === string2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        coords.length++;
        coords.xY = [i, j];
      }
    }
  }

  let string = "";
  let x = coords.xY[0];
  while (coords.length) {
    string = string1[x - 1] + string;
    coords.length--;
    x--;
  }

  return string;
};

console.log(max("abhe", "helo"));

// if A[m] == B[n] increase the result by 1.
//     if A[m] != B[n] :
//       compare with A[m -1] and B[n] or
//       compare with A[m] and B[n -1]
//     with result reset to 0.

const m2 = (a, b, m = a.length - 1, n = b.length - 1, res = 0) => {
  if (m < 0 || n < 0) return res;
  if (a[m] === b[n]) {
    res = m2(a, b, m - 1, n - 1, res + 1);
  }
  return Math.max(res, m2(a, b, m - 1, n, 0), m2(a, b, m, n - 1, 0));
};

console.log(m2("abhe", "helo"));
