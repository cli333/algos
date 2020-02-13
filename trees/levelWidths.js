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

// find the widths of each level of a tree

const levelWidths = root => {
  const arr = [root, "/"];
  const out = [0];

  while (arr.length > 1) {
    let first = arr.shift();
    if (first === "/") {
      arr.push("/");
      out.push(0);
    } else {
      if (first.left) arr.push(first.left);
      if (first.right) arr.push(first.right);
      out[out.length - 1]++;
    }
  }

  return out;
};

console.log(levelWidths(a));
