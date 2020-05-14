const { Node } = require("./index");

// Given a binary tree, return the sum of values of its DEEPEST leaves.

const a = new Node(10);
const b = new Node(3);
const c = new Node(20);
const d = new Node(2);
const e = new Node(100);

a.left = b;
a.right = c;
b.left = d;
c.right = e;

/*
      10
      3 20
2 null  null  100
*/

const solve = (root) => {
  const q = [root, "/"];
  let sum = 0;
  while (q.length > 1) {
    let node = q.shift();
    if (node === "/") {
      sum = 0;
      q.push("/");
    } else {
      sum += node.val;
    }
    if (!q.length) sum = 0;
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
  return sum;
};

console.log(solve(a)); // 102
