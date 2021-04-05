// 105. Construct Binary Tree from Preorder and Inorder Traversal
// Medium

// 4713

// 122

// Add to List

// Share
// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function s(preorder, inorder) {
  // first el of preorder is the root
  // whatever is to left of that el in inorder is IN/OR the left subtree
  // whatever is to right of that el in inorder is IN the right subtree

  const map = inorder.reduce((acc, val, idx) => ({ ...acc, [val]: idx }), {});
  let preIndex = 0;

  return helper(0, inorder.length - 1);

  function helper(start, end) {
    if (start > end) return null;

    const root = new Node(preorder[preIndex]);
    preIndex++;

    if (!root) return null;

    if (start === end) return root;

    const index = map[root.val];

    root.left = helper(start, index - 1);
    root.right = helper(index + 1, end);

    return root;
  }
}

console.log(s([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
