// given two int arrays where second array is duplicate of first array with 1 element missing, find the element

function sol(a, b) {
  const longer = a.length > b.length ? a : b;
  const smaller = a.length < b.length ? a : b;
  let sum = longer.reduce((acc, val) => acc + val, 0);
  for (let num of smaller) {
    sum -= num;
  }
  return sum;
}

console.log(sol([9, 7, 8, 5, 4, 6, 2, 3, 1], [2, 3, 4, 9, 1, 8, 5, 6]), 7);
