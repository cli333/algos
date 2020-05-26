// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

//   Example 1:

// Input: 1         1
//   / \       / \
// 2   3     2   3

// [1, 2, 3], [1, 2, 3]

// Output: true
// Example 2:

// Input: 1         1
//   /           \
// 2             2

// [1, 2], [1, null, 2]

// Output: false

const { Node } = require("./index");

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.left = b;
a.right = c;

const e = new Node("a");
const f = new Node("b");
const g = new Node("c");
e.left = f;
e.right = g;

const h = new Node("a");
const i = new Node("b");
const j = new Node("d");
h.left = i;
h.right = j;

const k = new Node("a");
const l = new Node("b");
k.left = l;

const m = new Node("a");
const n = new Node("b");
m.right = n;

function solve(root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2 || root1.val !== root2.val) return false;
  let left = solve(root1.left, root2.left);
  let right = solve(root1.right, root2.right);
  return left && right;
}

console.log(solve(a, e));
console.log(solve(a, h));
console.log(solve(k, m));
