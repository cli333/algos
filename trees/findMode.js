const { Node } = require("./index");

// Given a binary search tree(BST) with duplicates, find all the mode(s)(the most frequently occurred element) in the given BST.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.

// For example:
// Given BST[1, null, 2, 2],

//   1
// \
// 2
//   /
//   2

const a = new Node(10);
const b = new Node(3);
const c = new Node(20);
const d = new Node(3);
const e = new Node(100);
const f = new Node(20);

a.left = b;
a.right = c;
b.left = d;
c.left = f;
c.right = e;
f.left = new Node(20);

const solve = (root) => {
  // o(n) time and o(1) space
  let prev = null;
  let count = 1;
  let max = 0;

  const modes = [];
  trav(root, modes);
  let res = [];

  function trav(root, modes) {
    // oN time o1 space
};

console.log(solve(a));
