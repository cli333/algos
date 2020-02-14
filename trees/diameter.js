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

// find diameter of tree
// the longest path from node to node
// 1: can pass through root, max Left + max Right + root
// 2: does not pass through root
// compare diameter of root.left and root.right

const maxHeight = root => {
  if (!root) return 0;
  return 1 + Math.max(maxHeight(root.left), maxHeight(root.right));
};

const diameter = root => {
  if (!root) return 0;
  let lHeight = maxHeight(root.left);
  let rHeight = maxHeight(root.right);
  let lDiameter = diameter(root.left);
  let rDiameter = diameter(root.right);
  return Math.max(lHeight + rHeight + 1, Math.max(lDiameter, rDiameter));
};

console.log(diameter(a));
