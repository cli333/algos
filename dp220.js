// 95. Unique Binary Search Trees II
// Medium

// 2810

// 197

// Add to List

// Share
// Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

// Example 1:

// Input: n = 3
// Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
// Example 2:

// Input: n = 1
// Output: [[1]]

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function s(n) {
  return helper(1, n);

  function helper(start, end) {
    if (start > end) return [null];

    const res = [];
    for (let root = start; root <= end; root++) {
      for (let left of helper(start, root - 1)) {
        for (let right of helper(root + 1, end)) {
          const newTree = new Node(root);
          newTree.left = left;
          newTree.right = right;
          res.push(newTree);
        }
      }
    }
    return res;
  }
}

console.log(s(3));
