// 98. Validate Binary Search Tree
// Medium

// 5473

// 650

// Add to List

// Share
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(2, new Node(1), new Node(3));
const b = new Node(5, new Node(1), new Node(4, new Node(3), new Node(6)));

function s(root) {
  return helper(root, -Infinity, Infinity);

  function helper(root, min, max) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return (
      helper(root.left, min, root.val) && helper(root.right, root.val, max)
    );
  }
}

console.log(s(a), true);
console.log(s(b), false);
