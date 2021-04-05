// longest increasing subsequence
// trying some stuff
function s(nums) {
  // think of as acyclic graph
  const graph = {};
  for (let n1 of nums) {
    for (let n2 of nums) {
      if (n1 < n2) {
        graph[n1] ? graph[n1].push(n2) : (graph[n1] = [n2]);
      }
    }
  }

  const res = [];
  const set = new Set();
  for (let n of nums) {
    helper(n, [n]);
  }
  return res;

  function helper(n, list = []) {
    if (!graph[n]) {
      res.push(list.slice());
      return;
    }
    set.add(n);
    for (let next of graph[n]) {
      if (!set.has(next)) {
        list.push(next);
        set.add(next);
        helper(next, list);
        set.delete(next);
        list.pop();
      }
    }
  }
}

// console.log(s([3, 0, 6, 4, 1, 4, 7, 5]));

function s2(nums) {
  const n = nums.length;
  const dp = Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }
  return dp;
}

console.log(s2([3, 0, 6, 4, 1, 4, 7, 5]));

// longest consecutive
function s3(nums) {
  //   const n = nums.length;
  //   const dp = Array(n).fill(1);
  //   for (let i = 1; i < n; i++) {
  //     if (nums[i] > nums[i - 1]) {
  //       dp[i] = Math.max(dp[i], 1 + dp[i - 1]);
  //     }
  //   }
  //   return dp;

  let len = 1;
  let maxLen = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      len++;
    } else {
      len = 1;
    }
    maxLen = Math.max(maxLen, len);
  }

  return { len, maxLen };
}

console.log(s3([3, 0, 6, 4, 1, 4, 7, 5]));
