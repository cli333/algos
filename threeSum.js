// find three sum

const arr = [9, 5, 6, 4, 3, 12, 0];

const threeSum = (arr, target = 0) => {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let firstNum = arr[i];
    let start = i + 1;
    let end = arr.length - 1;

    while (start < end) {
      let sum = firstNum + arr[start] + arr[end];
      if (sum < target) start++;
      if (sum > target) end--;
      if (sum === target) return [firstNum, arr[start], arr[end]];
    }
  }

  return null;
};

console.log(threeSum(arr, 12));
