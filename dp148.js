// given a set of numbers, find the largest subset of consecutive numbers

function sol(nums) {
  // add all nums to a set
  // start constructing the sequence
  const set = new Set();
  for (let num of nums) {
    set.add(num);
  }
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    const cur = [nums[i]];
    let curNum = nums[i];

    if (set.has(curNum - 1)) continue;

    while (set.has(curNum + 1)) {
      cur.push(curNum + 1);
      curNum++;
    }

    if (cur.length > res.length) {
      res = cur;
    }
  }

  return res;
}

console.log(sol([1, 3, 8, 14, 4, 10, 2, 11, 12]));
console.log(sol([1, 2, 3, 14, 5, 6, 7, 8, 10, 11, 12, 13, 15]));
