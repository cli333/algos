// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array A is monotone increasing if for all i <= j, A[i] <= A[j].An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

// Return true if and only if the given array A is monotonic.

//   Example 1:

// Input: [1, 2, 2, 3]
// Output: true
// Example 2:

// Input: [6, 5, 4, 4]
// Output: true
// Example 3:

// Input: [1, 3, 2]
// Output: false
// Example 4:

// Input: [1, 2, 4, 5]
// Output: true
// Example 5:

// Input: [1, 1, 1]
// Output: true

const solve = (arr) => {
  // let type = null;

  // for (let i = 1; i < arr.length; i++) {
  //   if (i === 1 && arr[i - 1] < arr[i]) {
  //     type = "increasing";
  //     continue;
  //   } else if (i === 1 && arr[i - 1] > arr[i]) {
  //     type = "decreasing";
  //     continue;
  //   }

  //   if (
  //     (type === "increasing" && arr[i - 1] > arr[i]) ||
  //     (type === "decreasing" && arr[i - 1] < arr[i])
  //   )
  //     return false;
  // }
  // return true;

  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) isIncreasing = false;
    if (arr[i] < arr[i + 1]) isDecreasing = false;
  }

  return isIncreasing || isDecreasing;
};

console.log(solve([1, 2, 2, 3]));
console.log(solve([6, 5, 4, 4]));
console.log(solve([1, 3, 2]));
console.log(solve([1, 2, 4, 5]));
