// 129. Sum Root to Leaf Numbers
// Medium

// 2073

// 53

// Add to List

// Share
// Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

// An example is the root-to-leaf path 1->2->3 which represents the number 123.

// Find the total sum of all root-to-leaf numbers.

// Note: A leaf is a node with no children.

// Example:

// Input: [1,2,3]
//     1
//    / \
//   2   3
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.
// Example 2:

// Input: [4,9,0,5,1]
//     4
//    / \
//   9   0
//  / \
// 5   1
// Output: 1026
// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.a

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(1, new Node(2), new Node(3));

function s(root) {
  const res = [];
  helper(root);
  return res.reduce((acc, val) => acc + Number(val), 0);

  function helper(root, str = "") {
    if (!root) return;
    if (!root.left && !root.right) {
      res.push(str + `${root.val}`);
      return;
    }

    helper(root.left, `${str}${root.val}`);
    helper(root.right, `${str}${root.val}`);
  }
}

console.log(s(a), 25);
console.log(s(new Node(1, new Node(0))));
console.log(s(new Node(2, new Node(0), new Node(0))));
