// In a warehouse, there is a row of barcodes, where the i - th barcode is barcodes[i].

// Rearrange the barcodes so that no two adjacent barcodes are equal.You may return any answer, and it is guaranteed an answer exists.

//   Example 1:

// Input: [1, 1, 1, 2, 2, 2]
// Output: [2, 1, 2, 1, 2, 1]
// Example 2:

// Input: [1, 1, 1, 1, 2, 2, 3, 3]
// Output: [1, 3, 1, 3, 2, 1, 2, 1]

function sol(barcodes) {
  const map = {};
  for (let b of barcodes) {
    map[b] = map[b] + 1 || 1;
  }
  const q = Object.entries(map).sort((a, b) => (a[1] > b[1] ? -1 : 1));
  const res = [];
  while (q.length) {
    const a = q.shift();
    res.push(a[0]);
    a[1]--;
    if (q.length === 0) break;
    const b = q.shift();
    res.push(b[0]);
    b[1]--;

    if (a[1] > 0) q.push(a);
    if (b[1] > 0) q.push(b);
    q.sort((a, b) => (a[1] > b[1] ? -1 : 1));
  }

  return res.join("");
}

console.log(sol([1, 1, 1, 2, 2, 2]));
console.log(sol([1, 1, 1, 1, 2, 2, 3, 3]));
console.log(sol([1, 1, 1, 1, 2, 2, 2, 3, 3]));
