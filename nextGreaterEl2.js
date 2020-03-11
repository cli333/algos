// given a circular arr (the next el of the last el is the first el of the array)
// print the next greater num for every element
// next greater num is the first greater num to its traversing order next in the array
// which means you could search circularly to find its next greater number
// if no exist, return -1

const nextGreater = nums => {
  let n = nums.length;
  let out = [...Array(n)].fill(-1);

  let stack = [];

  // hint: see if a string's rotation is in another string
  for (let i = 0; i < n * 2; i++) {
    //                       // on the stack               // current value
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
      out[stack.pop()] = nums[i % n];
    }
    if (i < n) stack.push(i);
  }

  return out;
};

console.log(nextGreater([1, 2, 1])); // [2,-1,2]
