// given an array A of ints, for each int A[i], we may choose any x with -K <= x <= K, and add x to A[i]
// after, we have some array B
// return the smallest possible difference between the maximum value of B and the minimum value of B

// A = [1], K = 0
// output = 0
// explanation: B = [1]

// A = [0,10], K = 2
// output = 6
// expla: B = [2, 8]

// [1,3,6], 3
// output = 0
// B= [3,3,3], OR B = [4,4,4]

// find the smallest value in A, increase by K
// find the largest in A, decrease by K
// don't need B?

const smallestRange = (A, K) => {
  let max = Math.max(...A) - K;
  let min = Math.min(...A) + K;
  if (max - min < 0) {
    return 0;
  } else {
    return max - min;
  }
};

console.log(smallestRange([1], 0)); // 0
console.log(smallestRange([0, 10], 2)); // 6
console.log(smallestRange([1, 3, 6], 3)); // 0
