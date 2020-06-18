function sol(nums) {
  // partition into two groups of equal sum
  let sum = nums.reduce((acc, val) => acc + val, 0);
  let subsum = sum / 2;
  const out = [];
  if (sum % 2 !== 0) return out;
  part(0, 2, Array(nums.length).fill(false), 0, []);
  return out;

  function part(start, k, used, curSum, curBucket) {
    if (k === 0) return;
    if (curSum === subsum) {
      out.push(curBucket);
      return part(0, k - 1, used, 0, []);
    }

    for (let i = start; i < nums.length; i++) {
      if (used[i] === false) {
        used[i] = true;
        curBucket.push(nums[i]);
        if (part(i + 1, k, used, curSum + nums[i], curBucket) !== false) return;
        used[i] = false;
        curBucket.pop();
      }
    }
    return false;
  }
}

console.log(sol([10, 10, 20, 10, 10, 20, 30, 20, 10]));
