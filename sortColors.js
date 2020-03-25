// given an array of objects colored red, white, blue
// sort in place so that similar objects are adjacent
// do not use inbuilt sort

// [2, 0, 2, 1, 1, 0] => [0,0,1,1,2,2]

const sort = nums => {
  let start = 0;
  let end = nums.length - 1;
  let i = 0;

  /* 
    if nums[i] = 0, swap nums[i] with nums[start], i++ start++
    if nums[i] = 2, swap nums[i] with nums[end], end-- (dont increment index because want to do another loop to check nums[i])
    else nums[i] = 1, i++
  */

  while (i <= end && start < end) {
    if (nums[i] === 0) {
      nums[i] = nums[start];
      nums[start] = 0;
      start++;
      i++;
    } else if (nums[i] === 2) {
      nums[i] = nums[end];
      nums[end] = 2;
      end--;
    } else {
      i++;
    }
  }
  return nums;
};

console.log(sort([2, 0, 2, 1, 1, 0]));
