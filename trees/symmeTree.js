// Given a binary tree, check whether it is a mirror of itself(ie, symmetric around its center).

// For example, this binary tree[1, 2, 2, 3, 4, 4, 3] is symmetric:

//      1
//      / \
//    2   2
//   / \ / \
// 3  4 4  3

// But the following[1, 2, 2, null, 3, null, 3] is not:

// 1
//   / \
// 2   2
// \   \
// 3    3

const { Node } = require("./index");

const a = new Node(1);
const b = new Node(2);
const c = new Node(2);
const d = new Node(3);
const e = new Node(4);
const f = new Node(4);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

const aa = new Node(1);
const bb = new Node(2);
const cc = new Node(2);
const dd = new Node(3);
const ee = new Node(3);

aa.left = bb;
aa.right = cc;
bb.right = dd;
cc.right = ee;

function solve(root) {
  if (!root) return true;
  return trav(root.left, root.right);

  function trav(left, right) {
    if (!left || !right) {
      return left === right;
    }
    if (left.val !== right.val) return false;

    return trav(left.left, right.right) && trav(left.right, right.left);
  }
}

console.log(solve(a));
console.log(solve(aa));
