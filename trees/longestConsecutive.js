const { Node } = require("./index");

// Description

// Given a binary tree, find the length of the longest consecutive sequence path.

// The path refers to any sequence of nodes from some starting node to any node in the tree along the parent - child connections.
// The longest consecutive path need to be from parent to child(cannot be the reverse).

// Have you met this question in a real interview ?
//   Example
// Example 1:

// Input:
//  1
//    \
//    3
//   / \
// 2   4
//      \
//       5
// Output: 3
// Explanation:
// Longest consecutive sequence path is 3 - 4 - 5, so return 3.
// Example 2:

// Input:
// 2
// \
//  3
//   /
//   2
//   /
//   1
// Output: 2
// Explanation:
// Longest consecutive sequence path is 2 - 3, not 3 - 2 - 1, so return 2.

const a = new Node(1);
const b = new Node(3);
const c = new Node(2);
const d = new Node(4);
const e = new Node(5);

a.right = b;
b.left = c;
b.right = d;
d.right = e;

const A = new Node(2);
const B = new Node(3);
const C = new Node(2);
const D = new Node(1);

A.right = B;
B.left = C;
C.left = D;

const solve = (root) => {
  // only traverse right side of tree
  let maxLen = 1;
  trav(root, 1);
  return maxLen;

  function trav(root, currentLen) {
    // if no root or right return
    if (!root || !root.right) return;
    // if the right node is "next in the consecutive sequence" update the current length
    if (root.right.val === root.val + 1) {
      currentLen++;
    } else {
      // if not consecutive, reset the current length
      currentLen = 1;
    }

    // update the max length
    maxLen = Math.max(currentLen, maxLen);

    // traverse both trees
    // can pass in 1 to left, because it will never be part of the consecutive sequence, so reset, meh!!!
    trav(root.left, 1);
    trav(root.right, currentLen);
  }
};

console.log(solve(a)); // 3
console.log(solve(A)); // 2
