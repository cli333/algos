// 106. Construct Binary Tree from Inorder and Postorder Traversal
// Medium

// 2433

// 45

// Add to List

// Share
// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
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

function s(inorder, postorder) {
  //   if (inorder.length == 0) return null;
  //   const root = new Node(postorder.pop());
  //   const idx = inorder.indexOf(root.val);
  //   // construct right before left, because popping from postorder
  //   root.right = s(inorder.slice(idx + 1), postorder);
  //   root.left = s(inorder.slice(0, idx), postorder);
  //   return root;

  const map = inorder.reduce((acc, val, idx) => ({ ...acc, [val]: idx }), {});
  let postIdx = postorder.length - 1;
  return helper(0, postorder.length - 1);

  function helper(start, end) {
    if (start > end) return null;
    const root = new Node(postorder[postIdx]);
    postIdx--;
    let idx = map[root.val];
    root.right = helper(idx + 1, end);
    root.left = helper(start, idx - 1);
    return root;
  }
}

console.log(s([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
