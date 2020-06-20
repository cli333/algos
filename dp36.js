// perms, subsets

function sol(nums) {
  const res = [];
  if (nums.length < 1) return res;
  helper([], Array(nums.length).fill(false));
  return res;

  function helper(curList, used) {
    if (curList.length === nums.length) {
      res.push(curList.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        curList.push(nums[i]);
        used[i] = true;
        helper(curList, used);
        used[i] = false;
        curList.pop();
      }
    }
  }
}

function sol2(nums) {
  // solve for unique nums
  // sort the arr of nums
  // if a number has been used skip it
  nums.sort((a, b) => (a < b ? -1 : 1));
  const res = [];
  const memo = {};
  helper([], Array(nums.length).fill(false));
  return res;

  function helper(curList, used) {
    if (curList.length === nums.length) {
      res.push(curList.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // if cur number same as prev number && prev number hasn't been used, continue
      if (i > 0 && nums[i - 1] === nums[i] && !used[i - 1]) continue;
      if (!used[i]) {
        used[i] = true;
        curList.push(nums[i]);
        helper(curList, used);
        curList.pop();
        used[i] = false;
      }
    }
  }
}

function sol3(nums) {
  // generate all subsets
  const res = [];
  helper(0, []);
  return res;

  function helper(start, curList) {
    // 'bottom-up' solution, builds from empty to full
    // adds every built arr to res
    res.push(curList.slice());

    for (let i = start; i < nums.length; i++) {
      curList.push(nums[i]);
      helper(i + 1, curList);
      curList.pop();
    }
  }
}

function sol4(nums) {
  // all subsets 2
  const res = [];
  helper([], 0);
  return res;

  function helper(curList, idx) {
    // 'top-down' solution, builds up then adds to res
    if (idx === nums.length) {
      res.push(curList.slice());
      return;
    }

    curList.push(nums[idx]);
    helper(curList, idx + 1);
    curList.pop();
    helper(curList, idx + 1);
  }
}

function sol5(nums) {
  // all unique subsets
  // sort the arr
  nums.sort((a, b) => (a < b ? -1 : 1));
  const res = [];
  helper([], 0);
  return res;

  function helper(curList, idx) {
    if (idx === nums.length) {
      res.push(curList.slice());
      return;
    }

    curList.push(nums[idx]);
    helper(curList, idx + 1);
    curList.pop();
    // if the next number is the same as prev number, advance the index
    while (idx + 1 < nums.length && nums[idx + 1] === nums[idx]) {
      idx++;
    }
    helper(curList, idx + 1);
  }
}

console.log(sol([1, 2, 3]));
console.log(sol2([1, 1, 3]));
/* 
  [1,1,3]
  [1,3,1]
  [3,1,1]
*/
console.log(sol3([1, 2, 3]));
console.log(sol4([1, 2, 3]));
console.log(sol5([1, 1, 3]));
