// You have 4 cards each containing a number from 1 to 9. You need to judge whether they could operated through *, /, +, -, (, ) to get the value of 24.

// Example 1:
// Input: [4, 1, 8, 7]
// Output: True
// Explanation: (8 - 4) * (7 - 1) = 24
// Example 2:
// Input: [1, 2, 1, 2]
// Output: False

function sol(nums, t = 24) {
  // try to get 24

  return helper(nums, t, Array(nums.length).fill(false));

  function helper(nums, target, used) {
    if (target === 0 && used.every((entry) => entry === true)) return true;

    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        used[i] = true;
        if (helper(nums, target - nums[i], used)) {
          return true;
        }
        if (helper(nums, target + nums[i], used)) {
          return true;
        }
        if (helper(nums, target * nums[i], used)) {
          return true;
        }
        if (helper(nums, target / nums[i], used)) {
          return true;
        }
        used[i] = false;
      }
    }
    return false;
  }
}

console.log(sol([6, 4]));
