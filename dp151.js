// in an array of numbers, modify each position to contain multiplication values in all other locations

function sol(nums) {
  const lefts = nums.slice().fill(1);
  let cur = 1;
  for (let i = 0; i < nums.length; i++) {
    lefts[i] = cur;
    cur *= nums[i];
  }
  const rights = nums.slice().fill(1);
  cur = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    rights[i] = cur;
    cur *= nums[i];
  }
  for (let i = 0; i < rights.length; i++) {
    rights[i] *= lefts[i];
  }
  return rights;
}

console.log(sol([1, 2, 3, 4]), [24, 12, 8, 6]);
