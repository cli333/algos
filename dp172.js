// product of arr except self

function s(arr) {
  const n = arr.length;
  const lefts = Array(n).fill(1);
  const rights = Array(n).fill(1);
  const out = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    lefts[i] = lefts[i - 1] * arr[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    rights[i] = rights[i + 1] * arr[i + 1];
  }

  for (let i = 0; i < n; i++) {
    out[i] = lefts[i] * rights[i];
  }

  return out;
}

console.log(s([2, 5, 3, 4]));
