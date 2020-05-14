const { Node } = require("./index");

// Given a binary tree, return all root - to - leaf paths.

//   Note: A leaf is a node with no children.

//     Example:

// Input:

// 1
//   /   \
// 2     3
// \
// 5

// Output: ["1->2->5", "1->3"]

// Explanation: All root - to - leaf paths are: 1 -> 2 -> 5, 1 -> 3

const a = new Node(10);
const b = new Node(3);
const c = new Node(20);
const d = new Node(2);
const e = new Node(100);
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
c.left = f;
c.right = e;

/* 
  10
  3 20
  2 null 'f' 100

*/

const solve = (root) => {
  const out = [];
  if (!root) return result;
  let s = `${root.val}`;
  if (!root.left && !root.right) out.push(s);
  if (root.left) dfs(root.left, s);
  if (root.right) dfs(root.right, s);
  return out;

  function dfs(root, s = "") {
    s += `->${root.val}`;
    if (!root.left && !root.right) {
      out.push(s);
      return;
    }
    if (root.left) dfs(root.left, s);
    if (root.right) dfs(root.right, s);
  }
};

console.log(solve(a));

/* 
  10-3-2
  10-20-f
  10-20-100
*/
