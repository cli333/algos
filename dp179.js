// find min in a rotated sorted arr

function s(arr) {
  // o(n)
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    // if next > prev el, next is the min
    if (arr[mid] > arr[mid + 1]) return mid + 1;
    // if mid > right, there is a 'dip' in the mid -> right sequence, the min is on the right, set left to mid + 1
    if (arr[mid] > arr[right]) left = mid + 1;
    // if mid < right, mid -> right is a strictly increasing sequence, the min is to the left, set right to mid
    if (arr[mid] < arr[right]) right = mid;
  }
  // first el is the min
  return left;
}

function s2(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return left;
  }
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] > arr[mid + 1]) return mid + 1;
  if (arr[mid] > arr[right]) return s2(arr, mid + 1, right);
  if (arr[mid] < arr[right]) return s2(arr, left, mid);
}

const s3 = (arr) => Math.min(...arr);
const s4 = (arr) => arr.reduce((a, b) => (b < a ? b : a), Infinity);

console.log(s([10, 11, 12, 14, 1, 2, 3, 4]));
console.log(s([5, 10, 2, 3, 8]));
console.log(s([1, 2, 3, 4]));

console.log(s2([10, 11, 12, 14, 1, 2, 3, 4]));
console.log(s2([5, 10, 2, 3, 8]));
console.log(s2([1, 2, 3, 4]));

console.log(s3([1, 2, 3, 4]));
console.log(s4([1, 2, 3, 4]));
