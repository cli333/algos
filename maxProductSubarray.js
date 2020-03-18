// given an array nums, ifnd the contiguous array within the array (containing at least one number) which has the largest product

const max = nums => {
  if (nums.length === 0) return -1;
  let i = 0;
  let currentMax = nums[0];
  let currentMin = nums[0];
  let finalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // keep, may be updated
    temp = currentMax;
    // compare 1:(curMax * curNumber), 2:(curMin * curNumber), 3:curNumber
    // 1: the product of curNumber
    // 2: the product of curMin * curNumber, the current number and current min may be negative
    // 3: the curNumber may be bigger than curMax which may be negative
    currentMax = Math.max(
      Math.max(currentMax * nums[i], currentMin * nums[i]),
      nums[i]
    );
    // do same to keep track of current min
    currentMin = Math.min(
      Math.min(temp * nums[i], currentMin * nums[i]),
      nums[i]
    );
    if (currentMax > finalMax) finalMax = currentMax;
  }

  return finalMax;
};

console.log(max([2, 3, -2, 4])); // [2,3] = 6
console.log(max([-2, 0, -1])); // [0] = 0
