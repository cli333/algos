// find the duplicate number in an array
// contains n+1 integers
// assume all integers between 1 and n
// prove that one dupe exists

const dup = nums => {
  let slow = nums[0];
  let fast = nums[0];

  slow = nums[slow];
  fast = nums[nums[fast]];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  return {
    slow: { index: slow, num: nums[slow] },
    fast: { index: fast, num: nums[fast] }
  };
};

// instead of iterating over arr
// there is a cycle to this?!!?!?!
// all nums are between 1 and n, so must point to an index that exists
// at some point the slow and fast will intersect!!

const arr = [1, 3, 4, 2, 2];

console.log(dup(arr));
