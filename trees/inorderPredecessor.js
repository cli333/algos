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

// find the inorder predecessor

// find node
// if node has left subtree, find rightmost value of left subtree
// if no left subtree, go to node where took last right turn

const pred = (root, val, temp = null) => {
  // if root not found
  if (!root) return;
  // took a right turn, pass to temp
  if (root.val < val) return pred(root.right, val, root);
  // took a left turn, keep temp
  if (root.val > val) return pred(root.left, val, temp);
  // no left subtree return temp OR node where took fist right
  if (!root.left) return temp;
  // find rightmost in left subtree
  if (temp && !temp.right) return temp;
  if (root.left) return pred(root, val, root.left);

  // if (root.left) {
  //   temp = root.left;
  //   while (temp.right) {
  //     temp = temp.right;
  //   }
  //   return temp;
  // }
};

console.log(pred(a, 50));
