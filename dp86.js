// partition equal subset sum

console.log(sol([1, 5, 11, 5]));
console.log(sol([1, 5, 11])); // []
console.log(sol([1, 75, 135, 5, 11, 100, 23]));

function sol(nums) {
  const res = [];
  const total = nums.reduce((acc, val) => acc + val, 0);
  const sum = Math.floor(total / 2);
  if (total % 2 !== 0) return res;
  helper(Array(nums.length).fill(false), 1, sum, []);
  return res;

  function helper(used, bucketIdx, curSum, curList) {
    if (bucketIdx === 0) {
      return true;
    }

    if (curSum === 0) {
      res.push(curList.slice());
      return helper(used, bucketIdx - 1, sum, []);
    }

    for (let i = 0; i < nums.length; i++) {
      if (!used[i] && nums[i] <= curSum) {
        used[i] = true;
        curList.push(nums[i]);
        if (!helper(used, bucketIdx, curSum - nums[i], curList)) {
          used[i] = false;
        }
        curList.pop();
      }
    }
    return false;
  }
}

console.log(sol2([1, 5, 11, 5]));
// console.log(sol2([1, 5, 11])); // false

function sol2(nums) {
  let sum = nums.reduce((acc, val) => acc + val, 0);
  if (sum % 2 !== 0) return false;
  sum /= 2;
  // arr of sums, 0... sum
  const dp = Array(sum + 1);
  dp[0] = true;

  // check the dp[current - num] OR if the sum - current number is valid

  for (let num of nums) {
    for (let j = sum; j >= 0; j--) {
      console.log(dp);
      if (j >= num) {
        dp[j] = dp[j] || dp[j - num];
      }
    }
  }

  return dp[sum];
}
