const { Node } = require("./index");

const a = new Node(50);
const b = new Node(16);
const c = new Node(90);
const d = new Node(78);
const e = new Node(100);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

// find inorder successor
// if not right subtree, find where took last left and return that node
// if right subtree, find leftmost value in right subtree

const successor = (root, val, temp = null) => {
  if (!root) return;
  if (root.val < val) return successor(root.right, val, temp);
  // took left, pass root to temp
  if (root.val > val) return successor(root.left, val, root);

  if (!root.right) return temp;

  if (root.right) {
    let temp = root.right;
    while (temp.left) {
      temp = temp.left;
    }
    return temp;
  }
};

console.log(successor(a, 90));
