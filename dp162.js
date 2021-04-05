// given a non-empty array of numbers, find the peak Element
// a peak element is greater than or equal to its neighbors

function sol(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr[left];
}

console.log(sol([1, 5, 8, 8, 3, 9]));
console.log(sol([1, 4, 5, 6, 7, 8, 10, 11]));
console.log(sol([10, 8, 7, 5, 3, 2, 0]));
console.log(sol([1, 5, 8, 8, 3, 9]));
