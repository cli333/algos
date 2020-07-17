// Given a binary search tree and a node in it, find the in -order successor of that node in the BST.

// The successor of a node p is the node with the smallest key greater than p.val.

//   Example 1:

// Input: root = [2, 1, 3], p = 1
// Output: 2
// Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.
// Example 2:

// Input: root = [5, 3, 6, 2, 4, null, null, 1], p = 6
// Output: null
// Explanation: There is no in -order successor of the current node, so the answer is null.

function sol(root, p) {
  // o(H) time, where H is the height of the tree
  // instead of inorder traversal, o(N) time, where N is the number of nodes in the tree
  //
  // if p has right children,
  // it will be the minimum of p's right children
  // else it's the parent, IF the parent is greater than p

  if (p.right) return findMin(p.right);

  let succ = null;
  while (root) {
    if (p.val < root.val) {
      succ = root;
      root = root.left;
    } else if (p.val > root.val) {
      root = root.right;
    } else break;
  }

  return succ;

  function findMin(root) {
    while (root) root = root.left;
    return root;
  }
}
