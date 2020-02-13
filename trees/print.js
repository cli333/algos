const { Node } = require("./index");

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");

a.left = b;
a.right = c;
c.right = d;

// print out a tree

const print = root => {
  const tree = { val: root.val };
  tree.left = root.left ? print(root.left) : null;
  tree.right = root.right ? print(root.right) : null;
  return tree;
};

console.log(print(a));
