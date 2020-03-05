// find the maximum number of consecutive 1s in an array

const consec = arr => {
  let max = 0;
  let m = 0;
  let i = 0;

  while (i < arr.length) {
    while (arr[i] === 1) {
      i++;
      m++;
    }
    max = Math.max(max, m);
    m = 0;
    i++;
  }
  return max;
};

console.log(consec([0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1]));
