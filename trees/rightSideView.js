const { Node } = require("./index");

// imagine a binary tree, standing on the right side, return the nodes from top to bottom that you can see
// the rightmost nodes of each level on a binary tree

const a = new Node(10);
const b = new Node(3);
const c = new Node(12);
const d = new Node(15);
const e = new Node(13);
const f = new Node(2);
const g = new Node(6);

a.left = b;
a.right = c;
c.right = d;
c.left = e;
b.left = f;
f.right = g;

const rightSide = root => {
  let out = [];
  let q = [root, "s"];

  while (q.length > 1) {
    let node = q.shift();
    if (node === "s") q.push("s");
    if (q[0] === "s") out.push(node.val);
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
  return out;
};

console.log(rightSide(a));
