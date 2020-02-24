const { Node } = require("./index");

// flatten a binary tree to a LL in place
// basically a binary tree with only right children

const a = new Node(10);
const b = new Node(3);
const c = new Node(12);
const d = new Node(15);
const e = new Node(13);
const f = new Node(2);

a.left = b;
a.right = c;
c.right = d;
c.left = null;
b.left = f;

const flat = root => {
  if (!root) return;
  let q = [root];
  while (q.length) {
    let node = q.shift();
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
    // set the right node to the first item in the queue
    if (q.length) {
      node.right = q[0];
    }
    // set the left to null
    node.left = null;
  }
  return root;
};

console.log(flat(a));
