// Given a non - empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some starting node to any node
// in the tree along the parent - child connections.The path must contain at least one node and does not need to go through the root.

//   Example 1:

// Input: [1, 2, 3]

// 1
//   / \
// 2   3

// Output: 6
// Example 2:

// Input: [-10, 9, 20, null, null, 15, 7]

//   - 10
//   / \
// 9  20
//   /  \
// 15   7

// Output: 42

const { Node } = require("./index");

const a = new Node(-10);
const b = new Node(9);
const c = new Node(20);
const d = new Node(15);
const e = new Node(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

const solve = (root) => {
  let maxPathSum = 0;
  pathSum(root);
  return maxPathSum;

  function pathSum(node) {
    if (!node) return 0;
    // find the max of left tree and right tree
    let left = Math.max(0, pathSum(node.left));
    let right = Math.max(0, pathSum(node.right));
    // set the max to the max vs (left + right + node.val)
    maxPathSum = Math.max(maxPathSum, left + right + node.val);
    // return the max for this subtree/tree
    return Math.max(left, right) + node.val;
  }
};

console.log(solve(a));
