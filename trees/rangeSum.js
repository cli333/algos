// Share
// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R(inclusive).

// The binary search tree is guaranteed to have unique values.

//   Example 1:

// Input: root = [10, 5, 15, 3, 7, null, 18], L = 7, R = 15
// Output: 32
// Example 2:

// Input: root = [10, 5, 15, 3, 7, 13, 18, 1, null, 6], L = 6, R = 10
// Output: 23

const { Node } = require("./index");

const a = new Node(10);
const b = new Node(3);
const c = new Node(12);
const d = new Node(20);
const e = new Node(5);
const f = new Node(2);

a.left = b;
a.right = c;
c.right = d;
b.left = f;
b.right = e;

function solve(root, l, r) {
  let sum = 0;
  trav(root, l, r);
  return sum;

  function trav(root, l, r) {
    if (!root) return;
    if (root.val < l) {
      trav(root.right, l, r);
    } else if (root.val > r) {
      trav(root.left, l, r);
    } else {
      sum += root.val;
      trav(root.left, l, r);
      trav(root.right, l, r);
    }
  }
}

console.log(solve(a, 2, 5)); // 2 + 3 + 5  = 10
