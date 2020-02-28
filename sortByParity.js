// given an array, return an array with even numbers first followed by odd

const sort = arr => {
  // two pointers
  // swap if even and not in the right position
  // else move both pointers inward
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (
      (arr[start] % 2 === 0 && arr[end] % 2 !== 0) ||
      (arr[end] % 2 === 0 && arr[start] % 2 !== 0)
    ) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }

    if (arr[start] % 2 === 0) start++;
    if (arr[end] % 2 !== 0) end--;
  }

  return arr;
};

console.log(sort([3, 1, 2, 4, 5, 6, 8]));
