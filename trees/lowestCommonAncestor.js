const { Node } = require("./index");

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");

a.left = b;
a.right = c;
b.left = g;
c.left = d;
c.right = e;
e.right = f;

// find the lowest common ancestor of two nodes

const lca = (main, a, b) => {
  if (!main) return null;
  if (main.val === a || main.val === b) return main;
  let left = lca(main.left, a, b);
  let right = lca(main.right, a, b);
  if (left && right) return main;
  if (!left && !right) return null;
  return left ? left : right;
};

console.log(lca(a, "d", "f"));
