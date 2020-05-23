const { Node } = require("./index");

let a = new Node(5);
let b = new Node(1);
let c = new Node(4);
let d = new Node(3);
let e = new Node(8);
let f = new Node(9);
let g = new Node(2);
let h = new Node(6);
let i = new Node(7);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.left = h;
d.right = i;

/* 
            5
      1         4           <-- lca of (8 and 7) = 1
  3       8  9     2            <-- 8
6   7                                 <-- 7 

*/

function solve(root, val1, val2) {
  // find lowest common ancestor

  // traverse the tree
  // if subtree contains the node, return it
  // else return null

  if (!root) return null;
  if (root.val === val1 || root.val === val2) return root;
  let left = solve(root.left, val1, val2);
  let right = solve(root.right, val1, val2);
  // if node is returned from left and right, return the root
  if (left && right) return root;
  // if nothing is returned from either return null
  if (!left && !right) return null;
  //
  return left ? left : right;
}

console.log(solve(a, 8, 7)); // 1
