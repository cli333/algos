const { Node } = require("./index");

// Given preorder and inorder traversal of a tree, construct the binary tree.

//   Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3, 9, 20, 15, 7]
// inorder = [9, 3, 15, 20, 7]
// Return the following binary tree:

//    3
//   / \
// 9  20
//   /  \
// 15   7

const solve = (preorder, inorder) => {
  return helper(0, 0, inorder.length - 1, preorder, inorder);

  function helper(preStart, inStart, inEnd, preorder, inorder) {
    // if index of prestart is greater than the preorder array
    // OR instart > inend => return null
    if (preStart > preorder.length - 1 || inStart > inEnd) return null;
    // start with first number of preorder b/c that is the root
    const root = new Node(preorder[preStart]);
    // index of the root val in the inorder
    const rootInorderIdx = inorder.indexOf(root.val);
    // everything to left of rootIdx in the inorder will be in the "left subtree"
    // set the inEnd index to index of the rootIdx - 1
    root.left = helper(
      preStart + 1, // next element in preorder is the root of the left subtree
      inStart,
      rootInorderIdx - 1, // right boundary is to the left of rootIdx
      preorder,
      inorder
    );

    // everything to the right of root index
    root.right = helper(
      preStart + rootInorderIdx - inStart + 1, // skip values in 'preorder' that will belong the this root's left subtree
      rootInorderIdx + 1, // left boundary is to the right of the rootIdx
      inEnd,
      preorder,
      inorder
    );

    return root;
  }
};

console.log(solve([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
