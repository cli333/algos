// Given a complete binary tree, count the number of nodes.In a complete binary tree every level, except possibly the last,
// is completely filled, and all nodes in the last level are as far left as possible.It can have between 1 and 2h nodes inclusive at the last level h.

// Universal value binary tree means all value in that tree is the same.

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

function solve(root) {
  let count = 0;
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    count++;
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return count;
}

console.log(solve(a));
