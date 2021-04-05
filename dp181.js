// subsets that sum to k
// return all subsets

function s(arr, k) {
  // PROBLEM!!!!
  // produces duplicates
  const res = [];
  helper();
  return res;

  //   function helper(
  //     curSum = k,
  //     curArr = [],
  //     used = Array(arr.length).fill(false)
  //   ) {
  //     if (curSum === 0) {
  //       res.push(curArr.slice());
  //       return;
  //     }
  //     for (let i = 0; i < arr.length; i++) {
  //       if (!used[i] && curSum - arr[i] >= 0) {
  //         used[i] = true;
  //         curArr.push(arr[i]);
  //         helper(curSum - arr[i], curArr, used);
  //         curArr.pop();
  //         used[i] = false;
  //       }
  //     }
  //   }

  function helper(
    idx = 0,
    sum = k,
    cur = []
    // used = Array(arr.length).fill(false)
  ) {
    if (sum === 0) {
      res.push(cur.slice());
      return;
    }

    for (let i = idx; i < arr.length; i++) {
      if (sum - arr[i] >= 0) {
        cur.push(arr[i]);
        helper(i + 1, sum - arr[i], cur);
        cur.pop();
      }
    }
  }
}

console.log(s([1, 2, 3, 1], 4));

function s2(arr, k, i = 0, sum = 0, memo = {}) {
  // just find possibilities

  // o(n * k) time
  // o(n * k) space
  const key = `${i} ${sum}`;
  if (key in memo) return memo[key];
  if (sum === k) return 1;
  if (sum > k || i >= arr.length) return 0;
  const res =
    s2(arr, k, i + 1, sum + arr[i], memo) + s2(arr, k, i + 1, sum, memo);
  memo[key] = res;
  return res;
}

console.log(s2([1, 2, 3, 1], 4));
