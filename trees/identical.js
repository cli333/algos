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

// find if two trees are identical

const identical = (node1, node2) => {
  // reached end of trees
  if (!node1 && !node2) return true;
  if (node1 && node2) {
    if (
      node1.val === node2.val &&
      identical(node1.left, node2.left) &&
      identical(node1.right, node2.right)
    ) {
      return true;
    }
  }
  return false;
};

console.log(identical(a, b));

module.exports = { identical };
