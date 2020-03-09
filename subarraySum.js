// given an array of ints and an int k
// find the total number of CONTINUOUS subarrays whose sum equals k

// [1,1,1], k=2 => 2

// if the diff between the sum at an idx (minus) the sum at another idx === k
// then have seen a subarray of sum k

const findSub = (nums, k) => {
  const map = {};
  // have seen a sum of zero once
  // so put in
  map[0] = 1;
  let currentSum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    if (map[currentSum - k]) count++;

    map[currentSum] = map[currentSum] + 1 || 1;
  }

  console.log(map);

  return count;
};

console.log(findSub([1, 1, 1, 1], 3));
