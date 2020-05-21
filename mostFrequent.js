function solve(arr) {
  let obj = {};
  let maxCount = 0;
  let maxNum = null;

  for (let num of arr) {
    obj[num] = obj[num] + 1 || 1;
    if (!maxNum || obj[num] > maxCount) {
      maxCount = obj[num];
      maxNum = num;
    }
  }

  return maxNum;
}

console.log(solve([1, 3, 1, 3, 2, 1]));
