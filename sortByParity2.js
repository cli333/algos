// an arr of nums, half odd, half even
// sort the arr, such that odd indexes have odd values and even indexes even values

const sort = arr => {
  // do in place

  let i = 0;
  let j = 1;
  while (i < arr.length && j < arr.length) {
    // if even idx is even, keep looping
    while (i < arr.length && arr[i] % 2 === 0) {
      i += 2;
    }
    // if odd idx is odd, keep looping
    while (j < arr.length && arr[j] % 2 !== 0) {
      j += 2;
    }
    // escaped loop, found mismatch
    if (i < arr.length && j < arr.length) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
};

console.log(sort([4, 2, 5, 7]));
