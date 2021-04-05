// 109. Convert Sorted List to Binary Search Tree
// Medium

// 2674

// 93

// Add to List

// Share
// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example 1:

// Input: head = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

class LNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class TNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new LNode(
  -10,
  new LNode(-3, new LNode(0, new LNode(5, new LNode(9))))
);

function s(head) {
  return helper(head, null);

  function helper(start, end) {
    if (start === end) return null;
    let slow = start;
    let fast = start;
    while (fast !== end && fast.next !== end) {
      slow = slow.next;
      fast = fast.next.next;
    }

    const root = new TNode(slow.val);
    root.left = helper(start, slow);
    root.right = helper(slow.next, end);
    return root;
  }
}

console.log(s(a));
