// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// You may return the answer in any order.

// Example 1:

// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
// Example 2:

// Input: n = 1, k = 1
// Output: [[1]]

function s(n, k) {
  const res = [];
  helper(1, []);
  return res;

  function helper(i, list) {
    if (list.length === k) {
      res.push(list.slice());
    }

    for (let j = i; j <= n; j++) {
      if (!list.includes(j)) {
        list.push(j);
        helper(j + 1, list);
        list.pop();
      }
    }
  }
}

console.log(s(4, 2));
