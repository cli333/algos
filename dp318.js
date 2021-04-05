// permute
const memo = {};
function s(nums) {
  if (nums.length === 1) return [nums];
  if (memo[`${JSON.stringify(nums)}`]) {
    console.log("accessed memo");
    return memo[`${JSON.stringify(nums)}`];
  }
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let p of s(nums.slice(0, i).concat(nums.slice(i + 1)))) {
      res.push([nums[i], ...p]);
    }
  }

  memo[`${JSON.stringify(nums)}`] = res;
  return res;
}

console.log(s([1, 2, 3, 4, 5]));
// console.log(memo);
