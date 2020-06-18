function sol(nums, k) {
  // partition nums into k groups of equal sum

  let totalSum = nums.reduce((acc, val) => acc + val, 0);
  let targetSum = totalSum / k;

  if (totalSum % k !== 0) return false;

  const out = [];
  part(0, Array(nums.length).fill(false), k, 0, []);
  if (out.length === k) {
    return out;
  } else {
    return false;
  }

  function part(start, used, k, curSum, curBucket = []) {
    if (k === 0) {
      return true;
    }

    if (curSum === targetSum) {
      out.push(curBucket);
      return part(0, used, k - 1, 0, []);
    }

    for (let i = start; i < nums.length; i++) {
      if (used[i] === false) {
        used[i] = true;
        curBucket.push(nums[i]);
        if (part(i + 1, used, k, curSum + nums[i], curBucket)) {
          return true;
        }
        used[i] = false;
        curBucket.pop();
      }
    }
    return false;
  }
}

console.log(sol([4, 3, 2, 3, 5, 2, 1], 5));
