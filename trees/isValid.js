const { Node } = require("./index");

const a = new Node(3);
const b = new Node(1);
const c = new Node(5);
const d = new Node(0);
const e = new Node(2);
const f = new Node(4);
const g = new Node(-1); // <=

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

function solve(root) {
  // is valid bst?

  if (!root) return true;

  if (
    (root.left && root.val < root.left.val) ||
    (root.right && root.val > root.right.val)
  )
    return false;

  return solve(root.left) && solve(root.right);
}

console.log(solve(a));
