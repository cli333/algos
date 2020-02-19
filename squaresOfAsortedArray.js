// given an array of integers sorted in non-decreasing order
// return an array of the squares of each num also in non-decreasing order

let a = [-4, -1, 0, 3, 10]; // => [0,1,9,16, 100]

const squares = arr => {
  let length = a.length;
  let positivePointer = 0;

  while (pointer < length && arr[positivePointer] < 0) {
    positivePointer++;
  }

  let negativePointer = positivePointer - 1;
  let sortedSquares = [];
  let index = 0;

  while (negativePointer >= 0 && positivePointer < length) {
    if (
      arr[negativePointer] * arr[negativePointer] <
      arr[positivePointer] * arr[positivePointer]
    ) {
      sortedSquares[index] = arr[negativePointer] * arr[negativePointer];
      negativePointer--;
    } else {
      sortedSquares[index] = arr[positivePointer] * arr[positivePointer];
      positivePointer++;
    }
    index++;
  }

  while (negativePointer >= 0) {
    sortedSquares[index] = arr[negativePointer] * arr[negativePointer];
    index++;
    negativePointer--;
  }

  while (positivePointer >= 0) {
    sortedSquares[index] = arr[positivePointer] * arr[positivePointer];
    index++;
    positivePointer++;
  }

  return sortedSquares;
};

console.log(squares(a));
