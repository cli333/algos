// 110. Balanced Binary Tree
// Easy

// 3189

// 209

// Add to List

// Share
// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(3, new Node(4));
const b = new Node(3, new Node(4, new Node(5)));
const c = new Node(
  3,
  new Node(4, new Node(9)),
  new Node(6, new Node(7), new Node(8))
);

function s(root) {
  return helper(root) !== -1;

  function helper(root) {
    if (!root) return 0;
    const left = helper(root.left);
    const right = helper(root.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
    return 1 + Math.max(left, right);
  }
}

console.log(s(a), s(b), s(c));
