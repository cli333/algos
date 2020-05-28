// Given a binary tree, determine if it is a valid binary search tree(BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

//   Example 1:

// 2
//   / \
// 1   3

// Input: [2, 1, 3]
// Output: true
// Example 2:

// 5
//   / \
// 1   4
//   / \
// 3   6

// Input: [5, 1, 4, null, null, 3, 6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

const { Node } = require("./index");

const a = new Node(2);
const b = new Node(1);
const c = new Node(3);

a.left = b;
a.right = c;

const aa = new Node(5);
const bb = new Node(1);
const cc = new Node(5.5);
const dd = new Node(3);
const ee = new Node(1);

aa.left = bb;
aa.right = cc;
cc.left = dd;
cc.right = ee;

function solve(root) {
  if (!root) return true;
  if (
    (root.left && root.val < root.left.val) ||
    (root.right && root.val > root.right.val)
  )
    return false;
  return solve(root.left) && solve(root.right);
}

console.log(solve(a));
console.log(solve(aa));
