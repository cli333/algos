// arr permutations

function s(arr) {
  const n = arr.length;
  const out = [];
  helper();
  return out;

  function helper(cur = [], used = new Set()) {
    if (cur.length === n) {
      out.push(cur.slice());
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!used.has(arr[i])) {
        used.add(arr[i]);
        cur.push(arr[i]);
        helper(cur, used);
        used.delete(arr[i]);
        cur.pop();
      }
    }
  }
}

// console.log(s([1, 2, 3]));

function s2(arr) {
  // o(n*n!)
  if (arr.length < 2) return [arr];
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const first = arr[i];
    const rest = s2([...arr.slice(0, i), ...arr.slice(i + 1)]);
    for (let r of rest) {
      res.push([first, ...r]);
    }
  }
  return res;
}

// console.log(s2([1, 2, 3]));

// w/ dups

function s3(arr) {}

console.log(s3([1, 2, 3]));
