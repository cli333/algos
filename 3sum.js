// find a,b,c = 0, no dups

function solve(nums) {
  // sort and remove dups
  nums.sort((a, b) => (a < b ? -1 : 1));
  // nums = nums.reduce((acc, val, idx, arr) => {
  //   if (arr.indexOf(val) === idx) acc.push(val);
  //   return acc;
  // }, []);

  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let target = 0 - nums[i];
    let lo = i + 1;
    let hi = nums.length - 1;

    while (lo < hi) {
      let sum = nums[lo] + nums[hi];
      if (sum === target) {
        res.push([nums[i], nums[lo], nums[hi]]);
        lo++;
        while (lo < hi && nums[lo] === nums[lo - 1]) {
          lo++;
        }
        hi--;
        while (lo < hi && nums[hi] === nums[hi + 1]) {
          hi--;
        }
      } else if (sum < target) {
        lo++;
      } else if (sum > target) {
        hi--;
      }
    }
  }

  return res;
}

console.log(solve([-1, 0, 1, 2, -1, -4]));
