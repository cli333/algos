// 3sum

function sol(nums, target = 0) {
  nums.sort((a, b) => (a < b ? -1 : 1));
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let curSum = target - nums[i];
    let a = i + 1;
    let b = nums.length - 1;
    while (a < b) {
      if (nums[a] + nums[b] === curSum) {
        res.push([nums[i], nums[b], nums[a]]);
      }
      a++;
      while (a < b && nums[a] === nums[a - 1]) a++;
      b--;
      while (a < b && nums[b] === nums[b + 1]) b++;
    }
  }
  return res;
}

console.log(sol([-1, 0, 1, 2, -1, -4]));
