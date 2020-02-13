const { Node } = require("./index");
const { identical } = require("./identical");

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

// check if subtree of tree

const isSubtree = (main, sub) => {
  if (!main) return false;
  if (!sub) return true;
  if (identical(main, sub)) {
    return true;
  }
  return isSubtree(main.left, sub) || isSubtree(main.right, sub);
};

console.log(isSubtree(e, b));
