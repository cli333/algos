// 112. Path Sum
// Easy

// 2822

// 579

// Add to List

// Share
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

function s(root, target) {
  if (!root) return false;
  target -= root.val;
  if (!root.left && !root.right && !target) return true;
  return s(root.left, target) || s(root.right, target);
}
