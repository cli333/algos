// 94. Binary Tree Inorder Traversal

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(1, null, new Node(2, new Node(3)));

function s(root) {
  if (root.left) s(root.left);
  console.log(root.val);
  if (root.right) s(root.right);
}

console.log(s(a));
