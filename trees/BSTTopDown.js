// Question

// Given a binary tree where all the right nodes are either leaf nodes with a sibling(a left node that shares the same parent node) or empty, flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes.Return the new root.

// For example:

// Given a binary tree { 1, 2, 3, 4, 5 },

//    1
//   / \
// 2   3
//   / \
// 4   5
// return the root of the binary tree[4, 5, 2,#,#, 3, 1].

//    4
//   / \
// 5   2
//   / \
// 3   1
// Solution

// At each node you want to assign: p.left = parent.right; p.right = parent;

// Top down approach

// We need to be very careful when reassigning current node’s left and right children.Besides making a copy of the parent node, you would also need to make a copy of the parent’s right child too.The reason is the current node becomes the parent node in the next iteration.

const { Node } = require("./index");

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);

a.left = b;
a.right = c;

const aa = new Node(1);
const bb = new Node(2);
const cc = new Node(3);
const dd = new Node(4);
const ee = new Node(5);

aa.left = bb;
aa.right = cc;
cc.left = dd;
cc.right = ee;

function solve(root) {
  // reorder to clockwise rotation
  if (!root) return null;
  let parent = root;
  let left = root.left;
  let right = root.right;
  if (left) {
    let newRoot = solve(left);
    newRoot.left = right;
    newRoot.right = parent;
    return newRoot;
  }
  return root;
}

function solve2(root) {
  let node = root;
  let parent = null;
  let right = null;
  while (node) {
    let left = node.left;
    node.left = right;
    right = node.right;
    node.right = parent;
    parent = node;
    node = left;
  }
  return parent;
}

console.log(solve2(a));
// console.log(solve(aa));
