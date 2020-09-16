// find next higher number with same digits

function sol(num) {
  const arr = String(num).split("");
  let len = arr.length;
  let i = len - 1;
  // find non ascending
  while (i > 0) {
    if (arr[i] > arr[i - 1]) break;
    i--;
  }
  // reach end, not possible
  if (i === 0) return null;

  let n1 = arr[i - 1];
  let min = i;
  // find smallest to the right that is greater
  for (let j = i + 1; j < len; j++) {
    if (arr[j] > n1 && arr[j] < arr[min]) {
      min = j;
    }
  }
  // swap
  swap(i - 1, min);

  // sort the numbers to the right
  return Number(arr.slice(0, i).concat(arr.slice(i).sort()).join(""));

  function swap(i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

console.log(sol(1234), 1243);
console.log(sol(4132), 4213);
console.log(sol(4321), null);
