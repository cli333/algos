// flatten binary tree in place
// create a LL that follows preorder traversal

// preorder = top -> left -> right

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new TreeNode(
  1,
  new TreeNode(3, new TreeNode(5), new TreeNode(7)),
  new TreeNode(4, null, new TreeNode(12))
);

function s(root) {
  // in preorder, the flattened left tree will precede the flattend right tree
  // o(n) time
  // o(h) space, where h is the height of the tree

  if (!root) return root;
  let left = s(root.left);
  let right = s(root.right);
  // append left to the root's right
  root.right = left;
  root.left = null;
  let temp = root;
  // move down the 'left' or new right
  while (temp.right) {
    temp = temp.right;
  }
  // append the 'old right' to the 'left'
  temp.right = right;
  return root;

  //   if (!root) return;
  //   s(root.left);
  //   s(root.right);
  //   const right = root.right;
  //   root.right = root.left;
  //   root.left = null;
  //   temp = root;
  //   while (temp.right) {
  //     temp = temp.right;
  //   }
  //   temp.right = right;
}

function print(head) {
  const out = [];
  while (head) {
    out.push(head.val);
    head = head.right;
  }
  return out;
}

console.log(print(s(a)));
