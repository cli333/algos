// Given two non - empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s.A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:

//    3
//   / \
// 4   5
//   / \
// 1   2
// Given tree t:
//    4
//   / \
// 1   2
// Return true, because t has the same structure and node values with a subtree of s.

//   Example 2:
// Given tree s:

// 3
//   / \
// 4   5
//   / \
// 1   2
//   /
//   0

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

const x = new Node("c");
const y = new Node("d");
const z = new Node("f");

x.left = y;
x.right = z;

const aa = new Node("z");

function solve(main, sub) {
  if (!main) return false;
  if (isSame(main, sub)) return true;
  let left = solve(main.left, sub);
  let right = solve(main.right, sub);
  return left || right;

  function isSame(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2 || root1.val !== root2.val) return false;
    let left = isSame(root1.left, root2.left);
    let right = isSame(root1.right, root2.right);
    return left && right;
  }
}

console.log(solve(a, b)); // true
console.log(solve(a, g)); // true
console.log(solve(a, x)); // false
console.log(solve(a, aa)); // false
