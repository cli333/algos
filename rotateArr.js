// given an arr rotate the arr to the right by k steps, where k >= 0

// [1,2,3,4,5,6,7], k=3
// [5,6,7,1,2,3,4]

// [-1,-100,3,99], k=2
// [3,99,-1,100]

const rot = (arr, k) => {
  // concat the arr onto the arr
  // slice it
  let length = arr.length;
  return arr.concat(arr).slice(length - k, length + k);
};

// console.log(rot([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rot([-1, -100, 3, 99], 2));

const rot2 = (arr, k) => {
  // reverse the arr
  // reverse the first k elements
  // reverse the remaining elements
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);

  return arr;
};

function reverse(arr, idx1, idx2) {
  while (idx1 < idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    idx1++;
    idx2--;
  }
  return arr;
}

console.log(rot2([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rot2([-1, -100, 3, 99], 2));
