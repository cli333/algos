// find two sum

const arr = [9, 5, 6, 4, 6, 12, 0];

const twoSum = (arr, target = 0) => {
  const cache = {};

  for (let n of arr) {
    let complement = target - n;

    if (complement in cache) {
      return { complement, n };
    }

    cache[n] = true;
  }

  return null;
};

console.log(twoSum(arr, 9));
