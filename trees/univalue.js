// find if tree is univalued
const { Node } = require("./index");

const a = new Node(0);
const b = new Node(1);
const c = new Node(1);
const d = new Node(1);
const e = new Node(1);
const f = new Node(1);

a.left = b;
a.right = c;
c.right = d;
b.left = f;
b.right = e;

const isUni = (root, val) => {
  let left = root.left ? isUni(root.left, val) : true;
  let right = root.right ? isUni(root.right, val) : true;
  return root.val === val && left && right;
};

console.log(isUni(a, 1));
