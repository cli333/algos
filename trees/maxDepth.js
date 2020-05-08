const { Node } = require("./index");

const a = new Node(10);
const b = new Node(3);
const c = new Node(12);
const d = new Node(2);
const e = new Node(5);
const f = new Node(2);

a.left = b;
a.right = c;
c.right = d;
c.left = null;
b.left = f;
b.right = e;
f.left = new Node("a");

const solve = (root) => {
  if (!root) return 0;
  return 1 + Math.max(solve(root.left), solve(root.right));
};

console.log(solve(a));
