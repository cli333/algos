// 99. Recover Binary Search Tree
// Hard

// 2247

// 85

// Add to List

// Share
// You are given the root of a binary search tree (BST), where exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

// Follow up: A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?

// Example 1:

// Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
// Example 2:

// Input: root = [3,1,4,null,null,2]
// Output: [2,1,4,null,null,3]
// Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(1, new Node(3, null, new Node(2)));
const b = new Node(3, new Node(1), new Node(4, new Node(2)));

function s(root) {
  // traverse the tree in order
  // find two pairs where NOT i-1 < i
  // OR if one is child of other, find one pair where NOT i-1 < i
  // [4, 15, 7, 10, 14, 5, 17]
  //      ^             ^

  // find 2 nodes
  let first;
  let second;
  let prevNode;

  helper(root);
  const x = first.val;
  first.val = second.val;
  second.val = x;

  function helper(root) {
    if (!root) return;
    helper(root.left);
    // find node where current.val < prev.val OR prev.val > current.val
    if (prevNode && prevNode.val > root.val) {
      // first node is prev
      if (!first) {
        first = prevNode;
      }
      // second node is the current
      second = root;
    }
    prevNode = root;
    helper(root.right);
  }
}
console.log(a);
s(a);
console.log(a);
console.log(b);
s(b);
console.log(b);
