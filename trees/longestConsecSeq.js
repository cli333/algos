// Given a binary tree.Find the length of the longest path which comprises of nodes with consecutive values in increasing order.
// Every node is considered as a path of length 1.

// The path refers to any sequence of nodes from some starting node to any node in the tree along the parent - child connections.

//   Note: The longest consecutive path need to be from parent to child(cannot be the reverse).

// For Example

// Input 1:
//      2
//    /  \
//    3    1
//   / \
// 4  5
// Output 1:
// 3
// Explanation 1:
// Longest consecutive path is 2 - 3 - 4.

// Input 2:
// 2
// \
// 3
//   /
//   2
//   /
//   1
// Output 2:
// 2
// Explanation 2:
// Longest consecutive path is 2 - 3.

const { Node } = require("./index");
const a = new Node(1);
const b = new Node(3);
const c = new Node(2);
const d = new Node(4);
const e = new Node(5);

a.right = b;
b.left = c;
b.right = d;
d.right = e;

function solve(root) {
  let len = 1;
  trav(root, 0, null);
  return len;

  function trav(root, curLen, target) {
    if (!root) {
      return;
    } else if (root.val === target) {
      curLen++;
    } else {
      curLen = 1;
    }

    len = Math.max(len, curLen);

    trav(root.left, curLen, root.val + 1);
    trav(root.right, curLen, root.val + 1);
  }
}

console.log(solve(a));
