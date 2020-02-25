// a mountain, array
// a peak is an element such that it is greater than the elements before and after

const arr = [0, 1, 0];

const findPeak = A => {
  // use binary search
  let left = 0;
  let right = A.length - 1;

  while (left < right) {
    let mid = Math.floor(left + right / 2);
    if (A[mid] < A[mid] + 1) {
      left = mid + 1;
    } else {
      right = mid;
    }
    return left;
  }
};

console.log(findPeak(arr));
